const express = require("express");
const Auth = require("../middlewares/Auth");
const {
  getAllUserController,
  getAllDoctorController,
  changeAccountStatusController,
} = require("../controllers/AdminController");

const router = express.Router();

// GET MEthod || USERS
router.get("/getAllUsers", Auth, getAllUserController);

// GET MEthod || DOCTORS
router.get("/getAllDoctors", Auth, getAllDoctorController);

// POST MEthod || Account status
router.post("/changeAccountStatus", Auth, changeAccountStatusController);

module.exports = router;
