const puppeteer = require('puppeteer');

module.exports = {

    async auth(registration, password, res) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://sol.pucgoias.edu.br/aluno/');
        await page.type('input[name="matricula"]', registration);
        await page.type('input[name="senha"]', password);
        await page.keyboard.press('Enter');
    
        const valid = await page.waitForSelector('.ola', {timeout: 10000})
        .then(() => {
            return res.json(true);
        })
        .catch(() => {
            return res.json(false);
        });
    }

}