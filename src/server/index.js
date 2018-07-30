const express = require('express');

const app = express();
const PORT = 8000;

app.get('/status', (req, res) => {
    const localTime = (new Date()).toLocaleTimeString();

    res
        .status(200)
        .send(`Server time is ${localTime}.`);
});

app.get("*", (req, res) =>{
    res.sendStatus(404);
})