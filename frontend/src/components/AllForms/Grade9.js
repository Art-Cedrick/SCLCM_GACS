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

const Grade9 = () => {
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
                label="Top 1:"
                name="top 1"
                control={control}
                options={[
                  "Realistic",
                  "Investigative",
                  "Artistic",
                  "Social",
                  "Enterprising",
                  "Conventional",
                ]}
              />
              <MultipleSelect
                label="Top 2:"
                name="top 2"
                control={control}
                options={[
                  "Realistic",
                  "Investigative",
                  "Artistic",
                  "Social",
                  "Enterprising",
                  "Conventional",
                ]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Top 3:"
                name="top 3"
                control={control}
                options={[
                  "Realistic",
                  "Investigative",
                  "Artistic",
                  "Social",
                  "Enterprising",
                  "Conventional",
                ]}
              />
              <MultipleSelect
                label="Self Control:"
                name="self control"
                control={control}
                options={["High", "Low"]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Masculinity-Femininity:"
                name="mas-fem"
                control={control}
                options={["High", "Low"]}
              />
              <MultipleSelect
                label="Status:"
                name="status"
                control={control}
                options={[" ", " ", " "]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Infrequency:"
                name="infrequency"
                control={control}
                options={["High", "Low"]}
              />
              <MultipleSelect
                label="Acquiescence:"
                name="acquiescence"
                control={control}
                options={["High", "Low"]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="R:" name="r" control={control} />
              <TextFields label="I:" name="i" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="A:" name="a" control={control} />
              <TextFields label="S:" name="s" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="E:" name="e" control={control} />
              <TextFields label="C:" name="c" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="Sc:" name="se" control={control} />
              <TextFields label="Mf:" name="mf" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="St:" name="st" control={control} />
              <TextFields label="Inf:" name="inf" control={control} />
              <TextFields label="Ac:" name="ac" control={control} />
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

export default Grade9;
