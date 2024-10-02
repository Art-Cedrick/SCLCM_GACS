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

const Grade12 = () => {
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
          Grade 9
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
              <TextFields
                label="Student Name:"
                name="student name"
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
                label="Section:"
                name="section"
                control={control}
                options={[
                  "Fatima",
                  "Consolation",
                  "Grace",
                  "Assumption",
                  "Guadalupe",
                  "Good Voyage",
                  "Good Remedy",
                  "Perpetual Help",
                  "Mt. Carmel",
                  "Lourdes",
                  "Pillar / Mercy",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Top 1:"
                name="top 1"
                control={control}
                options={[
                  "Achievement Drive",
                  "Self Confidence",
                  "Assertiveness",
                  "Service Orientation",
                  "Sociability",
                  "Flexibility",
                  "Conscientiousness",
                ]}
              />
              <MultipleSelect
                label="Top 2:"
                name="top 2"
                control={control}
                options={[
                  "Achievement Drive",
                  "Self Confidence",
                  "Assertiveness",
                  "Service Orientation",
                  "Sociability",
                  "Flexibility",
                  "Conscientiousness",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Top 3:"
                name="top 3"
                control={control}
                options={[
                  "Achievement Drive",
                  "Self Confidence",
                  "Assertiveness",
                  "Service Orientation",
                  "Sociability",
                  "Flexibility",
                  "Conscientiousness",
                ]}
              />
              <TextFields label="AD:" name="ad" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="SC:" name="sc" control={control} />
              <TextFields label="Ass:" name="ass" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="SO:" name="so" control={control} />
              <TextFields label="S:" name="s" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="F:" name="f" control={control} />
              <TextFields label="C:" name="c" control={control} />
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

export default Grade12;
