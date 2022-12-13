const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Variables
const PORT = process.env.PORT || 5001;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conntect DB

const uri = `mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@cluster0.bttp39i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
}
// Call the server
connectDB();

// Database Collections
const usersCollection = client.db("repliq_practical").collection("users");

// Server Running
app.get("/", async (req, res) => {
  res.send("Server is running");
});

// Create user using phone and password
app.post("/api/register", async (req, res) => {
  try {
    const phone = req.body.phone;
    const password = req.body.password;
    const query = { phone, password };
    const createdUser = await usersCollection.insertOne(query);
    res.send(createdUser);
  } catch (err) {
    console.log(err);
  }
});

// Generate JWT token for sign in
app.get("/api/login", async (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;
  const query = { phone, password };
  console.log(query);
  const user = await usersCollection.findOne(query);

  if (user) {
    const token = jwt.sign({ phone }, process.env.JWT_TOEKN_SECRET, {
      expiresIn: "1d",
    });
    return res.send({ accessToken: token });
  }
  res.status(403).send({ accessToken: "" });
});

app.listen(PORT, () => "Server running on port" + PORT);
