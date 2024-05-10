const { contactUsEmail } = require("../template/contactFormRes");
const mailSender = require("../utils/mailSenderr");

const bookingCtrl = async (req, res) => {
    const { name, carType, to, from, pickupDate, dropDate, distance, contact } = req.body;

    try {
        const emailRes = await mailSender(
            email,
            "Your Data send successfully",
            contactUsEmail(name, carType, to, from, pickupDate, dropDate, distance, contact)
        )
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}

module.exports = { bookingCtrl }