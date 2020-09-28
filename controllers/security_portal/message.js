const messagebird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);

messagebird.messages.create(
  {
    originator: "Mahindra University",
    recipients: ["9676399294"],
    body:
      "Hello World, I am a text message and I was hatched by Javascript code!",
  },
  function (err, response) {
    if (err) {
      console.log("ERROR:");
      console.log(err);
    } else {
      console.log("SUCCESS:");
      console.log(response);
    }
  }
);
