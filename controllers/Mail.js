const nodemailer = require("nodemailer");

function Mail(req, res) {
  let transporter = nodemailer.createTransport({
    // host: 'visveshnaraharisetty@gmail.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "visveshnaraharisetty@gmail.com", // generated ethereal user
      pass: "iitjee123", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

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

module.exports = {
  Mail: Mail,
};
