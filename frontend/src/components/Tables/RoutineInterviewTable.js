import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const RoutineInterviewTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "grade", header: "Grade", size: 150 },
      { accessorKey: "section", header: "Section", size: 200 },
      { accessorKey: "date", header: "Date", size: 150 },
      {
        accessorKey: "problem",
        header: "Personal-Social Development Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "details",
        header: "Personal-Social Development Details",
        size: 150,
      },
      {
        accessorKey: "problem",
        header: "Friends/Peers/Interpersonal Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "details",
        header: "Friends/Peers/Interpersonal Details",
        size: 150,
      },
      {
        accessorKey: "problem",
        header: "Personal & Health Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "details",
        header: "Personal & Health Details",
        size: 150,
      },
      {
        accessorKey: "problem",
        header: "Academic Development Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "details",
        header: "Academic Development Details",
        size: 150,
      },
      {
        accessorKey: "problem",
        header: "Career Development Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "details",
        header: "Career Development Details",
        size: 150,
      },
      { accessorKey: "remark", header: "Counselor's Remark", size: 150 },
      { accessorKey: "recommendations", header: "Recommendations", size: 150 },
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

export default RoutineInterviewTable;
