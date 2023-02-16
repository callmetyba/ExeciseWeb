const express = require("express");
const app = express();
const mongoose = require("mongoose");
const activity = require("./Models/ActivityModel");
const userModel = require("./Models/UserModel");
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(cors());

const port = 3500;

app.listen(port, () => {
  console.log("port is connected");
});

app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/webapp"),
  {
    useNewUrlParser: true,
  };

mongoose.connection.once("open", () => {
  console.log("Database is connected succesfully");
});

//Get Profile
app.get("/profile", async (req, res) => {
  const create = await userModel.find();
  res.send(create);
});

//Post New Profile

app.post("/profile", (req, res) => {
  const user = userModel(req.body);
  user
    .save()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      // res.status(500).send(err.message);
      console.log("api failed");
    });
});

//Edit and Post existing profile
app.get("/profile/:Id", async (req, res) => {
  const edit = req.params.Id;
  try {
    let editDoc = await userModel.findById(edit);
    res.status(200).json(editDoc);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send({ Status: "failed" });
  }
});

app.post("/profile/:Id", async (req, res) => {
  const upDate = req.params.Id;
  try {
    let updateDoc = await userModel.findById(upDate);
    updateDoc.fullName = req.body.fullName;
    updateDoc.description = req.body.description;
    updateDoc.age = req.body.age;
    updateDoc.sex = req.body.sex;
    updateDoc.height = req.body.height;
    updateDoc.weight = req.body.weight;
    updateDoc.save();
    res.status(200).json(updateDoc);
  } catch (error) {
    res.status(400).send({ Status: "failed" });
  }
});

//Delete profile by ID

app.delete("/profile/:id", async (req, res) => {
  const getid = req.params.id;
  console.log("BOdy: ", req.params.id);
  try {
    let deleteDoc = await userModel.findByIdAndDelete(getid);
    res.status(200).json({ deleteDoc: "Deleted" });

    console.log("Res: ", deleteDoc);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send({ Status: "failed" });
  }
});

//Get Activity Card
app.get("/activity", async (req, res) => {
  const create = await activity.find();
  res.send(create);
});

//Post New activity

app.post("/activity", async (req, res) => {
  const user = await activity(req.body);
  user
    .save()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      // res.status(500).send(err.message);
      console.log("api failed");
    });
});

//Edit and Post existing activity
app.get("/activity/:Id", async (req, res) => {
  const edit = req.params.Id;
  try {
    let editDoc = await activity.findById(edit);
    res.status(200).json(editDoc);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send({ Status: "failed" });
  }
});

app.post("/activity/:Id", async (req, res) => {
  const upDate = req.params.Id;
  try {
    let updateDoc = await activity.findById(upDate);
    updateDoc.userActivityType = req.body.userActivityType;
    updateDoc.duration = req.body.duration;
    updateDoc.date = req.body.date;
    updateDoc.save();
    res.status(200).json(updateDoc);
  } catch (error) {
    res.status(400).send({ Status: "failed" });
  }
});

//Delete activity by ID

app.delete("/activity/:id", async (req, res) => {
  const getid = req.params.id;
  console.log("BOdy: ", req.params.id);
  try {
    let deleteDoc = await activity.findByIdAndDelete(getid);
    res.status(200).json({ deleteDoc: "Deleted" });

    console.log("Res: ", deleteDoc);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send({ Status: "failed" });
  }
});
//Edit activity

app.put("/activity/:id", async (req, res) => {
  const id = req.params.id;
  const post = await activity.findByIdAndUpdate(id, {
    $set: req.body,
  });
  res.send(post);
});
