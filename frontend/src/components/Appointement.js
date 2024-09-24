import React from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Card,
  CardContent,
  Stack,
  Button, // Import Button here
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "./Forms/DatePicker"; // Ensure this path is correct
import TextFields from "./Forms/TextFields"; // Ensure this path is correct
import CheckboxLabels from "./Forms/CheckboxLabels"; // Ensure this path is correct

const Appointement = () => {
  const { control, handleSubmit } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
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
          <Stack spacing={2}>
            {/* First Row: Grade, Section, and Date Picker */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Grade"
                name="grade"
                control={control}
                placeholder="Enter Grade"
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Section"
                name="section"
                control={control}
                placeholder="Enter Section"
                sx={{ flex: 1 }}
              />
              <Controller
                name="appointmentDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Select Date"
                    control={control}
                    name={field.name}
                    onChange={field.onChange}
                    value={field.value}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            {/* Purpose Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: "16px",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Purpose:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                {["Routine Interview", "Referral", "Individual Planning"].map(
                  (label, index) => (
                    <CheckboxLabels
                      key={index}
                      control={control}
                      name={`checkbox${index + 1}`}
                      label={label}
                    />
                  )
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <CheckboxLabels
                  control={control}
                  name="checkboxCounseling"
                  label="Counseling"
                />
                <CheckboxLabels
                  control={control}
                  name="checkboxOthers"
                  label="Others"
                />
                <TextField
                  name="Purpose"
                  control={control}
                  placeholder=""
                  variant="standard"
                  sx={{ width: "auto" }}
                />
              </Box>
            </Box>

            {/* Submit Button */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: "10px" }} // Adjusted margin
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Appointement;
