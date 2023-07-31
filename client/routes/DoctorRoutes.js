const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
  updateStatusController,
} = require("../controllers/DoctorController");
const auth = require("../middlewares/Auth");
const router = express.Router();

// post single doctor information
router.post("/getDoctorInfo", auth, getDoctorInfoController);

// post update doctor information
router.post("/updateProfile", auth, updateProfileController);

// post get doctor information
router.post("/getDoctorById", auth, getDoctorByIdController);

// get Appointments
router.get("/doctor-appointments", auth, doctorAppointmentController);

// POST update status
router.post("/update-status", auth, updateStatusController);

module.exports = router;
