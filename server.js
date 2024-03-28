require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hello! This is your practice deployment app!')
})

app.get('*', (req, res) => {
    res.send('<h1>Error! Page was not found.</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`You have been connected to port ${process.env.PORT}!`)
})

module.exports = app;