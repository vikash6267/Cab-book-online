const { uploadImageToCloudinary } = require("../config/imageUploader");
const cabModel = require("../model/cab");

const createCab = async (req, res) => {
    const { price, modelNumber, vName, year, doors, air, transmission, fuel } = req.body;

    const thumbnail = req.files.image;
    try {
        if (!price || !modelNumber || !vName || !year || !doors || !air || !transmission || !fuel) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields"
            });
        }

        // Upload the Thumbnail to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        );



        const cab = await cabModel.create({ price, image: thumbnailImage.secure_url, modelNumber, vName, year, doors, air, transmission, fuel });
        res.status(200).send({
            success: true,
            message: "Cab created successfully",
            cab
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in create cab api!",
            error: error.message
        });
    }
};


const getAllCab = async (req, res) => {
    try {
        const cabs = await cabModel.find({});
        res.status(200).send({
            totalCabs: cabs.length,
            cabs
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting all cabs api!",
            error: error.message
        });
    }
}
module.exports = { createCab, getAllCab };
