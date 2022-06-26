const mysql = require("mysql")

const pool = mysql.createConnection({
    host: "",
    user: '',
    password: '',
    database: ''
})

pool.connect(function(err){
    if(err){
        console.log(err)
        return

    }
})

module.exports = pool
