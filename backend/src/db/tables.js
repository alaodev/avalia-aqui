class Tables {
    init(con) {
        this.con = con;
        this.createTableStudents();
        this.createTableTeachers();
        this.createTableAvaliations();
        this.alterTableStudents();
        this.alterTableTeachers();
        this.alterPkAvaliation();
    }

    createTableStudents() {
        const sql = `
            CREATE TABLE IF NOT EXISTS students(
                register VARCHAR(14) PRIMARY KEY,
                username VARCHAR(255) NOT NULL
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table students successfully created.');
            }
        });
    }

    createTableTeachers() {
        const sql = `
            CREATE TABLE IF NOT EXISTS teachers(
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table teachers successfully created.');
            }
        });
    }

    createTableAvaliations() {
        const sql = `
            CREATE TABLE IF NOT EXISTS avaliation(
                note1 INTEGER NOT NULL,
                note2 INTEGER NOT NULL,
                note3 INTEGER NOT NULL,
                note4 INTEGER NOT NULL,
                note5 INTEGER NOT NULL,
                id_students VARCHAR(14) NOT NULL,
                id_teachers INTEGER NOT NULL
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table avaliations successfully created.');
            }
        });
    }

    alterTableStudents() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT fk_students FOREIGN KEY (id_students) REFERENCES students (register);
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Alter table students successfully executed.');
            }
        });
    }

    alterTableTeachers() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT fk_teachers FOREIGN KEY (id_teachers) REFERENCES teachers (id);
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Alter table teachers successfully executed.');
            }
        });
    }

    alterPkAvaliation() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT pk_avaliation PRIMARY KEY (id_students, id_teachers);
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Alter table pk_avaliation successfully executed.');
            }
        });
    }

}

module.exports = new Tables;