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

const Grade8 = () => {
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
          Grade 8
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
                label="Conduct:"
                name="conduct"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
              <MultipleSelect
                label="Self Image:"
                name="self image"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Worry:"
                name="worry"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
              <MultipleSelect
                label="Neg.Perl.Rel:"
                name="neg.perl.rel"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="AntiSocial:"
                name="antisocial"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
              <MultipleSelect
                label="Lie:"
                name="lie"
                control={control}
                options={["Tapat", "Medya - Medya", "Sinungaling "]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MultipleSelect
                label="Problem Index:"
                name="problem index"
                control={control}
                options={["Below Average", "Average", "Above Average "]}
              />
              <TextFields label="C:" name="c" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="SI:" name="si" control={control} />
              <TextFields label="W:" name="w" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="NPR:" name="npr" control={control} />
              <TextFields label="AS:" name="as" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="L:" name="L" control={control} />
              <TextFields label="PI:" name="pi" control={control} />
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

export default Grade8;
