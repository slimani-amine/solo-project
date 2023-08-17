const express = require("express");
const router = express.Router();
const {
  getproject,
  getOne,
  getOneByOwner,
  addproject,
  deleteproject,
  updateproject,
} = require("../controller/projectController");

router.get("/", getproject);
router.get("/:id", getOne);
router.get("/byowner/:owner", getOneByOwner);
router.post("/addproject/:id", addproject);
router.delete("/deleteproject/:id", deleteproject);
router.put("/updateproject/:id", updateproject);
module.exports = router;
