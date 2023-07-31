const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/UserController");
const Auth = require("../middlewares/Auth");

// router
const router = express.Router();

// router
// LOGIN || POST
router.post("/login", loginController);

// REGISTER || POST
router.post("/signup", registerController);

// Auth || post
router.post("/getUserData", Auth, authController);

// Apply-doctor || post
router.post("/apply-doctor", Auth, applyDoctorController);

// Notification doctor || post
router.post("/get-all-notification", Auth, getAllNotificationController);

// delete Notification doctor || post
router.post("/delete-all-notification", Auth, deleteAllNotificationController);

// Get all doctors
router.get("/getAllDoctors", Auth, getAllDoctorController);

//  Booking Page
// router.get("/book-appointment", Auth, getAllDoctorController);

// Book appointment
router.post("/book-appointment", Auth, bookeAppointmnetController);

// Booking Availability
router.post("/booking-availability", Auth, bookingAvailabilityController);

// Appointment list
router.get("/user-appointments", Auth, userAppointmentController);

module.exports = router;
