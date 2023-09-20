const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Добавьте это

const app = express();
const port = 3000;
// yhzarlyqxosjfgr;
// Создайте транспорт для отправки писем (настройте параметры для вашего SMTP-сервера).
const transporter = nodemailer.createTransport({
   service: "gmail",
   host: "smtp.gmail.com",
   secure: true,
   name: "bot",
   port: 465,
   auth: {
      user: "botemailmeth@gmail.com",
      pass: "wvai vflr fuwt abyo",
   },
});

app.use(express.json());

// Включите поддержку CORS
app.use(cors());

// Обработка POST-запроса для отправки письма
app.post("/send-email", (req, res) => {
   const { email, subject, age, name } = req.body;
   console.log(email, subject, age, name);
   const mailOptions = {
      from: "botemailmeth@gmail.com",
      to: email,
      subject,
      text: age + " " + name,
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.error(error);
         res.status(500).json({ message: "Ошибка при отправке письма" });
      } else {
         console.log("Email sent: " + info.response);
         res.json({ message: "Письмо успешно отправлено" });
      }
   });
});

app.listen(port, () => {
   console.log(`Сервер запущен на порту ${port}`);
});
