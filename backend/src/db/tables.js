class Tables {
    init(con) {
        this.con = con;
        this.createTableStudent();
        this.createTableTeacher();
        this.createTableAvaliation();
        this.alterTableStudent();
        this.alterTableTeacher();
        this.alterPkAvaliation();
    }

    createTableStudent() {
        const sql = `
            CREATE TABLE IF NOT EXISTS student(
                register VARCHAR(14) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table student successfully created.');
            }
        });
    }

    createTableTeacher() {
        const sql = `
            CREATE TABLE IF NOT EXISTS teacher(
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                departament VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table teacher successfully created.');
            }
        });
    }

    createTableAvaliation() {
        const sql = `
            CREATE TABLE IF NOT EXISTS avaliation(
                note1 INTEGER NOT NULL,
                note2 INTEGER NOT NULL,
                note3 INTEGER NOT NULL,
                note4 INTEGER NOT NULL,
                note5 INTEGER NOT NULL,
                id_student VARCHAR(14) NOT NULL,
                id_teacher INTEGER NOT NULL,
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Table avaliation successfully created.');
            }
        });
    }

    alterTableStudent() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT fk_student FOREIGN KEY (id_student) REFERENCES student (register);
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Alter table student successfully executed.');
            }
        });
    }

    alterTableTeacher() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT fk_teacher FOREIGN KEY (id_teacher) REFERENCES teacher (id);
        `;

        this.con.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Alter table teacher successfully executed.');
            }
        });
    }

    alterPkAvaliation() {
        const sql = `
            ALTER TABLE avaliation
            ADD CONSTRAINT pk_avaliation PRIMARY KEY (id_student, id_teacher);
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