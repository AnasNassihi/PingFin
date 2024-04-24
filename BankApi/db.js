const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "ID416124_databaseBank.db.webhosting.be",
    user: "ID416124_databaseBank",
    password: "groep8bank",
    database: "ID416124_databaseBank"
})

/*$query = "select * from CB_banks";
    connection.query($query, (error, result)=>{
        if(error) console.log(error);
        //res.status(200).json(result.rows);
        console.log(result);
    });*/

    $query = "select * from CB_po_out ";
    connection.query($query, (error, result)=>{
        if(error) console.log(error);
        //res.status(200).json(result.rows);
        console.log(result);
    });

/*function getAllBanks (req, res) {
    $query = "select * from CB_banks";
    connection.query($query, (error, result)=>{
        if(error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
} */

/*function poIn(po){    
    $query = 'insert into PO_in (po_id,po_amount,po_message,po_datetime,ob_id,oa_id,ob_code,ob_datetime,cb_code,cb_datetime,bb_id,ba_id,bb_code,bb_datetime) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    connection.query($query, [po.data[0].po_id,po.data[0].po_amount,po.data[0].po_message])
    po.data[0].
}*/

function poOut(){
   
}

function ackIn(){
   
}

function ackOut(){
   
}

function makeLog(){
   
}

/*module.exports = {
    getAllBanks,
    //poIn,
    poOut,
    ackIn,
    ackOut,
    makeLog
};*/

//connection.query("SELECT * from CB_banks").then(result =>{
//    console.log(result);
//})
