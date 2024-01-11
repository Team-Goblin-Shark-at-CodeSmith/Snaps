const db = require('../models/snapsModel');
const puppeteer = require('puppeteer');

const snapsController = {};

snapsController.scrapeWeb = async (req, res, next) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${req.body.url}`);

    const grabIntro = await page.evaluate(() => {
        const pageText = document.querySelector('#mw-content-text p', );
        return pageText.innerText;
    })

    await browser.close();
    res.locals.scrape = grabIntro;
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
    console.log('this is the data scraped by the web scraper: ', res.locals.scrape)
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
            model: "gpt-3.5-turbo",
            messages: [
            {
                role: "user",
                content: `Summarize this paragraph in a single sentence: ${res.locals.scrape}`,
            },
            ],
            temperature: 0.7,
        }),
        }
    );
    const content = await rawResponse.json();
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

snapsController.getSnaps = async (req, res, next) => {
  try {
      const getAllQuery = {
        text: `SELECT * FROM users LEFT OUTER JOIN snaps ON users.id = snaps.user_id WHERE snaps.user_id = $1;`,
        values: [res.locals.id],
      };
      //const getAllQuery = `SELECT * FROM users LEFT OUTER JOIN snaps ON users.id = snaps.user_id WHERE snaps.user_id = 1;`
      const allSnaps = await db.query(getAllQuery);
      res.locals.allSnaps = allSnaps.rows;
    return next();
  } catch {
    const err = {
      log: 'Express error handler caught error in snapsController.getSnaps',
      status: 500,
      message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}

module.exports = snapsController;