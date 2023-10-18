const express = require('express');
const app = express();
const bp = require('body-parser');
const port = process.env.PORT || 5500;
const sendMail = require('./SendMail');

app.use(bp.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('build'));


app.get("/", (req, res) =>
{
    res.send('testing...');
})

app.post("/sendMail", async (req, res) =>
{
    console.log(req.body);
    let responce = await sendMail(req.body);
    console.log('responce', responce);
    if (responce.status === 200) {
        return res.status(200).json({ message: 'Success' });
    }
    else {
        return res.status(300).json({ message: 'mail not sent' });
    }
})

app.listen(port, () => { console.log('listening on port', port); })