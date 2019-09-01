const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "`username` and `password` are both required!"
    });
  }
  try {
    const hash = bcrypt.hashSync(password, 10);
    const [id] = await db("users").insert({ username, password: hash });
    const [user] = await db("users").where({ id });
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.post("/login", async (req, res) => {
  // implement login

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "`username` and `password` are both required!"
    });
  }

  try {
    const [user] = await db("users").where({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.isAuthenticated = true;
      return res.status(200).end();
    } else {
      return res.status(401).json({
        error: "The provided username and password do not match"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;
