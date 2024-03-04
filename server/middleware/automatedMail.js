const nodemailer = require("nodemailer");


function automatedMail(emailAddress) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "adamg2609@gmail.com",
            pass: "akik nsvs rasf hybd"
        }
    });

    const mailerOptions = {
        from: "adamg2609@gmail.com",
        to: emailAddress,
        subject: "New event added",
        html: "<p>View app to see event details</p>"
    };

    transporter.sendMail(mailerOptions, function (err, info) {
        if (err) {
            console.log(err);
        }else{
            console.log(info);
        }
    });
}

module.exports = automatedMail;