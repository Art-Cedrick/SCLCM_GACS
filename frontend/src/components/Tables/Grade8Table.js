import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Grade8Table = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "conduct", header: "Conduct", size: 150 },
      { accessorKey: "selfimage", header: "Self Image", size: 200 },
      { accessorKey: "worry", header: "Worry", size: 200 },
      { accessorKey: "neg.perl.rel", header: "Neg.Perl.Rel", size: 200 },
      { accessorKey: "antisocial", header: "AntiSocial", size: 200 },
      { accessorKey: "lie", header: "Lie", size: 200 },
      { accessorKey: "problemindex", header: "Problem Index", size: 200 },
      { accessorKey: "c", header: "C", size: 200 },
      { accessorKey: "si", header: "SI", size: 200 },
      { accessorKey: "w", header: "W", size: 200 },
      { accessorKey: "npr", header: "NPR", size: 200 },
      { accessorKey: "as", header: "AS", size: 200 },
      { accessorKey: "l", header: "L", size: 200 },
      { accessorKey: "pi", header: "PI", size: 200 },
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

export default Grade8Table;
