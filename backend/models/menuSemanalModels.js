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

// para BORRAR un plato principal
async function deletePlatoPrincipalById (id) {
    var query = 'delete from menuSemanal where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = {getMenuSemanal, insertMenu, deletePlatoPrincipalById}