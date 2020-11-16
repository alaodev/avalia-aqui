const con = require('../db/connection');

class AvaliationRegister {

  index(res) {
    const sql = 'SELECT * FROM avaliation';

    con.query(sql, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  showById(res, id_student, id_teacher) {
    const sql = 'SELECT * FROM avaliation WHERE id_student = ? AND id_teacher = ?';

    con.query(sql, [id_student, id_teacher], (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  showByStudent(res, id_student) {
    const sql = 'SELECT * FROM avaliation WHERE id_student = ?';

    con.query(sql, id_student, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  showByTeacher(res, id_teacher) {
    const sql = 'SELECT * FROM avaliation WHERE id_teacher = ?';

    con.query(sql, id_teacher, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  create(res, data) {
    const sql = 'INSERT INTO avaliation SET ?';

    con.query(sql, data, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  delete(res, id_student, id_teacher) {
    const sql = 'DELETE FROM avaliation WHERE id_student = ? AND id_teacher = ?';

    con.query(sql, [id_student, id_teacher], (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  update(res, id_student, id_teacher, data) {
    const sql = 'UPDATE avaliation SET ? WHERE id_student = ? AND id_teacher = ?';

    con.query(sql, [data, id_student, id_teacher], (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

}

module.exports = new AvaliationRegister;