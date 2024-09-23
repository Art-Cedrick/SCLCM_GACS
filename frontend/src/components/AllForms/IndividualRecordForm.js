import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardContent,
  Stack,
  Divider,
  TextField
} from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "./Forms/TextFields"; // Ensure this path is correct
import CheckboxLabels from "./Forms/CheckboxLabels";

const IndividualRecordForm = () => {
  const { control } = useForm();

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          INDIVIDUAL RECORD FORM
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: "40px",
            borderRadius: "8px",
            backgroundColor: "#f7f9fc",
            minHeight: "60vh",
          }}
        >
          <Stack spacing={2}>
            {/* First Row: Last Name, First Name, and Middle Name */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Last Name"
                name="lastname"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="First Name"
                name="firstName"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Middle Name"
                name="middleName"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>

            {/* Second Row: Year, Section, and Complete Address */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Year"
                name="year"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Section"
                name="section"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Complete Address"
                name="completeAddress"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Father's Information Section */}
            <Typography variant="h6" gutterBottom>
              Father
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Name"
                name="fatherName"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Occupation"
                name="fatherOccupation"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Contact Number"
                name="fatherContactNumber"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Email Address"
                name="fatherEmailAddress"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Mother's Information Section */}
            <Typography variant="h6" gutterBottom>
              Mother
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Name"
                name="motherName"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Occupation"
                name="motherOccupation"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label="Contact Number"
                name="motherContactNumber"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <TextFields
                label="Email Address"
                name="motherEmailAddress"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Parents Section */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Typography variant="h6" gutterBottom>
                Parents:
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <CheckboxLabels
                  control={control}
                  name="livingTogether"
                  label="Living Together"
                />
                <CheckboxLabels
                  control={control}
                  name="separated"
                  label="Separated"
                />
              </Stack>
            </Stack>
            <Divider sx={{ marginY: 2 }} />

            {/* Living With Section */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Typography variant="h6" gutterBottom>
                Living With:
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckboxLabels
                  control={control}
                  name="bothParents"
                  label="Both Parents"
                />
                <CheckboxLabels
                  control={control}
                  name="motherOnly"
                  label="Mother Only"
                />
                <CheckboxLabels
                  control={control}
                  name="fatherOnly"
                  label="Father Only"
                />
                <CheckboxLabels
                  control={control}
                  name="relatives"
                  label="Relatives:"
                />
              </Stack>
              <TextField
                name="relationship"
                control={control}
                placeholder="relationship"
                variant="standard"
                sx={{ flex: 1 }} // Adjust width as needed
              />
            </Stack>
            <Divider sx={{ marginY: 2 }} />
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default IndividualRecordForm;
