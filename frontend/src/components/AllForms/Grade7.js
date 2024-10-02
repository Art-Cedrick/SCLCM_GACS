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

const Grade7 = () => {
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
          Grade 7
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
                  "Gabriel",
                  "Michael",
                  "Judiel",
                  "Raphael",
                  "Sealtiel",
                  "Uriel",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Total Score:"
                name="tot"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
              <MultipleSelect
                label="Behavioral Adjustment:"
                name="beh"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Intellectual and School Status:"
                name="int"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
              <MultipleSelect
                label="Physical Appearance and Attributes:"
                name="phv"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Freedom from Anxiety:"
                name="Fre"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
              <MultipleSelect
                label="Popularity:"
                name="pop"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Happiness and Satisfaction:"
                name="hap"
                control={control}
                options={[
                  "Low Range",
                  " Low Average Range",
                  "High Average Range ",
                  "High Range",
                ]}
              />
              <TextFields label="PY(Numerical):" name="py" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="BEH (Numerical):"
                name="beh"
                control={control}
              />
              <TextFields
                label=" INT(Numerical):"
                name="int"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="PHY (Numerical):"
                name="phy"
                control={control}
              />
              <TextFields
                label="FRE (Numerical):"
                name="fre"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="POP (Numerical):"
                name="pop"
                control={control}
              />
              <TextFields
                label="HAP (Numerical):"
                name="hap"
                control={control}
              />
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

export default Grade7;
