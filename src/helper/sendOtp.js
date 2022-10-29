
const twilio = require('twilio');

const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN ; 
const twilioContact = process.env.ADMIN_NUMBER;

const sendSms = async (reciverContact, message="") => {
  const client = new twilio(accountSid, authToken);
  
  const response = await client.messages.create({
    body: message,
    to: reciverContact, // Text this number
    from: twilioContact, // From a valid Twilio number
  });
  console.log(response);
  return response;
}

module.exports = sendSms;