import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade10Table = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: " Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "rawscore", header: "Raw Score", size: 150 },
      {
        accessorKey: "percentile",
        header: "Percentile",
        size: 200,
      },
      {
        accessorKey: "verbalinterpretation",
        header: "Verbal Interpretation",
        size: 200,
      },
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

export default Grade10Table;
