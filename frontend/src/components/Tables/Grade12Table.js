import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade12Table = () => {
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
      { accessorKey: "ad", header: "AD", size: 200 },
      { accessorKey: "sc", header: "SC", size: 200 },
      { accessorKey: "ass", header: "ASS", size: 200 },
      { accessorKey: "so", header: "SO", size: 200 },
      { accessorKey: "s", header: "S", size: 200 },
      { accessorKey: "f", header: "F", size: 200 },
      { accessorKey: "c", header: "C", size: 200 },
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

export default Grade12Table;
