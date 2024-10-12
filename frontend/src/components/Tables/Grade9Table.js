import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade9Table = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "top 1", header: "Top 1", size: 150 },
      { accessorKey: "top 2", header: "Top 2", size: 200 },
      { accessorKey: "top 3", header: "Top 3", size: 200 },
      { accessorKey: "selfcontrol", header: "Self Control", size: 200 },
      { accessorKey: "mas-fem", header: "Masculinity-FEminity", size: 200 },
      { accessorKey: "status", header: "Status", size: 200 },
      { accessorKey: "infrequency", header: "Infrequency", size: 200 },
      { accessorKey: "acquiescence", header: "Acquiescence", size: 200 },
      { accessorKey: "r", header: "R", size: 200 },
      { accessorKey: "i", header: "I", size: 200 },
      { accessorKey: "a", header: "A", size: 200 },
      { accessorKey: "s", header: "S", size: 200 },
      { accessorKey: "e", header: "E", size: 200 },
      { accessorKey: "c", header: "C", size: 200 },
      { accessorKey: "se", header: "Se", size: 200 },
      { accessorKey: "mf", header: "Mf", size: 200 },
      { accessorKey: "st", header: "St", size: 200 },
      { accessorKey: "inf", header: "Inf", size: 200 },
      { accessorKey: "ac", header: "Ac", size: 200 },
    ],
    []
  );

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

export default Grade9Table;
