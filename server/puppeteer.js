const puppeteer = require('puppeteer');

const scrapePage = (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://en.wikipedia.org/wiki/Simulation_hypothesis');

    const grabIntro = await page.evaluate(() => {
        const pageText = document.querySelector('#mw-content-text p');
        return pageText.innerText;
    })

    console.log(grabIntro);

    await browser.close();
    return grabIntro;
})();

module.exports = scrapePage;