const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    // Retrieve user from database based on username
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    console.log("userData", userData)
    //Exit if no user is found
    if (!userData) {
      alert('Invalid credentials')
      return res.status(400).json("Invalid credentials");
    }
    //Check password
    const pwdValidated = await userData.checkPassword(req.body.password);
    if (!pwdValidated) {
      return res.status(400).json("Invalid credentials");
    }

    //Create session and send response back
    req.session.save(() => {
      //decalre session variables
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedin = true;

      // send response to client
      res.status(200).json("You are now logged in!");
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
