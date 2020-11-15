const con = require('../db/connection');

class StudentRegister {
  
  index(res) {
    const sql = 'SELECT * FROM student';

    con.query(sql, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  showById(res, register) {
    const sql = 'SELECT * FROM student WHERE register = ?';

    con.query(sql, register, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  create(res, data) {
    const sql = 'INSERT INTO student SET ?';
    
    con.query(sql, data, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  delete(res, register) {
    const sql = 'DELETE FROM student WHERE register = ?';

    con.query(sql, register, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }

  update(res, register, data) {
    const sql = 'UPDATE student SET ? WHERE register = ?';

    con.query(sql, [data, register], (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
  }
}

module.exports = new StudentRegister;