const express = require('express');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server has started running on port ${port}.`);
});

app.get('/', (req, res) => {
    console.log('Server has received http request.');
});

const sendEmail = (options) => {
    let transporter = nodemailer.createTransport(sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    }))
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    })
};

const EmailSender = ({ name, email, message }) => {
    const options = {
        from: '"Website Contact" <contact@pabloarenivar.io>',
        to: "piarenivar@gmail.com",
        subject: `New message from ${name}`,
        html: `<p>${name}, ${email}, ${message}</p>`
    };

    sendEmail(options)
};

app.post('/success', async (req, res) => {
    try {
        const { name, email, message } = req.body
        EmailSender({ name, email, message });
        res.json({ msg: 'Your message has been sent successfully' });
    } catch (error) {
        res.status(404).json({ msg: "Error" });
    }
}) 