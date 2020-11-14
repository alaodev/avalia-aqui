const { Router } = require('express');

const authController = require('./controllers/authController');
const teacherRegisterController = require('./controllers/teacherRegisterController');

const routes = Router();

routes.get('/teacher-register', teacherRegisterController.indexRegister);
routes.get('/teacher-register/:id', teacherRegisterController.showByIdRegister);
routes.post('/teacher-register', teacherRegisterController.createTeacherRegister);
routes.delete('/teacher-register/:id', teacherRegisterController.deleteRegister);
routes.patch('/teacher-register/:id', teacherRegisterController.updateRegister);


routes.post('/auth', authController.auth);

module.exports = routes;