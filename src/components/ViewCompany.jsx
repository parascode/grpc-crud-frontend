import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid2, Typography, Alert, Stack } from "@mui/material";

export default function ViewCompany() {
  const controller = new AbortController();
  const [cName, setCName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [statusCode, setStatusCode] = React.useState("");
  const { id } = useParams();
  console.log("value of id from params: " + id);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("http://localhost:5000/companies/" + id, {
      signal: controller.signal,
    })
      .then((response) => {
        console.log(response.status);
        if (!response.ok) {
          setStatusCode(response.status);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
        controller.abort();
        // alert(error);
        // return <div>No compamy like this exist</div>;
      })
      .then((data) => {
        console.log(statusCode);
        console.log(data);
        setCName(data.company.name);
        setAddress(data.company.address);
        setLocation(data.company.location);
      });
  }, [statusCode]);

  if (statusCode == 404) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="error">
          Company not found!!
        </Alert>
      </Stack>
    );
  }

  const handleUpdate = async () => {
    const data = {
      name: cName,
      address: address,
      location: location,
    };
    await fetch("http://localhost:5000/companies/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const handleDelete = async () => {
    const response = await fetch("http://localhost:5000/companies/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("copmpany data deleted successfully!!");
    }
    navigate("/add-company");
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "80ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleUpdate}
    >
      <Grid2 container spacing={2} columns={30} direction={"row"}>
        <Grid2>
          <Typography sx={{ color: "black" }}>
            <h1>Your company details...</h1>
          </Typography>
        </Grid2>
        <Grid2 size={30}>
          <TextField
            id="id"
            label="id"
            variant="outlined"
            value={id}
            // onChange={(event) => setAddress(event.target.value)}
            disabled
          />
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
          Update
        </Button>
      </Grid2>
      <Grid2 size={30}>
        <Button variant="contained" type="button" onClick={handleDelete}>
          Delete
        </Button>
      </Grid2>
    </Box>
  );
}
