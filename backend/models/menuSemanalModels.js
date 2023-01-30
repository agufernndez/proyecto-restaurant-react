var pool = require('./bd');

async function getMenuSemanal(user, password) {
    let query = 'select * from menuSemanal';
    let rows = await pool.query(query);
    return rows;
}

async function insertMenu(obj) {
    try {
        let query = 'insert into menuSemanal set ?';
        let rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;

    }
}

module.exports = {getMenuSemanal, insertMenu}