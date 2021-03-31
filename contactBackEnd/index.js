const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const cors = require("cors");
const smtpTransport = require("nodemailer-smtp-transport");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;


//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/contact", () => {
  resizeBy.send("hello");
});

//  app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.post("/api/send", (req, res) => {
  const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Last Name: ${req.body.lastname}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;
  // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport(smtpTransport({
    name:process.env.NAME,
    host:process.env.HOST,
    port: 465,
    secure: true,
    auth: {
      user:process.env.USER,
      pass:process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }));
  // verifying the connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages! status :",success);
    }
  });

  // setup email data with unicode symbols
  let mail = {
    from:`"Portfolio Contact" <${process.env.USER}>`, // sender address
    to: process.env.RECIEVER, // list of receivers
    subject: "Portfolio Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      console.log("Message sent: %s", data.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(data));

    }
  });
});

app.listen(PORT, () => {
  console.log("server is running...");
});
