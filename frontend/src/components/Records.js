import React, { useState } from "react";
import { Container, Box, Paper, Typography, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const Records = () => {
  const [rows, setRows] = useState([]);

  
  const columns = [
    {
      field: "studentID",
      headerName: "Student ID",
      width: 120,
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Full Name",
      width: 200,
      headerAlign: "center",
      flex: 2,
    },
    {
      field: "yearLevel",
      headerName: "Year Level",
      type: "number",
      width: 120,
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 250,
      headerAlign: "center",
      flex: 2,
    },
    {
      field: "contact",
      headerName: "Contact No.",
      width: 150,
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.id)} color="error">
          <DeleteIcon />
        </IconButton>
      ),
      headerAlign: "center",
      flex: 1,
    },
  ];

  // Handle row deletion
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <Typography variant="h5" gutterBottom align="center">
        Records
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          mt: 1,
        }}
      >
        {/* DataGrid */}
        <Paper
          sx={{
            flexGrow: 1,
            height: "calc(100vh - 200px)",
            overflow: "hidden",
            pt: 2,
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            autoHeight
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
                color: "#333",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                textAlign: "center",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #ddd",
                textAlign: "center",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default Records
