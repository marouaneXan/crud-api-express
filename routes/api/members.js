const members = require("../../members");
const express = require("express");
const router=express.Router()

//get all members
router.get("/", (req, res) => {
  res.json(members);
});

//get a single member
router.get("/:id", (req, res) => {
    res.json(members.filter(member=>member.id===parseInt(req.params.id)))
  });

  //Create member
  router.post('/',(req,res)=>{
    res.send(req.body)
  })


module.exports=router

