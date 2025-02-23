const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new', // GitHub Actions環境で動作するように設定
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://example.com'); // スクレイピング対象のURL

    const title = await page.title();
    console.log(`Page title: ${title}`);

    await browser.close();
})();
