const { Router } = require('express');

const authController = require('./controllers/authController');
const teacherRegisterController = require('./controllers/teacherRegisterController');
const studentRegisterController = require('./controllers/studentRegisterController');
const avaliationRegisterController = require('./controllers/avaliationRegisterController');

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

routes.get('/avaliation-register', avaliationRegisterController.indexRegister);
routes.get('/avaliation-register/student/:id_student', avaliationRegisterController.showByStudentRegister);
routes.get('/avaliation-register/teacher/:id_teacher', avaliationRegisterController.showByTeacherRegister);
routes.get('/avaliation-register/:id_student/:id_teacher', avaliationRegisterController.showByIdRegister);
routes.post('/avaliation-register', avaliationRegisterController.createAvaliationRegister);
routes.delete('/avaliation-register/:id_student/:id_teacher', avaliationRegisterController.deleteRegister);
routes.patch('/avaliation-register/:id_student/:id_teacher', avaliationRegisterController.updateRegister);

routes.post('/auth', authController.auth);

module.exports = routes;