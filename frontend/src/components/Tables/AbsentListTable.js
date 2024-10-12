import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const AbsentListTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "grade",
        header: "Grade",
        size: 150,
      },
      {
        accessorKey: "section", // Changed "Section" to "section" for consistency
        header: "Section",
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

export default AbsentListTable;
