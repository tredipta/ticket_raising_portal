import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Avatar,
  CssBaseline,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";

export default function UserRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    plantName: "",
    address: "",
    business: "",
    customerName: "",
    supportStartDate: "",
    supportEndDate: "",
    accountOwnerCustomer: "",
    accountOwnerGW: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setFormData((prevFormData) => {
    //   return { ...prevFormData, [name]: value };
    // });
    setFormData({ ...formData, [name]: value });
    console.log(
      "event.target.name : ",
      event.target.name,
      "event.target.value : ",
      event.target.value
    );
  };

  const handleDesignationChange = (event) => {
    const { value } = event.target;
    // setFormData((prevFormData) => {
    //   return { ...prevFormData, [name]: value };
    // });
    setFormData({ ...formData, designation: value });
    console.log("event.target.value : ", event.target.value);
  };

  // const hashedPassword = bcrypt.hash(formData.password, 10);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    // const response = await fetch("http://localhost:8081/api/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),

    // var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hash(formData.password, 10);

    // const hashedPassword = await bcrypt.hash(formData.password, 10);
    const formDataWithChangedPassword = {
      ...formData,
      password: hashedPassword,
    };
    // const response = await fetch("http://localhost:8081/api/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formDataWithChangedPassword),
    // });
    // if (response.ok) {
    //   console.log("User registered successfully");
    // } else {
    //   console.error("Failed to register user");
    // }
    console.log("formDataWithChangedPassword : ", formDataWithChangedPassword);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HowToRegTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Registration Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box component="div" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Designation</InputLabel>
                  <Select
                    required
                    id="designation"
                    value={formData.designation}
                    label="Designation"
                    onChange={handleDesignationChange}
                  >
                    <MenuItem value={""}>Select</MenuItem>
                    <MenuItem value={"Ten"}>Ten</MenuItem>
                    <MenuItem value={"Twenty"}>Twenty</MenuItem>
                    <MenuItem value={"Thirty"}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  // autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="number"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="plantName"
                  label="Plant Name"
                  id="plantName"
                  autoComplete="plantName"
                  value={formData.plantName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="business"
                  label="Business"
                  id="business"
                  autoComplete="business"
                  value={formData.business}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="customerName"
                  label="Customer Name"
                  id="customerName"
                  autoComplete="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="supportStartDate"
                  label="Support Start Date"
                  id="supportStartDate"
                  autoComplete="supportStartDate"
                  value={formData.supportStartDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="supportEndDate"
                  label="Support End Date"
                  id="supportEndDate"
                  autoComplete="supportEndDate"
                  value={formData.supportEndDate}
                  onChange={handleInputChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Support Start Date"
                    value={formData.supportStartDate}
                    onChange={(newValue) =>
                      setFormData({ ...formData, supportStartDate: newValue })
                    }
                    // renderInput={(params) => (
                    //   <TextField {...params} fullWidth />
                    // )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    label="Support End Date"
                    value={formData.supportEndDate}
                    onChange={(newValue) =>
                      setFormData({ ...formData, supportEndDate: newValue })
                    }
                    // renderInput={(params) => (
                    //   <TextField {...params} fullWidth />
                    // )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="accountOwnerCustomer"
                  label="Account Owner Customer"
                  id="accountOwnerCustomer"
                  autoComplete="accountOwnerCustomer"
                  value={formData.accountOwnerCustomer}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="accountOwnerGW"
                  label="Account Owner GW"
                  id="accountOwnerGW"
                  autoComplete="accountOwnerGW"
                  value={formData.accountOwnerGW}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register User
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
