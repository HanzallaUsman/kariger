import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Wrapper>
      {" "}
      <PaperContainer>
        <FormContainer onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
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
