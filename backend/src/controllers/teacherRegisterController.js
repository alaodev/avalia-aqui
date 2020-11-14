const { showById } = require('../models/TeachersRegister');
const TeacherRegister = require('../models/TeachersRegister');

module.exports = {

    async indexRegister(req, res) {
        await TeacherRegister.index(res);
    },

    async showByIdRegister(req, res) {
        const id = req.params.id;

        await TeacherRegister.showById(res, id);
    },

    async createTeacherRegister(req, res) {
        const data = req.body;

        await TeacherRegister.create(res, data);
    },

    async deleteRegister(req, res) {
        const id = req.params.id;

        await TeacherRegister.delete(res, id);
    },

    async updateRegister(req, res) {
        const id = req.params.id;
        const data = req.body;

        await TeacherRegister.update(res, id, data);
    }
    
}