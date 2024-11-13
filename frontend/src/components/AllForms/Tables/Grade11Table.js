import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade11Table = () => {
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
      { accessorKey: "warmth", header: "Warmth", size: 200 },
      { accessorKey: "reasoning", header: "Reasoning", size: 200 },
      { accessorKey: "emotion", header: "Emotion", size: 200 },
      { accessorKey: "dominance", header: "Dominance", size: 200 },
      { accessorKey: "acquiescence", header: "Acquiescence", size: 200 },
      { accessorKey: "liveliness", header: "Liveliness", size: 200 },
      { accessorKey: "conciousness", header: "Conciousness", size: 200 },
      { accessorKey: "socialboldness", header: "Social Boldness", size: 200 },
      { accessorKey: "sensitivity", header: "Sensitivity", size: 200 },
      { accessorKey: "vigilance", header: "Vigilance", size: 200 },
      { accessorKey: "abstract", header: "Abstract", size: 200 },
      { accessorKey: "privateness", header: "Privateness", size: 200 },
      { accessorKey: "apprehension", header: "Apprehension", size: 200 },
      { accessorKey: "selfreliance", header: "Self Reliance", size: 200 },
      { accessorKey: "perfectionism", header: "Perfectionism", size: 200 },
      { accessorKey: "tension", header: "Tension", size: 200 },
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

export default Grade11Table;
