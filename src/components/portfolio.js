import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBAnimation } from "mdbreact";
import profilepic from "./../assets/profilepic.jpg";
import angularimage from "./../assets/angular.png";
import htmlimage from "./../assets/html5.png";
import javascriptimage from "./../assets/javascript.png";
import reactimage from "./../assets/react.png";
import cssimage from "./../assets/css3.png";
import dotnetimage from "./../assets/dotnet.png";
import whitesnowimage from "./../assets/whitesnow.png";
import "./../App.css";

function Portfolio() {
  return (
    <div className="App font-weight-bolder">
      <MDBRow>
        <MDBCol lg="5">
          <MDBRow>
            <MDBCol lg="5" md="12" className="mb-3 mb-sm-3">
              <MDBAnimation type="bounceIn">
                <MDBCard testimonial>
                  <div className="card-up sunny-morning-gradient" />
                  <div className="avatar mx-auto white">
                    <img
                      src={profilepic}
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-4">Manish Zanzad</h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      Full Stack Web Developer
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="7" md="12" className="mb-lg-0 mb-2 align-text-left">
              <MDBAnimation type="fadeIn">
                <h3 className="font-weight-bold mb-4">About Me</h3>
                <hr />
                <ul className="aboutMe">
                  <li>
                    {" "}
                    Software developer with good heart. Passionate about solving
                    challenging problems and writing optimized code.{" "}
                  </li>
                  <li>
                    {" "}
                    Able to stretch the boundaries to learn new technologies and
                    tools as per the requirement.
                  </li>
                  <li>
                    {" "}
                    Expert at analyzing the problem and working towards to
                    produce the satisfactory end result.
                  </li>
                </ul>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol
              lg="12"
              md="12"
              className="mb-lg-0 mb-2 align-text-left pt-lg-5 pt-md-3"
            >
              <MDBAnimation type="fadeIn">
                <h3 className="font-weight-bold mb-4">Skills</h3>
                <hr />
                <MDBRow className="align-text-center-media">
                  <MDBCol
                    lg="12"
                    md="12"
                    className="mb-lg-0 mb-2 pt-lg-5 pt-md-3"
                  >
                    <img
                      src={angularimage}
                      className="img-fluid skill-icon"
                      alt=""
                    />{" "}
                    <img
                      src={reactimage}
                      className="img-fluid skill-icon"
                      alt=""
                    />
                    <img
                      src={dotnetimage}
                      className="img-fluid skill-icon width-160-px"
                      alt=""
                    />
                    <img
                      src={javascriptimage}
                      className="img-fluid skill-icon"
                      alt=""
                    />
                    <img
                      src={htmlimage}
                      className="img-fluid skill-icon"
                      alt=""
                    />
                    <img
                      src={cssimage}
                      className="img-fluid skill-icon"
                      alt=""
                    />
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-2 align-text-left">
          <MDBAnimation type="fadeIn">
            <h3 className="font-weight-bold mb-4">Projects</h3>
            <hr />
            <MDBRow>
              <MDBCol lg="12" md="12" className="mb-lg-0 mb-2">
                <h4 className="font-weight-bold mb-3 p-0">
                  <strong>Axonator Admin Panel </strong>
                </h4>
                <p>
                  Admin Panel is a web application to analyze flow of user and
                  their datausage in Axonator product. This application help
                  admin to take business decision by looking at the data and
                  graphs
                </p>
                <p>(Jan 2019 - March 2019)</p>
              </MDBCol>
              <MDBCol lg="12" md="12" className="mb-lg-0 mb-2">
                <h4 className="font-weight-bold mb-3 p-0">
                  <strong>Simplify I3 </strong>
                </h4>
                <p>
                  Simplifyi3 is an integrated system used for managing and
                  tracking of projects or tasks related to infrastructure
                </p>
                <p>(Feb 2018 - Dec 2018)</p>
              </MDBCol>
              <MDBCol lg="12" md="12" className="mb-lg-0 mb-2">
                <h4 className="font-weight-bold mb-3 p-0">
                  <strong>FMDB</strong>
                </h4>
                <p>
                  Web based application to analyze data of sewer pipes in Orange
                  County
                </p>
                <p>(Jan 2019 - March 2019)</p>
              </MDBCol>
              <MDBCol lg="12" md="12" className="mb-lg-0 mb-2">
                <h4 className="font-weight-bold mb-3 p-0">
                  <strong>SCPS Dining</strong>
                </h4>
                <p>
                  Web based application to analyze the food costs, consumption
                  of food and revenues of food in public school
                </p>
                <p>(Sep 2016 - June 2017)</p>
              </MDBCol>
            </MDBRow>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-2 align-text-left">
          <MDBAnimation type="fadeIn">
            <h3 className="font-weight-bold mb-4">Experience</h3>
            <hr />
            <MDBRow className="align-text-center-media">
              <MDBCol lg="3" md="12" className="pr-0 mb-2">
                <img
                  src={whitesnowimage}
                  className="rounded-circle img-fluid experience-image-width"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="9" md="12">
                <p className="font-weight-bolder">Whitesnow Software pvt ltd</p>
                <p>(Aug 2016 - March 2019)</p>
              </MDBCol>{" "}
            </MDBRow>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Portfolio;
