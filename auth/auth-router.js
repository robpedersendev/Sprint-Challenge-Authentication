const router = require("express").Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "`username` and `password` are both required!"
    });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
