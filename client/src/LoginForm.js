import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 20px;
  border-radius: 1rem;
  // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.bg};
  width: fit-content;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  min-width: 20rem;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      console.log("Response: ", response);
      const sessionID = response.data.sessionID;
      console.log("Session ID: ", sessionID);
      localStorage.setItem("currentUser", JSON.stringify({ username }));
      console.log(
        "localStorage.getItem('currentUser')",
        localStorage.getItem("currentUser")
      );
      nav("/");
    } catch (error) {
      console.log("Error logging in: ", error);
    }
  };

  return (
    <Wrapper>
      {" "}
      <PaperContainer>
        <FormContainer onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <Input
            type="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <div style={{ display: "flex" }}>
            <p>Don't have a Kariger Account?</p>
            <NavLink to="/signup">
              <p style={{ color: "blue" }}> Sign up</p>
            </NavLink>
          </div>
        </FormContainer>
      </PaperContainer>
    </Wrapper>
  );
};

export default LoginForm;
