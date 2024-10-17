import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const SecondYearTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "course", header: "Course", size: 150 },
      { accessorKey: "gstm", header: "(VI)GSTM", size: 150 },
      { accessorKey: "nt", header: "(VI)NT", size: 200 },
      { accessorKey: "epp", header: "(VI)EPP", size: 200 },
      { accessorKey: "w", header: "(VI)W", size: 200 },
      { accessorKey: "mc", header: "(VI)MC", size: 200 },
      { accessorKey: "cu/ca", header: "(VI)CU/CA", size: 200 },
      { accessorKey: "asm", header: "(VI)ASM", size: 200 },
      { accessorKey: "nt", header: "NT", size: 200 },
      { accessorKey: "epp", header: "EPP", size: 200 },
      { accessorKey: "w", header: "W", size: 200 },
      { accessorKey: "mc", header: "MC", size: 200 },
      { accessorKey: "cu/ca", header: "CU/CA", size: 200 },
      { accessorKey: "asm", header: "ASM", size: 200 },
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

export default SecondYearTable;
