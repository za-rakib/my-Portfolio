import React from "react";
import "./About.css";
import image from "../../images/myPic.png";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className=" row">
        <div className="image col-md-5 offset-md-1 mt-4 pt-3">
          <img src={image} alt="" />
        </div>
        <div className="about-text text-white col-md-5 ">
          <h1>Hi, I am Rakib</h1>
          <p>
            A final year student in Computer Science and Engineering (CSE), I
            have over 1.5 year of working  experience across the entire stack of
            web development. I count myself as a hardworking person.
          </p>
          <h5>Full Name : &nbsp; Md Rakib Hossen</h5>
          <h5>Age : &nbsp; 24 years</h5>
          <h5>Nationality: &nbsp; Bangladesh</h5>
          <h5>Email: &nbsp; phpzarakib@gmail.com</h5>
          <h5>Cell: &nbsp; +8801517037484</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
