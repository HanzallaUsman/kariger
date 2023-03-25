import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Wrapper>
      <PaperContainer>
        <FormContainer onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <Input
            type="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <Button type="submit">Sign up</Button>
        </FormContainer>
      </PaperContainer>
    </Wrapper>
  );
};

export default LoginForm;
