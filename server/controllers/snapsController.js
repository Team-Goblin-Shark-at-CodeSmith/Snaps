const db = require('../models/snapsModel');
const puppeteer = require('puppeteer');

const snapsController = {};

snapsController.scrapeWeb = async (req, res, next) => {
  try {
    // launches a new browswer and open a tab
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // goes to the url passed in by the user in the URL field
    await page.goto(`${req.body.url}`);

    // grabs the entire page
    const grabText = await page.$eval('*', (el) => {
      // from the URL that puppeteer nativages to, puppeteer grabs all the text rendered in the HTML
      const pageText = el.innerText;
      return pageText;
    });

    await browser.close();
    res.locals.scrape = grabText;
  
    return next();
  } catch (error) {
      const err = {
        log: 'Express error handler caught error in snapsController.scrapeWeb',
        status: 500,
        message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}

snapsController.makeApiCall = async (req, res, next) =>  {
  try {
    // these lines of code must be written this way to properly make a request to Open AI
    const rawResponse = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ` + process.env.REACT_APP_OPENAI_KEY,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
            {
              // content is the instructions provided to Chat GPT on each request
                role: "user",
                content: `Summarize the text from this article in a two sentences: ${res.locals.scrape}`,
            },
            ],
            temperature: 0.7,
        }),
        }
    );
    const content = await rawResponse.json();
    // the response sent back from Open AI is an object with a property that contains an array, which contains a nested object
    // which contains the message from Chat GPT
    const summary = content.choices[0].message.content.toString();
    res.locals.content = summary;
    return next();
  } catch (error) {
      const err = {
        log: 'Express error handler caught error in snapsController.makeApiCall',
        status: 500,
        message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}

snapsController.addSnap = async (req, res, next) => {
  try {
    const queryObj = {
      text: 'INSERT INTO Snaps (user_id, title, url, snap) VALUES ($1, $2, $3, $4);',
      values: [req.body.user_id, req.body.title, req.body.url, res.locals.content],
    };
    await db.query(queryObj);

    const getAllQuery = {
      text: `SELECT * FROM users LEFT OUTER JOIN snaps ON users.id = snaps.user_id WHERE snaps.user_id = $1;`,
      values: [req.body.user_id],
    };
    
    const allSnaps = await db.query(getAllQuery);
    res.locals.allSnaps = allSnaps.rows;
    return next();
  } catch {
    const err = {
      log: 'Express error handler caught error in snapsController.addSnap',
      status: 500,
      message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}

module.exports = snapsController;