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

const ActivityType = (props) => {
  const navigate = useNavigate();

  const [editActivity, setEditActivity] = useState([]);
  const [userActivityType, setUserActivityType] = useState("");
  const handleUserActivityType = (e) => {
    setUserActivityType({
      ...userActivityType,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Activity Type", userActivityType);

  const editUserActivity = () => {
    const activityLog = {
      activity: userActivityType.activity,
      duration: userActivityType.duration,
      date: userActivityType.date,
    };

    if (props.setShowForm(true)) {
      axios
        .put(`http://localhost:3500/activity/${props.editId}`, {
          activity: userActivityType.activity,
          duration: userActivityType.duration,
          date: userActivityType.date,
        })
        .then((res) => {
          console.log("");
        })

        .catch((err) => alert("CardPost", err));

      props.getActivity();
    } else {
      axios
        .post("http://localhost:3500/activity", {
          activity: userActivityType.activity,
          duration: userActivityType.duration,
          date: userActivityType.date,
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
                  <Select name="activity" onChange={handleUserActivityType}>
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
                    value={userActivityType.duration}
                    onChange={handleUserActivityType}
                  ></TextField>
                </Box>
                <Box sx={{ textAlign: "left", m: 3 }}>
                  <TextField
                    fullWidth
                    type="date"
                    name="date"
                    value={userActivityType.date}
                    id="outlined-basic"
                    variant="outlined"
                    onChange={handleUserActivityType}
                  ></TextField>
                </Box>
                <Box sx={{ textAlign: "left", m: 3 }}>
                  <Button
                    variant="contained"
                    color="success"
                    // type="submit"
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
