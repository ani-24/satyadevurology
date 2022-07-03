const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Mobile: ${body.mobile}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "personalityenglish@gmail.com",
    from: "rajeshwar9204@gmail.com",
    subject: `You've got a message from ${body.name}. Check it out`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  mail.send(data);

  res.status(200).json({ status: "OK" });
};
