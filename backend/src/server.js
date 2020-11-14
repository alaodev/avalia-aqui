const app = require('./app');
const con = require('./db/connection');
const Tables = require('./db/tables');

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected.');

        // Descomente para executar a criação do banco.
        // Tables.init(con);

        app.listen(3000, console.log('Server running on port 3000.'));
    }
});