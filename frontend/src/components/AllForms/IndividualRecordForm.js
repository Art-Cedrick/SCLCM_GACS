import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "./Forms/TextFields"; // Ensure this path is correct
import CheckboxLabels from "./Forms/CheckboxLabels";
import MultipleSelect from "./Forms/MultipleSelect"; // Ensure this path is correct

const IndividualRecordForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          INDIVIDUAL RECORD FORM
        </Typography>

        {/* Stack for School Year Typography and Select */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ marginBottom: 2, justifyContent: "center" }}
        >
          <Typography variant="h7">School Year</Typography>
          <MultipleSelect
            label=""
            value={[]} // Provide initial value or state
            onChange={() => {}} // Handle selection change
            options={[]} // Add your options here
            sx={{ width: "200px" }} // Adjust width to make it smaller
          />
        </Stack>

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

            <Divider sx={{ marginY: 2 }} />

            {/* Father's Information Section */}
            <Typography variant="h7" gutterBottom textAlign={"left"}>
              Father:
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
            <Typography variant="h7" gutterBottom textAlign={"left"}> 
              Mother:
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
              <Typography variant="h7" gutterBottom>
                Parents:
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems="flex-start"
              >
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
              <Typography variant="h7" gutterBottom>
                Living With:
              </Typography>
              <Stack direction="column" spacing={1} alignItems="flex-start">
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckboxLabels
                    control={control}
                    name="bothParents"
                    label="Both Parents"
                  />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckboxLabels
                    control={control}
                    name="motherOnly"
                    label="Mother Only"
                  />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckboxLabels
                    control={control}
                    name="fatherOnly"
                    label="Father Only"
                  />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckboxLabels
                    control={control}
                    name="relatives"
                    label="Relatives:"
                  />
                  <TextField
                    name="relationship"
                    control={control}
                    placeholder="relationship"
                    variant="standard"
                    sx={{ flex: 1 }} // Adjust width as needed
                  />
                </Stack>
              </Stack>
            </Stack>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="center" textAlign={"left"}>
            Club Membership / Position Handled:
        </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextFields
                label=""
                name="Club membership/posistion handled"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              </Stack>

            {/* Submit Button at the end of Living With section, aligned to flex-end */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ marginTop: 10 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default IndividualRecordForm;