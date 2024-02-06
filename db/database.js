var fs = require("firebase-admin");

var serviceAccount = require("/Users/yuehan/Desktop/To-dos/familing_backend/config/serviceAccountKey.json");

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
  databaseURL: "https://familing-dcdff-default-rtdb.firebaseio.com",
});
console.log("firebase connected");

const db = fs.firestore();
console.log("firestore created");
