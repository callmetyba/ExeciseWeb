import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import BMI from "./BMI";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const postUserProfile = () => {
    const profile = {
      fullName: props.userData.fullName,
      description: props.userData.description,
      age: props.userData.age,
      sex: props.userData.sex,
    };
    axios
      .post("http://localhost:3500/profile", {
        fullName: props.userData.fullName,
        description: props.userData.description,
        age: props.userData.age,
        sex: props.userData.sex,
      })
      .then((response) => {
        props.userProfile.push(profile);
        props.setUserProfile(props.userProfile);
        console.log("Response:", response);
      })
      .catch((err) => {
        alert("Fail to post Data", err);
      });
  };

  console.log("userProfile:", props.userProfile);
  return (
    <div>
      <div id="form">
        <Box
          component="form"
          sx={{
            m: 3,
            width: "50ch",
          }}
        >
          <Paper sx={{ p: 4 }} elevation={5}>
            <form>
              <Typography component="div">
                <Typography variant="h6" component="h6" sx={{ m: 2 }}>
                  User Profile
                </Typography>
                <Box sx={{ textAlign: "left", m: 2 }}>
                  <TextField
                    type="text"
                    name="fullName"
                    value={props.userData.fullName}
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    onChange={props.handleInput}
                  ></TextField>
                </Box>
              </Typography>
              <Typography component="div">
                <Box sx={{ textAlign: "left", m: 2 }}>
                  <TextField
                    type="text"
                    name="description"
                    value={props.userData.description}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    onChange={props.handleInput}
                  ></TextField>
                </Box>
              </Typography>
              <Typography component="div">
                <Box sx={{ textAlign: "left", m: 2 }}>
                  <TextField
                    type="string"
                    name="age"
                    value={props.userData.age}
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={props.handleInput}
                  ></TextField>
                </Box>
              </Typography>
              <Typography component="div">
                <Box sx={{ textAlign: "left", m: 2 }}>
                  <TextField
                    type="string"
                    name="sex"
                    value={props.userData.sex}
                    id="outlined-basic"
                    label="Sex"
                    variant="outlined"
                    onChange={props.handleInput}
                  ></TextField>
                </Box>
              </Typography>

              <div>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    postUserProfile();
                    navigate("/dashboard", { replace: true });
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Box>
      </div>
      <BMI
        bmi={props.bmi}
        setBmi={props.setBmi}
        calculateBmi={props.calculateBmi}
        handleBmi={props.handleBmi}
        userInput={props.userInput}
        
      />
    </div>
  );
};

export default Form;
