const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const path = require("path");

const cors = require("cors");
dotenv.config();
// rest objects
const app = express();
app.use(cors());
// Mongo Database connection
connectDB();

// moddlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/UserRoute"));
app.use("/api/v1/admin", require("./routes/AdminRoutes"));
app.use("/api/v1/doctor", require("./routes/DoctorRoutes"));

// Static files
app.use(express.static(path.join(__dirname, "./client/build")));
 
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const port = process.env.PORT || 8080;
// listen
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} on port ${port} `.bgCyan.white
  );
});
