import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '444.editor@gmail.com',
    pass: process.env.EMAIL_PASSWORD // À configurer dans les variables d'environnement
  }
});