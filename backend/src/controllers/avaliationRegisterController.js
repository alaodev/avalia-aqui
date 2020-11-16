const AvaliationRegister = require('../models/AvaliationRegister');

module.exports = {

  async indexRegister(req, res) {
    await AvaliationRegister.index(res);
  },

  async showByIdRegister(req, res) {
    const id_student = req.params.id_student;
    const id_teacher = req.params.id_teacher;

    await AvaliationRegister.showById(res, id_student, id_teacher);
  },

  async showByStudentRegister(req, res) {
    const id_student = req.params.id_student;

    await AvaliationRegister.showByStudent(res, id_student);
  },
  
  async showByTeacherRegister(req, res) {
    const id_teacher = req.params.id_teacher;

    await AvaliationRegister.showByTeacher(res, id_teacher);
  },

  async createAvaliationRegister(req, res) {
    const data = req.body;

    await AvaliationRegister.create(res, data);
  },

  async deleteRegister(req, res) {
    const id_student = req.params.id_student;
    const id_teacher = req.params.id_teacher;

    await AvaliationRegister.delete(res, id_student, id_teacher);
  },

  async updateRegister(req, res) {
    const id_student = req.params.id_student;
    const id_teacher = req.params.id_teacher;
    const data = req.body;

    await AvaliationRegister.update(res, id_student, id_teacher, data);
  }

}