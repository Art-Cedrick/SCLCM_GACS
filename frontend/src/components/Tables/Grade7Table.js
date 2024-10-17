import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Example = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "tot", header: "Total Score", size: 150 },
      { accessorKey: "beh", header: "Behavioral Adjustment", size: 200 },
      {
        accessorKey: "int",
        header: "Intellectual and School Status",
        size: 200,
      },
      {
        accessorKey: "phv",
        header: "Pysical Apperance and Attribute",
        size: 200,
      },
      { accessorKey: "fre", header: "Freedom from Anxiety", size: 200 },
      { accessorKey: "pop", header: "Popularity", size: 200 },
      { accessorKey: "hap", header: "Happiness and Satisfaction", size: 200 },
      { accessorKey: "py", header: "PY (Numerical)", size: 200 },
      { accessorKey: "beh", header: "BEH (Numerical)", size: 200 },
      { accessorKey: "int", header: "INT (Numerical)", size: 200 },
      { accessorKey: "phy", header: "PHY (Numerical)", size: 200 },
      { accessorKey: "fre", header: "FRE (Numerical)", size: 200 },
      { accessorKey: "pop", header: "POP (Numerical)", size: 200 },
      { accessorKey: "hap", header: "HAP (Numerical)", size: 200 },
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

export default Example;
