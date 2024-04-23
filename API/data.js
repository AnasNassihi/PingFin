const mysql = require('msql');

const connection = mysql.createConnection({
    host: "ID416124_databaseBank.db.webhosting.be",
    user: "ID416124_databaseBank",
    password: "groep8bank",
    database: "ID416124_databaseBank"
})

function getAllBanks(callback){
    $query = "select * CB_banks"
    connection.query($query, (err, result)=>{
        if(err){
            console.log(err);
            callback(null, result);
        }
        callback(null, result);
    });
}

function poIn(po){    
    $query = 'insert into PO_in (po_id,po_amount,po_message,po_datetime,ob_id,oa_id,ob_code,ob_datetime,cb_code,cb_datetime,bb_id,ba_id,bb_code,bb_datetime) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    connection.query($query, [po.data[0].po_id,po.data[0].po_amount,po.data[0].po_message])
    po.data[0].
}

function poOut(){
   
}

function ackIn(){
   
}

function ackOut(){
   
}

function makeLog(){
   
}

module.exports = {
    getAllBanks,
    poIn,
    poOut,
    ackIn,
    ackOut,
    makeLog
};