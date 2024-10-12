import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const SCLCMGuidanceClassTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "grade", header: "Grade", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "date", header: "Date", size: 200 },
      { accessorKey: "one", header: "Question 1", size: 150 },
      { accessorKey: "two", header: "Question 2", size: 150 },
      { accessorKey: "three", header: "Question 3", size: 150 },
      { accessorKey: "four", header: "Question 4", size: 200 },
      { accessorKey: "five", header: "Question 5", size: 200 },
      { accessorKey: "six", header: "Question 6", size: 200 }, // Corrected accessorKey
      {
        accessorKey: "actions",
        header: "Actions",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <IconButton
              size="small"
              onClick={() => handleEdit(row.original)}
              aria-label="edit"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleDelete(row.original)}
              aria-label="delete"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (rowData) => {
    console.log("Edit:", rowData);
    // Implement your edit logic here
  };

  const handleDelete = (rowData) => {
    console.log("Delete:", rowData);
    // Implement your delete logic here
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflowX: "auto",
        marginTop: "50px",
      }}
    >
      <div style={{ width: "900px", height: "300px" }}>
        <MaterialReactTable columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default SCLCMGuidanceClassTable;
