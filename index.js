const {createPool} = require ('mysql')
const pool =createPool({
    "username" :"root",
    "hostname" :"localhost",
    "password" :"",
    "database" :"mern",
    "connectionlimit" :10


})

pool.query(`select * from fullstack`)