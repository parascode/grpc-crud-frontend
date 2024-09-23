import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Company() {
  const [id, setId] = React.useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(id);
    navigate(`/company/` + id);
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "80ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <Grid2 size={30}>
        <TextField
          id="id"
          label="Company ID"
          variant="outlined"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </Grid2>
      <Grid2 size={30}>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Grid2>
    </Box>
  );
}
