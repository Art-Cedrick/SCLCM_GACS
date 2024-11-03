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
import { useForm, Controller, Form } from "react-hook-form";
import DatePicker from "./AllForms/Forms/DatePicker";
import AxiosInstance from "./AllForms/Axios";

const Appointment = () => {

  const defaultValues = {
    name: '',
    grade: '',
    section: '',
    date: '',
    purpose: '',
    other_purpose: '',
  }

  const { control, handleSubmit, reset } = useForm({defaultValues:defaultValues});

  // Submit handler
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await AxiosInstance.post("/appointment/", {
        name: data.name,
        grade: data.grade,
        section: data.section,
        date: data.date,
        purpose: data.purpose,
        other_purpose: data.other_purpose,
      });
      console.log("Form submitted successfully:", response.data);
      console.log("Appointment scheduled successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("Failed to schedule appointment.");
    }
  };

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          STUDENT'S CALL SLIP
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: "40px",
            borderRadius: "8px",
            backgroundColor: "#f7f9fc",
            minHeight: "50vh",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              {/* First Row: Name, Grade, Section, and Date Picker */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label="Name" placeholder="Enter Name" fullWidth />
                  )}
                />
                <Controller
                  name="grade"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label="Grade" placeholder="Enter Grade" fullWidth />
                  )}
                />
                <Controller
                  name="section"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label="Section" placeholder="Enter Section" fullWidth />
                  )}
                />
                <Controller
                  name="date"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <TextField type="date" {...field} label="" fullWidth />
                  )}
                />
              </Stack>

              {/* Purpose Section - Using Select instead of Checkbox */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel>Purpose</InputLabel>
                  <Controller
                    name="purpose"
                    control={control}
                    defaultValue=""
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
                {/** Additional input for "Others" selection */}
                <Controller
                  name="other_purpose"
                  control={control}
                  defaultValue=""
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
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "10px" }}
                >
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
