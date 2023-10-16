const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const dotenv = require("dotenv").config();

const mongo_connect = process.env.mongoconnect;

mongoose.connect(mongo_connect, {}).then(() => {
  console.log("mongodb connection successful");
}).catch((err) => {
  console.log("connection to MongoDB failed");
})

const userdata = require('./data');

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const data = new userdata({
      name: name,
      email: email,
      message: message
    });

    const result = await data.save();
   
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: error.message });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});
  
app.listen(8000, () => {
  console.log("Server started");
});
