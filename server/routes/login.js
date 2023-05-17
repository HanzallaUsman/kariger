// login.js
const express = require("express");
const router = express.Router();
const { generateSessionID, storeSession } = require("../sessions");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Add basic authentication logic here
  if (username === "hanzalla" && password === "password") {
    // Generate a unique session ID
    const sessionID = generateSessionID();
    console.log("session made: ", sessionID);

    // Store user data in sessions object using session ID as the key
    storeSession(sessionID, { username });

    // Set session ID as a response header or in the response payload
    res.setHeader("sessionID", sessionID);
    res.header("sessionID", sessionID);
    res.set("sessionID", sessionID);
    res.json({ message: "Login successful", sessionID });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
