const nodemailer = require("nodemailer");

function Complaint(req, res) {
  const type = req.body.type;
  const desc = req.body.desc;

  let transporter = nodemailer.createTransport({
    // host: 'visveshnaraharisetty@gmail.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "mecparentsportal@gmail.com", // generated ethereal user
      pass: "parents1234", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "mecparentsportal@gmail.com", // sender address
    to: "visveshnaraharisetty@gmail.com, visvesh18568@mechyd.ac.in", // list of receivers
    subject: `${type}`, // Subject line
    text: `${desc}`, // plain text body
    //   html: "hello"
    attachments: [
      {
        filename: "text1.txt",
        content: "18888883!",
      },
    ],
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json({
      msg: "Mail sent",
    });
  });
}

module.exports = { Complaint: Complaint };
