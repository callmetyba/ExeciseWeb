import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const BMI = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <section className="bmi-calculator-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title chart-title">
                <span>Check Your Body</span>
                <h2>BMI CALCULATOR CHART</h2>
              </div>
              <div className="chart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bmi</th>
                      <th>WEIGHT STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="point">Below 18.5</td>
                      <td>Underweight</td>
                    </tr>
                    <tr>
                      <td className="point">18.5 - 24.9</td>
                      <td>Healthy</td>
                    </tr>
                    <tr>
                      <td className="point">25.0 - 29.9</td>
                      <td>Overweight</td>
                    </tr>
                    <tr>
                      <td className="point">30.0 - and Above</td>
                      <td>Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title chart-calculate-title">
                <span>Check Your Body</span>
                <h2>CALCULATE YOUR BMI</h2>
              </div>
              <div className="chart-calculate-form">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    props.calculateBmi();
                    handleClickOpen();
                    console.log("BMI:", props.bmi);
                  }}
                >
                  <div className="row">
                    <div className="col-sm-5">
                      <input
                        name="height"
                        value={props.userInput.height}
                        onChange={props.handleBmi}
                        type="text"
                        placeholder="Height / cm"
                      />
                    </div>
                    <div className="col-sm-5">
                      <input
                        name="weight"
                        value={props.userInput.weight}
                        onChange={props.handleBmi}
                        type="text"
                        placeholder="Weight / kg"
                      />
                    </div>
                    <div className="col-sm-5">
                      <input
                        name="age"
                        value={props.userInput.age}
                        onChange={props.handleBmi}
                        type="text"
                        placeholder="Age"
                      />
                    </div>
                    <div className="col-sm-5">
                      <input
                        name="sex"
                        value={props.userInput.sex}
                        onChange={props.handleBmi}
                        type="text"
                        placeholder="Sex"
                      />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">Calculate</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          {setOpen ? (
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title">
                Body Mass index
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>{props.bmi}</Typography>
              </DialogContent>
              <DialogContent dividers>
                <Typography gutterBottom>{props.userInput}</Typography>
              </DialogContent>
            </Dialog>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default BMI;
