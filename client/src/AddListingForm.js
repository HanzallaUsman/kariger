import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px gray;
  width: 300px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px gray;
  width: 300px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px gray;
  cursor: pointer;
`;

const AddListingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Label htmlFor="description">Description</Label>
      <TextArea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Label htmlFor="budget">Budget</Label>
      <TextArea
        id="budget"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Label htmlFor="description">Description</Label>
      <TextArea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Label htmlFor="description">Description</Label>
      <TextArea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button type="submit">Add Listing</Button>
    </FormContainer>
  );
};

export default AddListingForm;
