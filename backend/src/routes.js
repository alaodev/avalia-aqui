const { Router } = require('express');

const authController = require('./controllers/authController');
const teacherRegisterController = require('./controllers/teacherRegisterController');
const studentRegisterController = require('./controllers/studentRegisterController');

const routes = Router();

routes.get('/teacher-register', teacherRegisterController.indexRegister);
routes.get('/teacher-register/:id', teacherRegisterController.showByIdRegister);
routes.post('/teacher-register', teacherRegisterController.createTeacherRegister);
routes.delete('/teacher-register/:id', teacherRegisterController.deleteRegister);
routes.patch('/teacher-register/:id', teacherRegisterController.updateRegister);

routes.get('/student-register', studentRegisterController.indexRegister);
routes.get('/student-register/:register', studentRegisterController.showByIdRegister);
routes.post('/student-register', studentRegisterController.createStudentRegister);
routes.delete('/student-register/:register', studentRegisterController.deleteRegister);
routes.patch('/student-register/:register', studentRegisterController.updateRegister);

routes.post('/auth', authController.auth);

module.exports = routes;