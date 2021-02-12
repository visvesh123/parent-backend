var request = require('request')


const message = (req,res , next )=> {

console.log("Sending Message")
  var options = { method: 'GET',
  url: 'https://smsstriker.com/API/sms.php',
  qs:
  { username: 'xxxxxx',
  password: 'xxxxxx',
  from: 'xxxxxx',
  to: 'xxxxxxxxx',
  msg: 'xxxxxx',
  type: '1' },
  };
  request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);

  res.json({
    msg :" Sent Message"

  })
  });
  


}


module.exports = message