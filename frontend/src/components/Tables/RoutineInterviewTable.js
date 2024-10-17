import {React, useEffect, useMemo, useState} from "react";
import { MaterialReactTable, MRT_ActionMenuItem } from "material-react-table";
import AxiosInstance from "./AllForms/Axios";
import Dayjs from "dayjs";
import { Edit, Delete } from '@mui/icons-material';
import { IconButton } from "@mui/material";


const RoutineInterviewTable = () => {

  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get('/routine_interview/').then((res) => {
      setMyData(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    GetData();
  }, [])

  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "grade", header: "Grade", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { 
        accessorFn: (row) => Dayjs(row.date).format('MM-DD-YYYY'), 
        header: "Date", 
        size: 150 
      },
      {
        accessorKey: "family_problem",
        header: "Personal-Social Development Problem Encountered (Family Problem)",
        size: 270,
      },
      {
        accessorKey: "family_details",
        header: "Details",
        size: 150,
      },
      {
        accessorKey: "friends_problem",
        header: "Friends/Peers/Interpersonal Problem Encountered (Friends Problem)",
        size: 150,
      },
      {
        accessorKey: "friends_details",
        header: "Details",
        size: 150,
      },
      {
        accessorKey: "health_problem",
        header: "Personal & Health Problem Encountered (Health Problem)",
        size: 150,
      },
      {
        accessorKey: "health_details",
        header: "Details",
        size: 150,
      },
      {
        accessorKey: "academic_problem",
        header: "Academic Development Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "academic_details",
        header: "Academic Development Details",
        size: 150,
      },
      {
        accessorKey: "career_problem",
        header: "Career Development Problem Encountered",
        size: 150,
      },
      {
        accessorKey: "career_details",
        header: "Career Development Details",
        size: 150,
      },
      { accessorKey: "remarks", header: "Counselor's Remark", size: 150 },
      { accessorKey: "recommendations", header: "Recommendations", size: 150 },
      { accessorKey: "other_recommendations", header: "Other Recommendations", size: 150 },
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
      }}
    >
      <div style={{ width: "1200px", height: "600px" }}>
        { loading ? <p>Loading data...</p> :
        <MaterialReactTable 
          columns={columns} 
          data={myData} 

          enableRowActions
          renderRowActionMenuItems={({ row, table }) => [
            <MRT_ActionMenuItem //or just use a normal MUI MenuItem component
              icon={
              <IconButton>
              <Edit />
              </IconButton>
            }
              key="edit"
              label="Edit"
              onClick={() => console.info('Edit')}
              table={table}
            />,
            <MRT_ActionMenuItem
              icon={
                <IconButton>
                <Delete />
                </IconButton>
              }
              key="delete"
              label="Delete"
              onClick={() => console.info('Delete')}
              table={table}
            />,
          ]}
          />
}
      </div>
    </div>
  );
};

export default RoutineInterviewTable;