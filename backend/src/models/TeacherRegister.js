const con = require('../db/connection');

class TeacherRegister {

    index(res) {
        const sql = 'SELECT * FROM teacher';

        con.query(sql, (err, result) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(result);
            }
        });
    }

    showById(res, id) {
        const sql = 'SELECT * FROM teacher WHERE id = ?';

        con.query(sql, id, (err, result) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(result);
            }
        });
    }

    create(res, data) {
        const sql = 'INSERT INTO teacher SET ?';

        con.query(sql, data, (err, result) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(result);
            }
        });
    }

    delete(res, id) {
        const sql = 'DELETE FROM teacher WHERE id = ?';

        con.query(sql, id, (err, result) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(result);
            }
        });
    }

    update(res, id, data) {
        const sql = 'UPDATE teacher SET ? WHERE id = ?';

        con.query(sql, [data, id], (err, result) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(result);
            }
        });
    }

}

module.exports = new TeacherRegister;