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
  const handleActivityInput = () => {
    props.activityInput.push(props.userActivityType);
    props.setActivityInput(props.activityInput);
  };

  const navigate = useNavigate();
  //console.log("propsshowfron", props.showForm);
  // console.log("activity Input:", props.activityInput);
  const delActivity = () => {
    axios
      .delete(`http://localhost:3500/activity/${props.userId}`)
      .then((res) => {
        // let delActivity = props.activityInput.filter(
        //   (activity) => activity !== props.user
        // );
        console.log("Activity Input prior to call:", props.activityInput);

        // handleActivityInput(delActivity);

        // props.setActivityInput(delActivity);

        // console.log("After Call", props.activityInput);
        // console.log("Deleted", res);
      })
      .catch((err) => alert("Error, Activity not removed", err));
  };
  console.log("user activity id ", props.userId);

  return (
    <div>
      <Box sx={{ m: 5 }}>
        <div>
          <Card sx={{ maxWidth: 400 }}>
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
                  // props.editActivity(props.userId,props.user);
                  navigate("/activitylog", { replace: true });
                  props.setEditActivityData(props.user);
                  props.setShowForm(true);
                  props.setEditId(props.user._id);
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
