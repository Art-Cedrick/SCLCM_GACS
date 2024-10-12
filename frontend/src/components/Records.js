import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

// Sample data
const data = [
  {
    name: { firstName: "John", lastName: "Doe" },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: { firstName: "Jane", lastName: "Doe" },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: { firstName: "Joe", lastName: "Doe" },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: { firstName: "Kevin", lastName: "Vandy" },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: { firstName: "Joshua", lastName: "Rolluffs" },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 100,
        // Render action buttons
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

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
