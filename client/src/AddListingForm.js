import React, { useState } from "react";
import Card from "@mui/material/Card";
import { TextField, Box, Select, MenuItem, Typography } from "@mui/material";
import { Button } from "./styles/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import axios from "axios";

const categories = [
  "Construction Workers",
  "Landscapers",
  "Moving Services",
  "House Cleaning",
  "General Laborers",
];

const AddListingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetUnit, setBudgetUnit] = useState("perHour");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [company, setCompany] = useState(""); // new state for company field

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const uploadFile = async (file, filePath) => {
    const storageRef = ref(storage, filePath);
    try {
      console.log("Uploading file to firebase storage");
      await uploadBytes(storageRef, file);
      console.info("Uploaded file");
      const url = await getDownloadURL(storageRef);
      console.info("Obtained url for uploaded file", url);
      return { url };
    } catch (e) {
      console.error(e, "Could not upload file");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Upload the image to Firebase Storage and get its download URL
      const imageName = Date.now().toString() + "_Image";
      const url = await uploadFile(file, `listings/${imageName}`);

      const response = await axios.post("http://localhost:8000/listings/new", {
        title,
        name: title,
        description,
        price: budget,
        category,
        type,
        imageUrl: url,
        featured: false,
        company: type === "worker" ? company : "Gig", // include company based on type
      });
      console.log(response.data);
      setTitle("");
      setDescription("");
      setBudget("");
      setCategory("");
      setCompany("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", padding: "5%" }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", margin: "5%" }}>
            <Typography fontSize="large">Post a Gig!</Typography>
            <TextField
              label="Title"
              type="text"
              id="title"
              value={title}
              margin="normal"
              onChange={(event) => setTitle(event.target.value)}
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            />
            <TextField
              label="Description"
              id="description"
              value={description}
              margin="normal"
              onChange={(event) => setDescription(event.target.value)}
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            />

            {/* <TextField
              label="Budget"
              type="number"
              id="budget"
              value={budget}
              margin="normal"
              onChange={(event) => setBudget(event.target.value)}
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            /> */}
            <TextField
              label="Budget"
              type="number"
              id="budget"
              value={budget}
              margin="normal"
              onChange={(event) => setBudget(event.target.value)}
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            />
            <TextField
              label="Budget Unit"
              id="budgetUnit"
              select
              value={budgetUnit}
              onChange={(event) => setBudgetUnit(event.target.value)}
              margin="normal"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            >
              <MenuItem value="perHour">per hour</MenuItem>
              <MenuItem value="perDay">per day</MenuItem>
            </TextField>
            <Typography>Category</Typography>
            <Select
              label="Category"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              margin="normal"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
              InputProps={{ style: { fontSize: 12 } }}
              inputProps={{ style: { fontSize: 12 } }}
            >
              <MenuItem value="">Select a category</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <Typography>Type</Typography>
            <Select
              label="Type"
              id="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
              margin="normal"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
              InputProps={{ style: { fontSize: 12 } }}
              inputProps={{ style: { fontSize: 12 } }}
            >
              <MenuItem value="">Select a type</MenuItem>
              <MenuItem value="gig">Gig</MenuItem>
              <MenuItem value="worker">Worker</MenuItem>
            </Select>

            {type === "worker" && (
              <>
                <Typography>Company</Typography>
                <TextField
                  label="Company"
                  id="company"
                  value={company}
                  margin="normal"
                  onChange={(event) => setCompany(event.target.value)}
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                />
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                fontSize: "medium",
                marginTop: "20px",
              }}
            >
              Add Gig
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default AddListingForm;
