const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cors());


// routes 
app.use("/api/v1/user", require("./routes/bookingRoute"))
app.use("/api/v1/admin", require("./routes/cabRoute"))
app.use("/api/v1/admin", require("./routes/authRoute"))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})