const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require("../database/dbConfig");

router.post('/register', async (req, res) => {
  const pass = req.body.password;
  const hash = await bcrypt.hashSync(pass, 12);
   db("users").insert({username:req.body.username, password: hash })
  .then(response => {
    console.log(response)
    res.json("You have successfully registered!")
  })
  .catch(error => {
    console.log(error)
    res.status(500)
  })
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;
  await db("users").select("*").where("username", username)
  .then(users =>{
    console.log(users);
  if (!users && !bcrypt.compare(password, users.password)){
    res.status(401).json({message: `Invalid Credentials!`});
  }else{
    res.status(200).json({message: `Welcome ${users[0].username}`});
  }
  })
  .catch(error => {
    res.status(500).json({errormessage: error});
  })
  });

module.exports = router;
