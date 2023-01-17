const app = require("express")();
const parser = require('body-parser');
const server = require("mssql/msnodesqlv8");

/////////////////////Middleware/////////////////
app.use(parser.urlencoded({"extended" : true}));
app.use(parser.json())

const config = {
    server : '192.168.171.36',
    database : '3342',
    driver : 'msnodesqlv8',
    options :{
        trustedConnection : true,
        TrustServerCertificate : true
    }
}
const pool = new server.ConnectionPool(config);

app.get("/Form", (req, res) => res.sendFile(__dirname + "/BooksAdding.html"));

app.get("/TableOfRecords", (req, res)=>res.sendFile(__dirname + "/BooksTable.html"));

app.post("/formPost", (req, res)=>{
    const body = req.body;
    console.log(body);
    const query = `INSERT INTO tblBooks VALUES(${body.No},${body.Name}, '${body.Author}', '${body.Language}',${body.Price})`;
    pool.connect().then(()=>{
        pool.request().query(query, (err, result) => {
            if (err)
                console.log(err)
            else
                res.send("Book inserted successfully")
        })
    }).catch((err)=>{
        console.error(err)
    })
})

app.post("/", (req, res)=>{
    const body = req.body;
    const query = `INSERT INTO tblBooks VALUES(${body.bookNo},${body.bookName}, '${body.bookAuthor}', '${body.bookLanguage}',${body.bookPrice})`;
    pool.connect().then(()=>{
        pool.request().query(query, (err, result) => {
            if (err)
                console.log(err)
            else
                res.send("Book inserted successfully")
        })
    }).catch((err)=>{
        console.error(err)
    })
})
app.get('/', (req, res)=>{
    
    pool.connect().then(()=>{
        pool.request().query("SeleCT * FROM tblBooks", (err, results)=>{
            if(err)
                console.error(err);
            else
                res.send(results.recordset);
        })
    }).catch((err)=>{
        if(err) console.log(err);
    })
})

app.get("/:id", (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    pool.connect().then(()=>{
        pool.request().query(`select * from tblBooks where bookNo = ${No}`, (err, result)=>{
            if(err) 
                console.error(err);
            else 
                res.send(result.recordset)
        })
    }).catch((err)=>{
        if(err) console.log(err);
    })
})

app.delete("/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    pool.connect().then(()=>{
        pool.request().query(`delete from tblBooks where bookNo = ${No}`, (err, result)=>{
            if(err) 
                console.error(err);
            else 
                res.send("Book deleted successfully")
        })
    }).catch((err)=>{
        if(err) console.log(err);
    })
})


app.listen(2421, () => console.log("Server at 2421"))



