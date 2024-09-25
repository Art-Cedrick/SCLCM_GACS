import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button, // Import Button here
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import TextFields from "./Forms/TextFields"; // Ensure this path is correct

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
          ABSENTEES
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
                label="Name"
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
              <TextFields
                label="Section"
                name="section"
                control={control}
                placeholder="Enter Section"
                sx={{ flex: 1 }}
              />
            </Stack>

            
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
