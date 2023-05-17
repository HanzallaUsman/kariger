// session.js
const sessions = {};

function generateSessionID() {
  // Generate a unique session ID
  const sessionID = Math.random().toString(36).substring(2);
  return sessionID;
}

function storeSession(sessionID, userData) {
  // Store user data in sessions object using session ID as the key
  sessions[sessionID] = userData;
  console.log("Session Data: ", sessions);
  return sessions;
}

module.exports = { sessions, generateSessionID, storeSession };
