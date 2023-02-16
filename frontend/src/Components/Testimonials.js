import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import firsttrainer from "../Images/firsttrainer.jpg";
import secondtrainer from "../Images/secondtrainer.jpg";
import third from "../Images/third.jpg";

const Testimonials = () => {
  return (
    <div>
      <section className="section" id="trainers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  Expert <em>Trainers</em>
                </h2>
                <p>
                  Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                  Sed viverra ipsum dolor, ultricies fermentum massa consequat
                  eu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 d-flex">
            <div className="trainer-item">
              <div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={firsttrainer}
                  />
                  <CardContent>
                    <Typography
                      id="trainer title"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Swim Trainer
                    </Typography>
                    <Typography gutterBottom component="div">
                      Bret D. Bowers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="trainer-item">
              <div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={secondtrainer}
                  />
                  <CardContent>
                    <Typography
                      id="trainer title"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Muscle Trainer
                    </Typography>
                    <Typography gutterBottom component="div">
                      Hector T. Daigl
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="trainer-item">
              <div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={third}
                  />
                  <CardContent>
                    <Typography
                      id="trainer title"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Power Trainer
                    </Typography>
                    <Typography gutterBottom component="div">
                      Paul D. Newman
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
