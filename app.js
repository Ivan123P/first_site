// 1. С помощью express создать многостраничный сайт со страницами: Главная | О нас | Контакты. 
// Используя любой из шаблонизаторов. 
// На странице контакты необходимо реализовать отправку пользователем своих данных для связи (имя, тел., email). 
// Добавить модуль nodemailer. Сайт должен быть презентабельным. 
// В репозиторий GIT в месте с кодом добавить принтскрин сайта!
// 2. Используя этот сервис, загрузить созданный сайт сюда, а ссылку на него в коммент

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const nodemailer = require('nodemailer');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public' ));
app.use(express.static( __dirname + '/node_modules/bootstrap/dist' ));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  tls:{
      rejectUnauthorized: false
  },
  auth: {
    user: 'for.study.imt19@gmail.com',
    pass: 'study1308'
  }
});

app.get('/', (req, res) => {
  res.render('index', { title: 'My first site' });
});

app.get('/about_us', (req, res) => {
  res.render('about_us', { title: 'About Us' });
});

app.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contacts' });
});

app.post('/greeting', (req, res) => {
  if(!req.body) return res.status(400);

  let mailOptions = {
    from: 'for.study.imt19@gmail.com',
    to: 'pjane19@gmail.com',
    subject: 'Form from my site',
    html: '<table><tr><td style="font-weight: bold;">User name</td><td>' + req.body.name + '</td></tr><tr><td style="font-weight: bold;">User Nickname</td><td>' + req.body.nickname + '</td></tr><tr><td style="font-weight: bold;">User email</td><td>' + req.body.mail + '</td></tr><tr><td style="font-weight: bold;">User message</td><td>' + req.body.textarea + '</td></tr></table>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log(error.message);
    }
    console.log('success');
  });

  res.render('greeting', {
    data: req.body
  });
});

app.listen(3000, () => {
  console.log('app listening at localhost:3000');
});