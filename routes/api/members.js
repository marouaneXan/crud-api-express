const members = require("../../members");
const express = require("express");
const uuid = require("uuid");
const router = express.Router();

//get all members
router.get("/", (req, res) => {
  res.json(members);
});

//get a single member
router.get("/:id", (req, res) => {
  res.json(members.filter((member) => member.id === parseInt(req.params.id)));
});

//Create member
router.post("/", (req, res) => {
  const newMember={
    id:uuid.v4(),
    name:req.body.name,
    email:req.body.email,
    status:'active'
  }
  members.push(newMember)
  res.json(members)
});

module.exports = router;
