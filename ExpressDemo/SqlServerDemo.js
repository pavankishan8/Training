const app = require("express")();
const parser = require('body-parser');
const server = require("mssql/msnodesqlv8");

app.use(parser.urlencoded({ "extende": true }));
app.use(parser.json())


const config = {

    server: '192.168.171.36',
    database: '3342',
    driver: 'msnodesqlv8',

    options: {
        trustedConnection: true,
        TrustServerCertificate: true
    }
}

const pool = new server.ConnectionPool(config);

app.get("/Form", (req, res) => res.sendFile(__dirname + "/EmpAdding.html"));

app.get("/TableOfRecords", (req, res)=>res.sendFile(__dirname + "/empTable.html"));

app.post('/formPost',(req, res) => {
    const body = req.body;
    const query = `INSERT INTO EMPLOYEE values (${body.ID}, '${body.Name}','${body.Address}',${body.Salary})`;
    pool.connect().then(() => {
        pool.request().query(query, (err, results) => {
            if (err)
                console.error(err);
            else
                res.send("Employee inserted successfully");
        })

    }).catch((err) => {
        if (err) console.error(err);
    })
})

app.post('/',(req, res) => {
    const body = req.body;
    const query = `INSERT INTO EMPLOYEE values (${body.EmpID}, '${body.EmpName}','${body.EmpAddress}',${body.EmpSalary})`;
    pool.connect().then(() => {
        pool.request().query(query, (err, results) => {
            if (err)
                console.error(err);
            else
                res.send("Employee inserted successfully");
        })

    }).catch((err) => {
        if (err) console.error(err);
    })
})

app.get('/', (req, res) => {

    pool.connect().then(() => {
        pool.request().query(`SELECT * FROM EMPLOYEE`, (err, results) => {
            if (err)
                console.error(err);
            else
                res.send(results.recordset);
        })

    }).catch((err) => {
        if (err) console.log(err);
    })
})


app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.connect().then(() => {
        pool.request().query(`SELECT * FROM EMPLOYEE where EmpID = ${id}`, (err, results) => {
            if (err)
                console.error(err);
            else
                res.send(results.recordset);
        })

    }).catch((err) => {
        if (err) console.log(err);
    })
})

app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.connect().then(() => {
        pool.request().query(`DELETE FROM EMPLOYEE where EmpID = ${id}`, (err, results) => {
            if (err)
                console.error(err)
            else
                res.send("Record is deleted");
        })
    }).catch((err) => {
        if (err)
            console.log(err)
    })
})



app.listen(8555, () => console.log("Server available at 8555"))
