import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade1Table = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Student Name", size: 150 },
      { accessorKey: "age", header: " Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradeLevel", header: "Grade Level", size: 150 },
      { accessorKey: "test", header: "Test", size: 150 },
      { accessorKey: "rawscore", header: "Raw Score", size: 150 },
      {
        accessorKey: "percentile",
        header: "Percentile",
        size: 200,
      },
      {
        accessorKey: "stanine",
        header: "Stanine",
        size: 200,
      },
      { accessorKey: "rating", header: "Rating", size: 150 },
      { accessorKey: "vocab", header: " Vocab", size: 150 },
      { accessorKey: "letter", header: "Letters", size: 200 },
      { accessorKey: "visual", header: "Visual", size: 150 },
      { accessorKey: "auditory", header: "Auditory", size: 150 },
      { accessorKey: "comp", header: "Comp", size: 150 },
      {
        accessorKey: "number",
        header: "Number",
        size: 200,
      },
      { accessorKey: "writing", header: "Writing", size: 150 },
      { accessorKey: "spelling", header: " Spelling", size: 150 },
      { accessorKey: "q_vocab", header: "(Q)Vocab", size: 200 },
      { accessorKey: "q_letter", header: "(Q)Letters", size: 150 },
      { accessorKey: "q_visual", header: "(Q)Visual", size: 150 },
      { accessorKey: "q_comp", header: "(Q)Comp", size: 150 },
      {
        accessorKey: "q_number",
        header: "(Q)Number",
        size: 200,
      },
      { accessorKey: "q_writing", header: "(Q)Writing", size: 150 },
      { accessorKey: "q_spelling", header: "(Q)Spelling", size: 150 },
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

export default Grade1Table;
