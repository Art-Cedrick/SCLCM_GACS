import React, { useEffect, useState } from "react";
import AxiosInstance from "./AllForms/Axios";
import { Card, CardContent, Typography, List, ListItem, Divider } from "@mui/material";

const StudentAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await AxiosInstance.get("/appointment/");
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <Card elevation={3} sx={{ maxWidth: "800px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Your Appointments
        </Typography>
        <List>
          {appointments.map((appointment) => (
            <div key={appointment.id}>
              <ListItem>
                <Typography variant="body1">
                  {appointment.name} - Grade: {appointment.grade}, Section: {appointment.section} - Purpose: {appointment.purpose}
                </Typography>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default StudentAppointment;
