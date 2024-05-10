const express = require("express");
const { createCab, getAllCab } = require("../controllers/cab");
const router = express.Router();



router.post("/create", createCab);
router.get("/get", getAllCab);
module.exports = router;