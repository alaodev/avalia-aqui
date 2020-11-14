const puppeteer = require('puppeteer');

module.exports = {
    
    async auth(req, res) {
        options = { timeout: 10000 };
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://sol.pucgoias.edu.br/aluno/');
        await page.type('input[name="matricula"]', req.body.registration);
        await page.type('input[name="senha"]', req.body.password);
        await page.keyboard.press('Enter');
        await page.waitForSelector('.ola', options)
        .then(() => {
            return res.json(true);
        })
        .catch(() => {
            return res.json(false);
        });
    }

}