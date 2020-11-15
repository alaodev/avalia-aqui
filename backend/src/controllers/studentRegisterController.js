const StudentRegister = require('../models/StudentRegister');

module.exports = {

    async indexRegister(req, res) {
        await StudentRegister.index(res);
    },

    async showByIdRegister(req, res) {
        const register = req.params.register;

        await StudentRegister.showById(res, register);
    },

    async createStudentRegister(req, res) {
        const data = req.body;

        await StudentRegister.create(res, data);
    },

    async deleteRegister(req, res) {
        const register = req.params.register;

        await StudentRegister.delete(res, register);
    },

    async updateRegister(req, res) {
        const register = req.params.register;
        const data = req.body;

        await StudentRegister.update(res, register, data);
    }
    
}