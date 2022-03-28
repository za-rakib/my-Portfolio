/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import myImage2 from "../../images/myPic2.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home text-center ">
      <div className="img">
        <img className="my-image " src={myImage2} alt="" />
      </div>
      <div className="name">
        <h1>Md Rakib Hossen</h1>
        <div className="typeString">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer | Programmer |Learner..!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(3000)
                .start();
            }}
          />
        </div>
      </div>

      <i class="fab fa-linkedin"></i>
      <i class="fab fa-facebook"></i>
      <div className="icon d-inline">
        <ul>
          <li>
            {" "}
            <a
              className="pr-4 fa-2x"
              href="https://github.com/za-rakib"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            {" "}
            <a
              className="pr-4 fa-2x"
              href="https://www.linkedin.com/in/md-rakib-hossen-2964b0157/"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            {" "}
            <a
              className=" fa-2x"
              href="https://www.facebook.com/za.rakib2/"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
