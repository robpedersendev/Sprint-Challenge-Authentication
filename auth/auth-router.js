const router = require("express").Router();

router.post("/register", async (req, res) => {
  // implement registration
  const user = req.body;
  try {
    if (!body) {
      res.status(404).json({ message: "No body provided" });
    } else {
    }
  } catch (error) {}
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
