import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate();

  const delActivity = () => {
    axios
      .delete(`http://localhost:3500/activity/${props.userId}`)
      .then((res) => {
        // props.activityInput.filter(props.user);
        // props.setActivityInput(props.activityInput);
        console.log("Activity Deleted", res);
      })
      .catch((err) => alert("Error, Activity not removed", err));
  };
  console.log("user activity id ", props.userId);
  return (
    <div>
      <Box sx={{ m: 5 }}>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Activity Type: {props.user.activity}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Duration in minutes: {props.user.duration}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Date: {props.user.date}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  props.editActivity(props.userId);
                  console.log();
                  navigate("/activitylog", { replace: true });
                }}
              >
                Edit
              </Button>
              <Button
                size="small"
                onClick={() => {
                  delActivity();
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      </Box>
    </div>
  );
};
export default Cards;
