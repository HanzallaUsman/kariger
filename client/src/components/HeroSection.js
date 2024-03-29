import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState, useEffect } from "react";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  // const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMessage(data.message);
  //       console.log("Message is:", data);
  //     });
  // }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      console.log("User is:", user);
    }
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            {/* <h3> {message} </h3> */}
            <p>
              Karigar connects you with top-notch skilled professionals for all
              your project needs. From carpentry and plumbing to electrical work
              and landscaping, we've got the expertise you seek. With our
              platform, finding quality workmanship is a breeze. Join Karigar
              today and experience excellence at your fingertips.
            </p>
            <NavLink to="/karigers">
              <Button style={{ display: "block", margin: "1rem" }}>
                Browse Karigers
              </Button>
            </NavLink>
            <NavLink to="/addlisting">
              <Button style={{ display: "block", margin: "1rem" }}>
                Post a Job
              </Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
