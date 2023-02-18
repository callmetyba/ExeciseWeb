import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Cards from "./Cards";
import profile from "../Images/profile.png";

const Dashboard = (props) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="profileDash">
        <Box>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={profile}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Full Name: {props.userData.fullName}
              </Typography>
              <Typography gutterBottom component="div">
                Description: {props.userData.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age: {props.userData.age}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sex: {props.userData.sex}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div className="cardContainer">
        <div className="container">
          <div className="row cardComp">
            {props.activityInput.map((user) => (
              <div className="col-4">
                <Cards
                  user={user}
                  userId={user._id}
                  userActivityType={props.userActivityType}
                  setUserActivityType={props.setUserActivityType}
                  activityInput={props.activityInput}
                  setActivityInput={props.setActivityInput}
                  editActivity={props.editActivity}
                  setEditActivityData={props.setEditActivityData}
                  setShowForm={props.setShowForm}
                  showForm={props.showForm}
                  setEditId={props.setEditId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
