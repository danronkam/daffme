
const express = require('express');

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 2120;


app.listen(PORT, () => {
    console.log("Hamster Running on PORT:", PORT);
});

app.get("/status", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/about", (req, res) => { // elevator pitch
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/contact", (req, res) => { // where to contact me / follow online
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/socials", (req, res) => { //  follow online
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/work", (req, res) => { 
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/projects", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/bar", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});


app.get("/education", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/skills", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

app.get("/hobbies", (req, res) => {
    const status = {
        "Status": "(🖒^^)"
    };

    res.send(status);
});

