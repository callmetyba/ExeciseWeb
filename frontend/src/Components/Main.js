import React, { useEffect, useState } from "react";
import Form from "./Form";
import About from "./About";
import ActivityType from "./ActivityType";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Home from "./Home";
import axios from "axios";

const Main = () => {
  const [userInput, setUserInput] = useState([]);
  const [activityInput, setActivityInput] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editActivityData, setEditActivityData] = useState(0);

  const [bmi, setBmi] = useState();

  const handleBmi = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const calculateBmi = () => {
    let val = (
      [
        Number(userInput.weight) /
          Number(userInput.height) /
          Number(userInput.height),
      ] * 10000
    ).toFixed(1);
    setBmi(val);
    console.log("Height:", userInput.height);
    if (val < 18.5) {
      setUserInput("Under weight");
    } else if (val > 18.5 && val <= 24.9) {
      setUserInput("Yay! You're healthy");
    } else if (val > 24.9 && val < 30) {
      setUserInput("Overweight");
    } else {
      setUserInput("Obese");
    }
  };
  console.log("userInput", userInput);
  console.log("BMI:", bmi);

  const [userData, setUserData] = useState("");
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);

  const [userProfile, setUserProfile] = useState([]);

  const getProfile = () => {
    axios
      .get("http://localhost:3500/profile/")
      .then((response) => {
        setUserProfile(response.data);
        console.log("ProfileSSS:", userProfile);
      })
      .catch((err) => alert("Fail to fetch Profile", err));
  };

  const getActivity = () => {
    axios
      .get("http://localhost:3500/activity/")
      .then((response) => {
        setActivityInput(response.data);
        console.log("ProfileSSS:", userProfile);
      })
      .catch((err) => alert("Fail to fetch Profile", err));
  };

  const editActivity = (id) => {
    fetch(`http://localhost:3500/activity/${id}`)
      .then((data1) => data1.json())
      .then((res) => setActivityInput(res));

    setEditActivityData(id);
    console.log(showForm);
  };

  useEffect(() => {
    getProfile();
    getActivity();
  }, []);
  console.log("ProfileEEE:", userProfile);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              activityInput={activityInput}
              setActivityInput={setActivityInput}
              userData={userData}
              getProfile={getProfile}
              userProfile={userProfile}
              editActivity={editActivity}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Form
              handleInput={handleInput}
              setBmi={setBmi}
              bmi={bmi}
              handleBmi={handleBmi}
              userData={userData}
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              userInput={userInput}
              calculateBmi={calculateBmi}
              editActivity={editActivity}
            />
          }
        />
        <Route
          path="/activitylog"
          element={
            <ActivityType
              activityInput={activityInput}
              setActivityInput={setActivityInput}
              setShowForm={setShowForm}
              setEditActivityData={setEditActivityData}
              editActivityData={editActivityData}
              editId={editActivityData._id}
              editActivity={editActivity}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
