import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Company Name", width: 200 },
  { field: "address", headerName: "Company Address", width: 200 },
  {
    field: "location",
    headerName: "Location",
    width: 200,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const data = {
  pageSize: 25,
  pageToken: "",
};

export default function Companies() {
  const [companies, setCompanies] = React.useState([]);
  React.useEffect(() => {
    try {
      fetch("http://localhost:5000/all-companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setCompanies(data.companies);
          console.log(data);
        })
        .catch((error) => console.error("Error fetching data:", error));

      // console.log(response.json);
      // setComnpanies(response.json.companies);
    } catch (error) {
      console.error("Error: ", error);
    }
  }, []);
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={companies}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
