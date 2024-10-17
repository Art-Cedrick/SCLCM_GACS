import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  TextField
} from "@mui/material";
import { useForm } from "react-hook-form";
import SingleSelect from "./Forms/SingleSelect"; // Ensure this path is correct

const Grade11 = () => {
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
          Grade 11
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
              <TextField
                label="Student Name:"
                name="name"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField label="Age:" name="age" control={control} />
              <SingleSelect
                label="Sex:"
                name="sex"
                control={control}
                options={["M", "F"]}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Grade Level:"
                name="gradeLevel"
                control={control}
              />
              <SingleSelect
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
              <TextField label="Top 1:" name="top 1" control={control} />
              <TextField label="Top 2:" name="top 2" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField label="Top 3:" name="top 3" control={control} />
              <TextField label="Warmth:" name="warmth" control={control} />
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Reasoning:"
                name="reasoning"
                control={control}
              />
              <TextField label="Emotion:" name="emotion" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Dominance:"
                name="dominance"
                control={control}
              />
              <TextField
                label="Liveliness:"
                name="liveliness"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Rule - Consciousness:"
                name="rule - consciousness"
                control={control}
              />
              <TextField
                label="Social Boldness:"
                name="social boldness"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Sensitivity:"
                name="sensitivity"
                control={control}
              />
              <TextField
                label="Vigilance:"
                name="vigilance"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField label="Abstract:" name="Abstract" control={control} />
              <TextField
                label="Privateness:"
                name="privateness"
                control={control}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Apprehension:"
                name="apprehension"
                control={control}
              />
              <TextField label="Openness:" name="openness" control={control} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Self Reliance:"
                name="self reliance"
                control={control}
              />
              <TextField
                label="Pefectionism:"
                name="perfectionism"
                control={control}
              />
              <TextField label="Tension:" name="tension" control={control} />
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

export default Grade11;
