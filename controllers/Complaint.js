const nodemailer = require("nodemailer");

function Complaint(req, res) {
  const det = [
    { field: "Applier Name", value: req.body.father },
    { field: "Student Name", value: req.body.name },
    { field: "ID No", value: req.body.id },
    { field: "Batch", value: req.body.batch },
    { field: " Parent Mobile number", value: req.body.mobile },
    { field: " Parent Email", value: req.body.email },
  ];

  const type = req.body.type;
  const desc = req.body.desc;
  const mail = req.body.mail;

  let transporter = nodemailer.createTransport({
    // host: 'visveshnaraharisetty@gmail.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "mecparentsportal@gmail.com", // generated ethereal user
      pass: "SureVish*22", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "mecparentsportal@gmail.com", // sender address
    to: mail, // list of receivers
    subject: ` Grievance type:  ${type}`, // Subject line
    text: `Description : ${desc}`, // plain text body

    attachments: [
      {
        filename: "applier_details.txt",
        content: `${det[0].field} : ${det[0].value}  ${det[1].field} : ${det[1].value}    ${det[2].field} : ${det[2].value}  ${det[3].field} : ${det[3].value}     ${det[4].field} : ${det[4].value}    ${det[5].field} : ${det[5].value}     `,
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
