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

const SecondYear = () => {
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
          1st Year
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
                label="Course:"
                name="coures"
                control={control}
                options={["", "", "", "", ""]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="(VI)GSTM:" name="gstm" control={control} />
              <TextFields label="(VI)NT:" name="nt" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="(VI)EPP:" name="epp" control={control} />
              <TextFields label="(VI)W:" name="w" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="(VI)MC:" name="mc" control={control} />
              <TextFields label="(VI)CU/CA:" name="cu/ca" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="(VI)ASM:" name="asm" control={control} />
              <TextFields label="GTSM:" name="c" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="NT:" name="nt" control={control} />
              <TextFields label="EPP:" name="epp" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="W:" name="w" control={control} />
              <TextFields label="MC:" name="mc" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields label="CU/CA:" name="cu/ca" control={control} />
              <TextFields label="ASM:" name="asm" control={control} />
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

export default SecondYear;
