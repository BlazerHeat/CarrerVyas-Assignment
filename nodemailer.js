import { createTransport } from 'nodemailer';

const mailerId = process.env.MAILER_ID;
const mailerPass = process.env.MAILER_PASS;

if (!mailerId) {
    console.error('Please define MAILER_ID in env.');
    process.exit(1);
}
if (!mailerPass) {
    console.error('Please define MAILER_PASS in env.');
    process.exit(1);
}

// create transporter object using the gmail SMTP transport
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: mailerId,
        pass: mailerPass
    }
});

export const sendEmail = (email, subject, body, attachments = null) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            to: email,
            subject,
            html: body,
            attachments
        }, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
};