
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