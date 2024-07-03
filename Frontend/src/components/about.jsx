import React from "react";
import "../components_style/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About Quizzer</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-card">
          <div className="section__pic-container">
            <img
              src={"./assests/profile-pic.png"}
              alt="Pratham Rastogi profile picture"
            />
          </div>
          <p className="about-card-text">
            Pratham Rastogi <br /> samrastogi8641@gmail.com
          </p>
        </div>
        <div className="about-description">
          <h3 className="about-subheader">MERN & Full Stack Developer</h3>
          <p>
            Welcome to Quizer, an interactive platform designed to facilitate
            seamless quiz creation and participation. Built using the robust
            MERN stack (MongoDB, Express, React, and Node.js), Quizer offers a
            dynamic and user-friendly experience for both quiz creators and
            participants. Easily design quizzes with multiple-choice questions,
            each with up to four options, and set time limits to maintain
            engagement and challenge. Quizer ensures security and privacy
            through a secure authentication system, allowing only registered
            users to create or participate in quizzes. Developed by Pratham
            Rastogi, Quizer combines a responsive interface and efficient
            navigation, making it simple for users to utilize all features
            effectively. Join Quizer today and be part of a growing community of
            quiz enthusiasts!
            <br /> <br />
            <a href="https://prathamrastogi.netlify.app/">
              Know More by Clicking here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
