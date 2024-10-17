import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const RoutineInterviewTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 200 },
      { accessorKey: "grade", header: "Grade", size: 200 },
      { accessorKey: "section", header: "Section", size: 250 },
      { accessorKey: "date", header: "Date", size: 200 },

      // Personal-Social Development (PSD) group
      {
        header: "Personal-Social Development (PSD)",
        columns: [
          {
            accessorKey: "problem1",
            header: "Family Problem Encountered",
            size: 200,
          },
          {
            accessorKey: "details1",
            header: "Family Details",
            size: 200,
          },
          {
            accessorKey: "problem2",
            header: "Friends/Peers/Interpersonal Problem Encountered",
            size: 200,
          },
          {
            accessorKey: "details2",
            header: "Friends/Peers/Interpersonal Details",
            size: 200,
          },
          {
            accessorKey: "problem3",
            header: "Personal & Health Problem Encountered",
            size: 200,
          },
          {
            accessorKey: "details3",
            header: "Personal & Health Details",
            size: 200,
          },
        ],
      },

      // Academic Development (AD) group
      {
        header: "Academic Development (AD)",
        columns: [
          {
            accessorKey: "problem4",
            header: "Academics/School Problem Encountered",
            size: 200,
          },
          {
            accessorKey: "details4",
            header: "Academics/School Details",
            size: 200,
          },
        ],
      },

      // Career Development (CD) group
      {
        header: "Career Development (CD)",
        columns: [
          {
            accessorKey: "problem5",
            header: "Academics/School Problem Encountered",
            size: 200,
          },
          {
            accessorKey: "details5",
            header: "Academic Schools Details",
            size: 200,
          },
        ],
      },

      { accessorKey: "remark", header: "Counselor's Remark", size: 200 },
      { accessorKey: "recommendations", header: "Recommendations", size: 200 },
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

export default RoutineInterviewTable;
