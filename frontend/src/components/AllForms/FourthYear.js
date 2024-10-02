import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "./Forms/TextFields"; // Ensure this path is correct
import MultipleSelect from "./Forms/MultipleSelect"; // Ensure this path is correct
import DatePicker from "./Forms/DatePicker"; // Ensure this path is correct

const FourthYear = () => {
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
          4th Year
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
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <DatePicker
                label="Date of Birth:"
                name="dateOfBirth"
                control={control}
              />
              <TextFields
                label="Student Name:"
                name="studentName"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="Age:" name="age" control={control} />
              <MultipleSelect
                label="Sex:"
                name="sex"
                control={control}
                options={["M", "F"]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Grade Level:"
                name="gradeLevel"
                control={control}
              />
              <MultipleSelect
                label="Course/ Program:"
                name="course/program"
                control={control}
                options={["", ""]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="L-Raw:" name="l-raw" control={control} />
              <TextFields label="L - S:" name="l - s" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="L - VI:" name="l - vi" control={control} />
              <TextFields label="Q - Raw:" name="q - raw" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="Q - %:" name="q - %" control={control} />
              <TextFields label="Q - S:" name="q - s" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="SQ - VI:" name="sq - vi" control={control} />
              <TextFields label="T - Raw:" name="t - raw" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="T - %:" name="t - %" control={control} />
              <TextFields label="T - S:" name="t - s" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="T - VI:" name="t - vi" control={control} />
              <TextFields
                label="Kiersey Temperament Sorter:"
                name="kiersey Temperament Sorter"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="Written:" name="written" control={control} />
              <TextFields
                label="Negotiating Persuading:"
                name="negotiating persuading"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Verbal Communication:"
                name="verbal communication"
                control={control}
              />
              <TextFields label="Co-op:" name="co-op" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Investigating Analyzing:"
                name="investigating analyzing"
                control={control}
              />
              <TextFields
                label="Leadership:"
                name="leadership"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Planning Organizing:"
                name="planning organizing"
                control={control}
              />
              <TextFields label="Numeracy:" name="numeracy" control={control} />
            </Stack>
          </Stack>

          {/* Submit Button */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              sx={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default FourthYear;
