const express = require('express');
const makeToken = require('jsonwebtoken');
const cors = require('cors');
//const data = require('./db');
const router = express.Router();

// was server.js
const app = express();
const port = 3001;

//const routes = require('./routes');

app.use(express.json());
app.use(cors());

app.use('/api', router);

// databank connection
//const mysql = require('mysql2/promise');
const mysql = require('mysql2');

// Establish connection to database
const connection = mysql.createPool({
    host: "ID416124_databaseBank.db.webhosting.be",
    user: "ID416124_databaseBank",
    password: "groep8bank",
    database: "ID416124_databaseBank",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 600000,
    queueLimit: 0
});

/*const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "ID416124_databaseBank.db.webhosting.be",
    user: "ID416124_databaseBank",
    password: "groep8bank",
    database: "ID416124_databaseBank"
})*/

// datetime format 
function getCurrentDateTime() {
    const now = new Date();

    // Get individual date and time components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding leading zero if needed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function insertPOToDb(tabel, po) {
    query1 = `insert into ${tabel} (po_id,po_amount,po_message,po_datetime,ob_id,oa_id,ob_code,ob_datetime,cb_code,cb_datetime,bb_id,ba_id,bb_code,bb_datetime) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const values = [
        po.po_id, po.po_amount,
        po.po_message, po.po_datetime,
        po.ob_id, po.oa_id,
        po.ob_code, po.ob_datetime,
        po.cb_code, po.cb_datetime,
        po.bb_id, po.ba_id,
        po.bb_code, po.bb_datetime];

    return [query1, values];
}

function updateData(tabel, po) {
    updateQuery = 'UPDATE CB_po_in SET cb_code = ?, cb_datetime = ? WHERE po_id = ?';
    const values = [po.cb_code, po.cb_datetime, po.po_id];

    return [updateQuery, values];
}

function makeLog(po, message, type) {
    query = `insert into CB_log (log_datetime,log_message,log_type,po_id,po_amount,po_message,po_datetime,ob_id,oa_id,ob_code,ob_datetime,cb_code,cb_datetime,bb_id,ba_id,bb_code,bb_datetime) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const now = getCurrentDateTime();
    const values = [
        now, message, type,
        po.po_id, po.po_amount,
        po.po_message, po.po_datetime,
        po.ob_id, po.oa_id,
        po.ob_code, po.ob_datetime,
        po.cb_code, po.cb_datetime,
        po.bb_id, po.ba_id,
        po.bb_code, po.bb_datetime];

    return [query, values];
}

function checkBank(po, callback){
    connection.query('select count(*) as a from CB_banks WHERE id = ?', [po.bb_id], (err, res) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        callback(res[0].a);                
    });
}

function checkCredentials(bic, secret_key, callback){
    connection.query('select count(*) as a from CB_banks where id=? and token=?',[bic, secret_key], (err, res) => {
        if(err){
            res.status(500).json({error: 'internal server error'});
            return;
        }
        callback(res[0].a);
    })
}

//token maken
router.post('/token', async (req,res)=>{
    const bankData = req.body.bankData;
    const bic = 'B4NK';
    const secret_key = 'secret';

    if (match == 0) {
        console.log('test1');
        po.cb_code = 4004;
        po.cb_datetime = getCurrentDateTime();
        console.log('test2');
        [query, values1] = updateData('CB_po_in', po);
        connection.query(query, values1);
        console.log('test3');
        [query, values1] = insertPOToDb('CB_ack_out', po);
        connection.query(query, values1);
        console.log('test4');

        response.status(200).json({
            ok: true, // true or false (succes/fail)
            status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
            code: po.cb_code, // message or error code; null/undefined if none
            message: "bb_id does not exist in the CB system", // detailed message from API; null/undefined if none
            data: null // array of PO objects or null/undefined if none
        });
        return;
    }
    else{
        console.log('test wrong');
    }
    if(bic === bankData.bic && secret_key === bankData.secret_key){
        const token = makeToken.sign({bic: bic, role: 'admin'}, 'mysecretkey', {expiresIn: '2h'});
        res.send(token);
        $query = 'insert into CB_token (bank_id, token, datetime) values (?,?,?)';
        connection.query($query,[bic,token,getCurrentDateTime()]);
    }
    console.log('invalid bank gegevens');

});

// bankInfo
router.get('/info/:id', (req, res) => {
    const id = req.params.id;
    $query = "select * from CB_banks WHERE id = ?";
    connection.query($query, [id], (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});

// functie "getAllBanks()"
router.get('/banks',  (req, res) => {
    $query = "select * from CB_banks";
    connection.query($query, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});
/*router.get('/banks', async (req, res) => {
    $query = "select * from CB_banks";
    /*const [rows] = connection.query($query/, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
    const conn = await connection.getConnection();

    const [result, fields]= await conn.query($query);
    conn.release();
    res.send(result);
});*/

// functie "poIN()"
router.get('/po_in', (req, res) => {
    $query = "select * from CB_po_in";
    connection.query($query, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});

router.post('/po_in', (required, response) => {
    const pos = required.body;
    pos.data.forEach(po => {
        let [query, values1] = makeLog(po, "Payment order received", "po_in");
        connection.query(query, values1);

        [query, values1] = insertPOToDb('CB_po_in', po);

        connection.query(query, values1, (err, result) => {
            if (err) {
                console.log(err);
            }

            // validatie op internal transaction
            // 4004  
            //const bankCheck = checkBank(po);
            let match = ''; 
            checkBank(po, (data)=>{
                match = data;
                //console.log(match);                                            
            });
            /*
            if (match == 0) {
                console.log('test1');
                po.cb_code = 4004;
                po.cb_datetime = getCurrentDateTime();
                console.log('test2');
                [query, values1] = updateData('CB_po_in', po);
                connection.query(query, values1);
                console.log('test3');
                [query, values1] = insertPOToDb('CB_ack_out', po);
                connection.query(query, values1);
                console.log('test4');

                response.status(200).json({
                    ok: true, // true or false (succes/fail)
                    status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
                    code: po.cb_code, // message or error code; null/undefined if none
                    message: "bb_id does not exist in the CB system", // detailed message from API; null/undefined if none
                    data: null // array of PO objects or null/undefined if none
                });
                return;
            }
            else{
                console.log('test wrong');
            }*/   

            if (po.bb_id === po.ob_id) {
                po.cb_code = 4001;
                po.cb_datetime = getCurrentDateTime();

                [query, values1] = updateData('CB_po_in', po);
                connection.query(query, values1);
                [query, values1] = insertPOToDb('CB_ack_out', po);
                connection.query(query, values1);

                response.status(200).json({
                    ok: true, // true or false (succes/fail)
                    status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
                    code: po.cb_code, // message or error code; null/undefined if none
                    message: "This is an internal transaction and should not be sent to the CB", // detailed message from API; null/undefined if none
                    data: null // array of PO objects or null/undefined if none
                });
                return;
            }
            else if (po.po_amount > 500) {
                po.cb_code = 4002;
                po.cb_datetime = getCurrentDateTime();

                [query, values1] = updateData('CB_po_in', po);
                connection.query(query, values1);
                [query, values1] = insertPOToDb('CB_ack_out', po);
                connection.query(query, values1);

                response.status(200).json({
                    ok: true, // true or false (succes/fail)
                    status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
                    code: po.cb_code, // message or error code; null/undefined if none
                    message: "The transaction amount exceeds the 500 euros limit", // detailed message from API; null/undefined if none
                    data: null // array of PO objects or null/undefined if none
                });
                return;
            }
            else if (po.po_amount < 0) {
                po.cb_code = 4003;
                po.cb_datetime = getCurrentDateTime();

                [query, values1] = updateData('CB_po_in', po);
                connection.query(query, values1);
                [query, values1] = insertPOToDb('CB_ack_out', po);
                connection.query(query, values1);

                response.status(200).json({
                    ok: true, // true or false (succes/fail)
                    status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
                    code: po.cb_code, // message or error code; null/undefined if none
                    message: "the transaction amount cannot be negative", // detailed message from API; null/undefined if none
                    data: null // array of PO objects or null/undefined if none
                });
                return;
            }                    

            //console.log(result);

            po.cb_code = 2000;
            po.cb_datetime = getCurrentDateTime();

            //update cb_code en cb_datetime
            [query, values1] = updateData('CB_po_in', po);
            connection.query(query, values1);

            //$updateQuery = 'UPDATE CB_po_in SET cb_code = ?, cb_datetime = ? WHERE po_id = ?';
            //connection.query($updateQuery, [po.cb_code, po.cb_datetime,po.po_id]);

            [query, values1] = insertPOToDb('CB_po_out', po);
            connection.query(query, values1);

            let [logQuery, logValues] = makeLog(po, "Payment order accepted (po_in -> po_out)", "po_out");
            connection.query(logQuery, logValues);

            //response.send(result);
            response.status(200).json({
                ok: true, // true or false (succes/fail)
                status: 200, // HTTP status code, e.g. 200 = ok, 404 = not found, 500 = server error...
                code: po.cb_code, // message or error code; null/undefined if none
                message: "Payment order received", // detailed message from API; null/undefined if none
                data: null // array of PO objects or null/undefined if none
            });
        });
    });
});

// po_out
router.get('/po_out', (req, res) => {
    $query = "SELECT * FROM CB_po_out";
    connection.query($query, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});

// ack_in
router.post('/ack_in', (required, response) => {
    const pos = required.body;
    pos.data.forEach(po => {
        let [query, values1] = makeLog(po, "Payment order response received", "ack_in");
        connection.query(query, values1);

        [query, values1] = insertPOToDb('CB_ack_in', po);

        connection.query(query, values1, (err, result) => {
            if (err) {
                console.log(err);
            }
            //console.log(result);

            po.cb_code = 2000;
            po.cb_datetime = getCurrentDateTime();

            //update cb_code en cb_datetime
            [query, values1] = updateData('CB_ack_in', po);
            connection.query(query, values1);
            //$updateQuery = 'UPDATE CB_ack_in SET cb_code = ?, cb_datetime = ? WHERE po_id = ?',
            //    connection.query($updateQuery, [po.cb_code, po.cb_datetime,po.po_id]);

            [query, values1] = insertPOToDb('CB_ack_out', po);
            connection.query(query, values1);

            let [logQuery, logValues] = makeLog(po, "Payment response ack_in -> ack_out", "ack_out");
            connection.query(logQuery, logValues);

            response.send(result);
        });
    });
});

//ack_out
router.get('/ack_out',  (req, res) => {
    $query = "SELECT * FROM CB_ack_out";
    connection.query($query, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});

// test logs
router.get('/logs', (req, res) => {
    $query = "SELECT * FROM CB_log";
    connection.query($query, (error, result) => {
        if (error) console.log(error);
        //res.status(200).json(result.rows);
        res.send(result);
    });
});

// was server.js
app.listen(port, () => console.log(`app listening on port ${port}`));