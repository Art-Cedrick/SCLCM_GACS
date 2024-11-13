import React from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Card,
  CardContent,
  Stack,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import AxiosInstance from "./AllForms/Axios";

const Appointment = () => {
  const defaultValues = {
    sr_code: "",
    name: "",
    grade: "",
    section: "",
    date: "",
    purpose: "",
    other_purpose: "",
  };

  const { control, handleSubmit, reset } = useForm({ defaultValues });

  // Submit handler
  const onSubmit = async (data) => {
    console.log(data);

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    try {
      const response = await AxiosInstance.post(
        "/appointment/",
        {
          sr_code: data.sr_code,
          name: data.name,
          grade: data.grade,
          section: data.section,
          date: data.date,
          purpose: data.purpose,
          other_purpose: data.other_purpose,
        },
        {
          // Include the token in the Authorization header
          headers: {
            Authorization: `Token ${token}`, // Replace 'Token' with your actual token type if different
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          STUDENT'S CALL SLIP
        </Typography>
        <Paper elevation={3} sx={{ padding: "40px", borderRadius: "8px", backgroundColor: "#f7f9fc", minHeight: "50vh" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              {/* First Row: Name, Grade, Section, and Date Picker */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="sr_code"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Student Number" placeholder="Enter Student Number" fullWidth />
                  )}
                />
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Name" placeholder="Enter Name" fullWidth />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="grade"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Grade" placeholder="Enter Grade" fullWidth />
                  )}
                />
                <Controller
                  name="section"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Section" placeholder="Enter Section" fullWidth />
                  )}
                />
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => <TextField type="date" {...field} fullWidth />}
                />
              </Stack>

              {/* Purpose Section */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-start" }}>
                <FormControl fullWidth>
                  <InputLabel>Purpose</InputLabel>
                  <Controller
                    name="purpose"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Purpose">
                        <MenuItem value="Routine Interview">Routine Interview</MenuItem>
                        <MenuItem value="Referral">Referral</MenuItem>
                        <MenuItem value="Individual Planning">Individual Planning</MenuItem>
                        <MenuItem value="Counseling">Counseling</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <Controller
                  name="other_purpose"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Specify if others"
                      variant="standard"
                      sx={{ display: field.value === "Others" ? "block" : "none" }}
                    />
                  )}
                />
              </Box>

              {/* Submit Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Appointment;
