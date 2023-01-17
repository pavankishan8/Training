const express = require('express');
const parse = require('body-parser');
const app = express();

app.use(parse.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send("Welcome to Camelot"));

app.get('/Home', (req, res) => res.sendFile(__dirname + "/Home.html"));
app.get('/Registration', (req, res) => res.sendFile(__dirname + "/Registration.html"));

app.get("/register", (req, res) => {
    const name = req.query.txtName;
    const email = req.query.txtEmail;
    res.send(`${name} is regeistered with us and will be contacted later with Email ${email}`)
})

app.post("/register", (req, res) => {
    if (req.body == null) {
        res.send("The form does not contain bosy data in it");
    } else {
        const name = req.body.txtName;
        const email = req.body.txtEmail;
        res.send(`${name} is registered via HTTP POST and will be contacted later with Email ${email}`)
    }
})

app.listen(4321, () => console.log("Server is available at 4321"));