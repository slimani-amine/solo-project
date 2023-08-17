const express = require("express");
const router = express.Router();
const {
  getuser,
  getOne,
  adduser,
  deleteuser,
  updateuser,
  getOneByEmail,
  getOneByEmailandPass,
} = require("../controller/usersController");

router.get("/", getuser);
router.get("/:id", getOne);
router.get("/getbyemail/:email", getOneByEmail);
router.get("/getbyemailandpassword/:email/:password", getOneByEmailandPass);
router.post("/adduser", adduser);
router.delete("/deleteuser/:id", deleteuser);
router.put("/updateuser/:id", updateuser);
module.exports = router;
