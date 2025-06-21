
import nodemailer from 'nodemailer'
const sendMail = async (req, res) => {


    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "usamariaz@aptechnorth.edu.pk",
                pass: "hnog qlxx ceup tdvp",
            },
        });


        const mailResponse = await transporter.sendMail(
            {
                from: req.body.fromEmail,
                to: req.body.toEmail,
                subject: "Hello ✔",
                text: "Hello world?", // plain‑text body
                html: "<b>Hello world?</b>",
            }
        )

        res.send({ message: mailResponse.messageId })



    } catch (error) {
        console.log(error)
        res.send({ errorMessage: error })
    }




}

export default sendMail;