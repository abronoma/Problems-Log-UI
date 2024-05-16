// Global options used 2 set the maximum no of servers 
// that is deployed when the the requst coming is too much for 
const {setGlobalOptions} = require("firebase-functions/v2/options"); 
// importing from firebase dependencies
setGlobalOptions({maxInstances: 10});
// prevents the  from opening other 

const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");
const admin = require("firebase-admin");
const {getFirestore, Timestamp} = require("firebase-admin/firestore");

admin.initializeApp();
const db = getFirestore();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/api", (req, res) => {
  res.send("Hello from Firebase!");
});

app.get("/api/fetch-burdens", async (req, res) => {
  const problemsRef = db.collection("problems");
  const snapshot = await problemsRef.get();
  const problems = [];

  snapshot.forEach((doc) => {
    problems.push({id: doc.id, ...doc.data()});
  });

  res.json(problems);
});

app.post("/api/add-burden", async (req, res) => {
  const {message, email} = req.body;

  if (!message) {
    res.status(404).json({error: "No message body was found."});
    return;
  }

  const problemsRef = db.collection("problems");

  const docRef = await problemsRef.add({
    message,
    timestamp: Timestamp.now(),
    email,
  });
  docRef.get().then((doc) => {
    res.json({id: doc.id, ...doc.data()});
  });
});

exports.app = onRequest(app);
