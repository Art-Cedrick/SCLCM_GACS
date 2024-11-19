import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const KinderTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: " Name", size: 150 },
      { accessorKey: "gradelevel", header: " Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 200 },
      { accessorKey: "dateofbirth", header: "Date of Birth", size: 150 },
      { accessorKey: "address", header: "Address", size: 150 },
      { accessorKey: "pregm", header: "Pre GM", size: 150 },
      {
        accessorKey: "presgm",
        header: "PreSGM",
        size: 200,
      },
      {
        accessorKey: "prefm",
        header: "PreFM",
        size: 200,
      },
      { accessorKey: "presfm", header: "Pre SFM", size: 150 },
      { accessorKey: "presh", header: " Pre SH", size: 150 },
      { accessorKey: "pressh", header: "PreSSH", size: 200 },
      { accessorKey: "presrl", header: "Pre SRL", size: 150 },
      { accessorKey: "preel", header: "Pre EL", size: 150 },
      { accessorKey: "presel", header: "Pre SEL", size: 150 },
      {
        accessorKey: "prec",
        header: "Pre C",
        size: 200,
      },
      { accessorKey: "presc", header: "Pre SC", size: 150 },
      { accessorKey: "prescalesum", header: " Pre Scale Sum", size: 150 },
      { accessorKey: "prestandardscore", header: "Pre Standard Score", size: 200 },
      { accessorKey: "prevarbalint", header: "Pre Verbal Int", size: 150 },
      { accessorKey: "postgm", header: "Post GM", size: 150 },
      { accessorKey: "postsgm", header: "PostSGM", size: 150 },
      {
        accessorKey: "postfm",
        header: "Post FM",
        size: 200,
      },
      { accessorKey: "postsfm", header: "PostSFM", size: 150 },
      { accessorKey: "postsh", header: "Post SH", size: 150 },
      { accessorKey: "postssh", header: "PostSSH", size: 150 },
      { accessorKey: "postrl", header: " Post RL", size: 150 },
      { accessorKey: "postsrl", header: "Post SRL", size: 200 },
      { accessorKey: "postel", header: "Post EL", size: 150 },
      { accessorKey: "postsel", header: "PostSEL", size: 150 },
      { accessorKey: "postc", header: "Post C", size: 150 },
      {
        accessorKey: "postsc",
        header: "Post SC",
        size: 200,
      },
      { accessorKey: "postscalesum", header: "Post Scale Sum", size: 150 },
      { accessorKey: "poststandardscore", header: "Post Standard Score", size: 150 },
      { accessorKey: "postverbalint", header: "Post Verbal Int", size: 150 },
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

export default KinderTable;
