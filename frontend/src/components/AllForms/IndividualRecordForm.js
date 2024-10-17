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
import { useForm, Controller } from "react-hook-form";
import SingleSelect from './Forms/SingleSelect';
import AxiosInstance from "./Axios";

const IndividualRecordForm = () => {

  const defaultValues = {
    lastname: '',
    firstname: '',
    middlename: '',
    year: '',
    section: '',
    completeAddress: '',
    fatherName: '',
    fatherOccupation: '',
    fatherContactNumber: '',
    fatherEmailAddress: '',
    motherName: '',
    motherOccupation: '',
    motherContactNumber: '',
    motherEmailAddress: '',
    parents: '',
    living_with: '',
    relationship: '',
    club: '',
  }

  const { control, handleSubmit, reset, setValue } = useForm({defaultValues:defaultValues});

  const submission = (data) => {
    AxiosInstance.post(`/individual_record_form/`, {
      lastname: data.lastname,
      firstname: data.firstname,
      middlename: data.middlename,
      year: data.year,
      section: data.section,
      completeAddress: data.completeAddress,
      fatherName: data.fatherName,
      fatherOccupation: data.fatherOccupation,
      fatherContactNumber: data.fatherContactNumber,
      fatherEmailAddress: data.fatherEmailAddress,
      motherName: data.motherName,
      motherOccupation: data.motherOccupation,
      motherContactNumber: data.motherContactNumber,
      motherEmailAddress: data.motherEmailAddress,
      parents: data.parents,
      living_with: data.living_with,
      relationship: data.relationship,
      club: data.club,
    }).then(response => {
      console.log("Data submitted successfully:", response.data);
      reset(); // Reset form after successful submission
    })
    .catch(error => {
      console.error("Error submitting data:", error);
    });
  }

  return (
    <form onSubmit={handleSubmit(submission)} noValidate>
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
              <Controller
                name="lastname"
                control={control}
                render={({field}) => (
              <TextField
                label="Last Name"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="firstname"
                control={control}
                render={({field}) => (  
              <TextField
                label="First Name"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
              )}
              />
              <Controller
                name="middlename"
                control={control}
                render={({field}) => (
              <TextField
                label="Middle Name"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
            </Stack>

            {/* Second Row: Year, Section, and Complete Address */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="year"
                control={control}
                render={({field}) => (
              <TextField
                label="Year"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="section"
                control={control}
                render={({field}) => (  
              <TextField
                label="Section"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="completeAddress"
                control={control}
                render={({field}) => (  
              <TextField
                label="Complete Address"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Father's Information Section */}
            <Typography variant="h7" gutterBottom textAlign={"left"}>
              Father:
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="fatherName"
                control={control}
                render={({field}) => (
              <TextField
                label="Name"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="fatherOccupation"
                control={control}
                render={({field}) => (  
              <TextField
                label="Occupation"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="fatherContactNumber"
                control={control}
                render={({field}) => (
              <TextField
                label="Contact Number"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="fatherEmailAddress"
                control={control}
                render={({field}) => (
              <TextField
                label="Email Address"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Mother's Information Section */}
            <Typography variant="h7" gutterBottom textAlign={"left"}> 
              Mother:
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="motherName"
                control={control}
                render={({field}) => (
              <TextField
                label="Name"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller  
                name="motherOccupation"
                control={control}
                render={({field}) => (
              <TextField
                label="Occupation"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="motherContactNumber"
                control={control}
                render={({field}) => (
              <TextField
                label="Contact Number"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
                />
              <Controller
                name="motherEmailAddress"
                control={control}
                render={({field}) => (  
              <TextField
                label="Email Address"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
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
                <Controller
                  name="parents"
                  control={control}
                  render={({field}) => (
                <SingleSelect
                  label="Parents"
                  {...field}
                  options={[
                    "Living Together",
                    "Separated"
                  ]}
                  sx={{
                    width: "200px", height: "50px"
                  }}
                />
                  )}
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
                  <Controller
                    name="living_with"
                    control={control} 
                    render={({field}) => (
                  <SingleSelect
                    {...field}
                    label="Living With"
                    options= {[
                      "Both Parents",
                      "Mother Only",
                      "Father Only",
                      "Relatives"
                    ]}
                    sx = {{width: "200px", height: "50px"}}
                  />
                    )}
                    />
                </Stack>
              </Stack>
              <Stack direction="column" spacing={2} alignItems="center">
                <Controller
                  name="relationship"
                  control={control}
                  render={({field}) => (
                <TextField
                    {...field}
                    placeholder="Relationship"
                    variant="standard"
                    sx={{ flex: 1 }} // Adjust width as needed
                  />
                  )}
                  />
                </Stack>
            </Stack>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="center" textAlign={"left"}>
            Club Membership / Position Handled:
        </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="club"
                control={control}
                render={({field}) => (
              <TextField
                label="Club membership/posistion handled"
                {...field}
                placeholder=""
                sx={{ flex: 1 }}
              />
                )}
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
                type="submit">
                Submit
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </CardContent>
    </Card>
    </form>
  );
};

export default IndividualRecordForm;