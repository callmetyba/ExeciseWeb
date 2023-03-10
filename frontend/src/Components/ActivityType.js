import React, { useState } from "react";
import { Button, TextField, Box, Paper } from "@mui/material";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const ActivityType = (props) => {
  const navigate = useNavigate();

  console.log("PROPS: ", props);

  useEffect(() => {
    if (props.editActivityData === 0) {
      props.setUserActivityType({
        activity: "",
        duration: "",
        date: "",
      });
    } else {
      props.setUserActivityType(props.editActivityData);
      console.log("User Activity Type:", props.userActivityType);
    }
  }, []);

  const handleUserActivityType = (e) => {
    props.setUserActivityType({
      ...props.userActivityType,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Activity Type", props.userActivityType);
  console.log("Edit Activity Data:", props.editId);

  const editUserActivity = () => {
    const activityLog = {
      activity: props.userActivityType.activity,
      duration: props.userActivityType.duration,
      date: props.userActivityType.date,
    };
    console.log("showwww", props.showForm);
    console.log("Activity Log:", activityLog);

    if (props.showForm) {
      axios
        .put(`http://localhost:3500/activity/${props.editId}`, {
          activity: props.userActivityType.activity,
          duration: props.userActivityType.duration,
          date: props.userActivityType.date,
        })
        .then((res) => {
          props.activityInput.push(activityLog);
          props.setActivityInput(props.activityInput);

          console.log("Edit Data:", res);
        })

        .catch((err) => alert("CardPost", err));
      props.setShowForm(false);
      //props.getActivity();
    } else {
      axios
        .post("http://localhost:3500/activity", {
          activity: props.userActivityType.activity,
          duration: props.userActivityType.duration,
          date: props.userActivityType.date,
        })

        .then((response) => {
          props.activityInput.push(activityLog);
          props.setActivityInput(props.activityInput);
          console.log("Response:", response);
        })
        .catch((err) => {
          alert("Fail to post Data", err);
        });
    }
  };
  //console.log("Activity Input", activityInput);
  return (
    <div>
      <div id="activity">
        <div>
          <Box component="form" sx={{ m: 3, width: "35ch", marginTop: 3 }}>
            <Paper sx={{ p: 6 }} elevation={5}>
              <Typography variant="h5" component="h5" sx={{ m: 3 }}>
                User Activity
              </Typography>
              <form>
                <FormControl fullWidth>
                  <InputLabel>Activity Type</InputLabel>
                  <Select
                    name="activity"
                    onChange={handleUserActivityType}
                    value={props.userActivityType.activity}
                  >
                    <MenuItem value="Run">Run</MenuItem>
                    <MenuItem value="Walk">Walk</MenuItem>
                    <MenuItem value="Hike">Hike</MenuItem>
                    <MenuItem value="Swim">Swim</MenuItem>
                    <MenuItem value="Bicycle Ride">Bicycle Ride</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ textAlign: "left", m: 3 }}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Duration"
                    variant="outlined"
                    type="number"
                    name="duration"
                    value={props.userActivityType.duration}
                    onChange={handleUserActivityType}
                  ></TextField>
                </Box>
                <Box sx={{ textAlign: "left", m: 3 }}>
                  <TextField
                    fullWidth
                    type="date"
                    name="date"
                    value={props.userActivityType.date}
                    id="outlined-basic"
                    variant="outlined"
                    onChange={handleUserActivityType}
                  ></TextField>
                </Box>
                <Box sx={{ textAlign: "left", m: 3 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      editUserActivity();
                      navigate("/dashboard", { replace: true });
                    }}
                  >
                    Add Activity
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ActivityType;
