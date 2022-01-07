const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1"
};

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user(info) values (?)`;
    await connection.queryAsync(sql, [user.info]);
    await connection.endAsync();
}

//const user = { info: "hiiii" };


async function selectAllUser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `select * from user`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    return list;
}

module.exports = { selectAllUser, addUser };