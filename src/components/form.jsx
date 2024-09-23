import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid2, Typography } from "@mui/material";
import axios from "axios";
// import { QueryClient } from "@tanstack/react-query";

export default function CompanyForm() {
  const [cName, setCName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit button clicked");

    if (cName === "" || address === "" || location === "") {
      alert("either of fields are empty");
      return;
    }
    const data = {
      name: cName,
      address: address,
      location: location,
    };
    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/companies", {
        method: "POST",
        // mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("failed to create company");
      }
      // axios.defaults.withCredentials = false;
      // const res1 = await axios
      //   .post("http://localhost:5000/companies", data, {
      //     withCredentials: false,
      //   })
      //   .headers({ "Access-Control-Allow-Origin": "*" });
      // console.log(res1.status);
    } catch (error) {
      console.error("Error: ", error);
    }

    console.log(
      "company name: ",
      cName,
      "\n",
      "address: ",
      address,
      "\n",
      "location: ",
      location
    );
    setCName("");
    setAddress("");
    setLocation("");
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "80ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid2 container spacing={2} columns={30} direction={"row"}>
        <Grid2 size={30}>
          <Typography sx={{ color: "black", textJustify: "inherit" }}>
            <h1>Enter company details...</h1>
          </Typography>
        </Grid2>
        <Grid2 size={30}>
          <TextField
            id="company-name"
            label="Company Name"
            variant="outlined"
            value={cName}
            onChange={(event) => setCName(event.target.value)}
          />
        </Grid2>
        <Grid2 size={30}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Grid2>
        <Grid2 size={30}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Grid2>
      </Grid2>
      <Grid2 size={30}>
        <Button variant="contained" type="submit">
          Add Company
        </Button>
      </Grid2>
    </Box>
  );
}
