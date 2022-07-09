const members = require("../../Members");
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

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    name: req.body.name,
    email: req.body.email,
    id: uuid.v4(),
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  members.push(newMember);
  res.json(members);
});

module.exports = router;
