const { Router } = require('express');

const authController = require('./controllers/authController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Olá' });
})

routes.post('/auth', (req, res) => {
    const registration = req.body.registration;
    const password = req.body.password;

    authController.auth(registration, password, res); 
});

module.exports = routes;