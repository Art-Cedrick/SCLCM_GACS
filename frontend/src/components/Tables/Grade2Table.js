import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade2Table = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "age", header: " Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 150 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "total eq", header: "Total EQ", size: 150 },
      {
        accessorKey: "verbal interpretation",
        header: "Verbal Interpretation",
        size: 200,
      },
      { accessorKey: "stanine", header: "Stanine", size: 200 },
      { accessorKey: "sa", header: "SA", size: 200 },
      { accessorKey: "mme", header: "MME", size: 150 },
      { accessorKey: "sm", header: "SM", size: 200 },
      { accessorKey: "e", header: "E", size: 200 },
      { accessorKey: "hr", header: "HR", size: 200 }, // Corrected accessorKey
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "60vh",
        overflow: "auto",
        marginTop: "1in",
        marginBottom: "16px",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", height: "100%" }}>
        <MaterialReactTable columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default Grade2Table;
