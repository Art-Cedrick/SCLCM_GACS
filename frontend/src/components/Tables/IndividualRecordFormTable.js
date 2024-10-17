import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const IndividualRecordFormTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "lastname", header: "Last Name", size: 150 },
      { accessorKey: "firstname", header: "First Name", size: 150 },
      { accessorKey: "middlename", header: "Middle Name", size: 200 },
      { accessorKey: "year", header: "Year", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "completeaddress", header: "Complete Address", size: 150 },
      { accessorKey: "fathername", header: "Father Name", size: 200 },
      {
        accessorKey: "fatheroccupation",
        header: "Father Occupation",
        size: 150,
      },
      {
        accessorKey: "fathercontactnumber",
        header: "Father Contact Number",
        size: 150,
      },
      {
        accessorKey: "fatheremailaddress",
        header: "Father Email Address",
        size: 150,
      },
      { accessorKey: "mothername", header: "Mother Name", size: 200 },
      {
        accessorKey: "motheroccupation",
        header: "Mother Occupation",
        size: 150,
      },
      {
        accessorKey: "mothercontactnumber",
        header: "Mother Contact Number",
        size: 150,
      },
      {
        accessorKey: "motheremailaddress",
        header: "Mother Email Address",
        size: 150,
      },
      { accessorKey: "parents", header: "Parents", size: 150 },
      { accessorKey: "livingwith", header: "Living With", size: 150 },
      {
        accessorKey: "clubmembership/positionhandled",
        header: "Club Membership / Positionhandled",
        size: 150,
      },
      // Removed actions column
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

export default IndividualRecordFormTable;
