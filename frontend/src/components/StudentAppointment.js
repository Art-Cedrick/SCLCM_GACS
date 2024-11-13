import React, { useState, useEffect } from "react";
import AxiosInstance from "./AllForms/Axios";

function StudentAppointment() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await AxiosInstance.get("/appointment/", {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` }
        });
        setSchedules(response.data);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };
    fetchSchedules();
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>
            Appointment on {schedule.date} for {schedule.purpose}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentAppointment;
