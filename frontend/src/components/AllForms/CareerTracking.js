import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SingleSelect from "./Forms/SingleSelect";
import { useForm, Controller } from "react-hook-form";
import AxiosInstance from "./Axios";

const PageOne = ({ control }) => {
  const subjects = [
    { label: "CLE", name: "cle" },
    { label: "ENGLISH", name: "english" },
    { label: "FILIPINO", name: "filipino" },
    { label: "AP", name: "ap" },
    { label: "SCIENCE", name: "science" },
    { label: "MATH", name: "math" },
    { label: "MAPEH", name: "mapeh" },
    { label: "TLE", name: "tle" },
    { label: "COMPUTER", name: "computer" },
    { label: "FL", name: "fl" },
  ];

  return (
    <Box>
      <Stack spacing={6}>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" sx={{ mb: 3 }}>
          Final Grade Summary
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {subjects.map((subject) => (
            <Controller
              name={subject.name}
              key={subject.name}
              control={control}
              render={({field}) => (
            <TextField
              label={subject.label}
              {...field}
              sx={{ width: "100%" }}
            /> )} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageTwo = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PREFERRED TRACK/STRAND
      </Typography>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Academic Track:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Controller 
          name = "academic_track"
          control={control}
          render={({field}) => (
        <SingleSelect
          label = "Academic Track"
          {...field}
          options = {[
            "STEM",
            "ABM",
            "HUMSS"
          ]}
        /> )} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="other_track"
            control={control}
            render={({field}) => (
          <TextField
            {...field}
            label="Other"
            variant="standard"
            sx={{ width: "200px", marginTop: "-10px" }}
          /> )} />
        </Box>
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Tech-Voc. Track:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Controller 
          name = "tech_voc"
          control={control}
          render={({field}) => (
        <SingleSelect
          label = "Technical Vocation"
          {...field}
          options = {[
            "HE",
            "ICT"
          ]}
        /> )} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="other_techvoc"
            control={control}
            render={({field}) => (
          <TextField
            {...field}
            variant="standard"
            label="Other"
            sx={{ width: "200px", marginTop: "-10px" }}
          /> )} />
        </Box>
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Preferred Course in College:
        <Controller
          name="preferredCourse"
          control={control}
          render={({field}) => (
        <TextField
          {...field}
          variant="standard"
          sx={{ width: "200px", marginLeft: "10px", marginTop: "-10px" }}
        /> )} />
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 2,
        }}
      ></Box>
    </Stack>
  </Box>
);

const PageThree = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        MEDICAL RECORDS:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Controller 
          name = "medical_records"
          control={control}
          render={({field}) => (
        <SingleSelect
          label = "Medical Records"
          {...field}
          options = {[
            "No history of medical illness",
            "With history of medical illness",
          ]}
        /> )} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="specify"
            control={control}
            render={({field}) => (
          <TextField
            label="Specify:"
            {...field}
            variant="standard"
            sx={{ width: "200px" }}
          /> )} />
        </Box>
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        ACADEMIC STATUS:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Controller
          name = "academic_status"
          control={control}
          render={({field}) => (
        <SingleSelect
          label = "Academic Status"
          {...field}
          options = {[
            "Above Average", 
            "Average Student", 
            "Low Average Student"
          ]}
        /> )} />
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 4,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        PSYCHOLOGICAL TEST TAKEN WITH RESULT:
      </Typography>
      <Controller
        name="psych_results"
        control={control}
        render={({field}) => (
      <TextField
        label="Psychological Test Results"
        {...field}
        sx={{ mt: 1 }} // Optional margin for spacing
      /> )} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Stack>
  </Box>
);

const CareerTracking = () => {

  const defaultValues = {
    cle: '',
    english: '',
    filipino: '',
    ap: '',
    science: '',
    math: '',
    mapeh: '',
    tle: '',
    computer: '',
    fl: '',

    academic_track: '',
    other_track: '',
    tech_voc: '',
    other_techvoc: '',
    preferredCourse: '',

    medical_records: '',
    specify: '',
    academic_status: '',
    psych_results: '',
  }

  const { control, handleSubmit, reset } = useForm({defaultValues:defaultValues});

  const submission = (data) => {
    AxiosInstance.post(`/careertracking/`,{
      cle: data.cle,
      english: data.english,
      filipino: data.filipino,
      ap: data.ap,
      science: data.science,
      math: data.math,
      mapeh: data.mapeh,
      tle: data.tle,
      computer: data.computer,
      fl: data.fl,

      academic_track: data.academic_track,
      other_track: data.other_track,
      tech_voc: data.tech_voc,
      other_techvoc: data.other_techvoc,
      preferredCourse: data.preferredCourse,

      medical_records: data.medical_records,
      specify: data.specify,
      academic_status: data.academic_status,
      psych_results: data.psych_results,
    }).then(response => {
      console.log("Data submitted successfully:", response.data);
      reset(); // Reset form after successful submission
    })
    .catch(error => {
      console.error("Error submitting data:", error);
    });
  }

  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 3)); // Maximum page is now 7
  };

  const handleBack = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <form onSubmit={handleSubmit(submission)}>
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: "900px",
        padding: 4,
        backgroundColor: "#fafafa",
        borderRadius: 2,
        margin: "auto",
        mt: 4,
        mb: 4,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#3f3f3f",
          marginBottom: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        CAREER TRACKING
      </Typography>
      {page === 1 && <PageOne control={control} />}
      {page === 2 && <PageTwo control={control} />}
      {page === 3 && <PageThree control={control} />} {/* New Page 7 */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <IconButton onClick={handleBack} disabled={page === 1}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} disabled={page === 3}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
    </form>
  );
};

export default CareerTracking;
