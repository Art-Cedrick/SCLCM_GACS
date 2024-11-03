import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SingleSelect from "./AllForms/Forms/SingleSelect"; // Ensure this path is correct

const Grade1 = () => {
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
          Grade 1
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
            {/* First Row - Single Column */}
            <Stack direction="column" spacing={2}>
              <TextField
                label="Student Name"
                name="name"
                control={control}
                fullWidth
              />
            </Stack>

            {/* Subsequent Rows - Three Columns */}
            {[
              [
                { label: "Age", name: "age" },
                {
                  label: "Sex",
                  name: "sex",
                  component: SingleSelect,
                  options: ["M", "F"],
                },
                {
                  label: "Grade Level",
                  name: "gradeLevel",
                  component: SingleSelect,
                  options: ["11", "12"],
                },
              ],
              [
                {
                  label: "Section",
                  name: "section",
                  component: SingleSelect,
                  options: [
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
                  ],
                },
                { label: "Tests", name: "test" },
                { label: "Raw Score", name: "rawscore" },
              ],
              [
                { label: "Percentile", name: "percentile" },
                { label: "Stanine", name: "stanine" },
                { label: "Rating", name: "rating" },
              ],
              [
                { label: "Vocab", name: "vocab" },
                { label: "Letters", name: "letter" },
                { label: "Visual", name: "visual" },
              ],
              [
                { label: "Auditory", name: "auditory" },
                { label: "Comp", name: "comp" },
                { label: "Number", name: "number" },
              ],
              [
                { label: "Writing", name: "writing" },
                { label: "Spelling", name: "spelling" },
                { label: "(Q)Vocab", name: "(q)vocab" },
              ],
              [
                { label: "(Q)Letters", name: "(q)letters" },
                { label: "(Q)Visual", name: "(q)visual" },
                { label: "(Q)Audit", name: "(q)audit" },
              ],
              [
                { label: "(Q)Comp", name: "(q)comp" },
                { label: "(Q)Number", name: "(q)number" },
                { label: "(Q)Writing", name: "(q)writing" },
              ],
              [{ label: "(Q)Spelling", name: "(q)spelling" }],
            ].map((row, rowIndex) => (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                key={rowIndex}
              >
                {row.map((field, index) =>
                  field.component ? (
                    <field.component
                      key={index}
                      label={field.label}
                      name={field.name}
                      control={control}
                      options={field.options}
                      sx={{ flex: 1 }}
                    />
                  ) : (
                    <TextField
                      key={index}
                      label={field.label}
                      name={field.name}
                      control={control}
                      fullWidth
                      sx={{ flex: 1 }}
                    />
                  )
                )}
              </Stack>
            ))}
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

export default Grade1;
