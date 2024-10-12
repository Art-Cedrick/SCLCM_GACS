import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const FourthYearTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "dateofbirth", header: "Date of Birth", size: 150 },
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 200 },
      { accessorKey: "sex", header: "Sex", size: 150 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "course/program", header: "Course/Program", size: 150 },
      { accessorKey: "l-raw", header: "L-Raw", size: 200 },
      { accessorKey: "l-s", header: "L-S", size: 200 },
      { accessorKey: "l-vi", header: "L-VI", size: 200 },
      { accessorKey: "q-raw", header: "Q-Raw", size: 200 },
      { accessorKey: "q-%", header: "Q-%", size: 200 },
      { accessorKey: "q-s", header: "Q-S", size: 200 },
      { accessorKey: "sq-vi", header: "SQ-VI", size: 200 },
      { accessorKey: "t-raw", header: "T-Raw", size: 200 },
      { accessorKey: "t-%", header: "T-%", size: 200 },
      { accessorKey: "t-s", header: "T-S", size: 200 },
      { accessorKey: "t-vi", header: "T-VI", size: 200 },
      {
        accessorKey: "kiersytemperentsorter",
        header: "Kiersy Temperent Sorter",
        size: 200,
      },
      {
        accessorKey: "negotiatingpersuading",
        header: "Negotiating Persuading",
        size: 200,
      },
      {
        accessorKey: "verbalcommunication",
        header: "Verbal Communication",
        size: 200,
      },
      { accessorKey: "co-op", header: "Co-op", size: 200 },
      {
        accessorKey: "investigatinganalyzing",
        header: "Investigating Analyzing",
        size: 200,
      },
      { accessorKey: "leadership", header: "Leadership", size: 200 },
      {
        accessorKey: "planningorganizing",
        header: "Planning Organizing",
        size: 200,
      },
      { accessorKey: "numeracy", header: "Numeracy", size: 200 },
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

export default FourthYearTable;
