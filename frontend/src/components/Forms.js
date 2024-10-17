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
import SingleSelect from "./AllForms/Forms/SingleSelect";
import { useForm, Controller } from "react-hook-form";
import AxiosInstance from "./AllForms/Axios";

const PageOne = ({ control }) => (
  <Box>
    <Stack spacing={6}>
      <Divider sx={{ my: 3 }} />
      <Stack direction="row" spacing={3}>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <Controller
            name="name"
            control={control}
            render={({field}) => (
          <TextField
            {...field}
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
            )}
            />
          <Controller
            name="grade"
            control={control}
            render={({field}) => (
          <TextField
            label="Grade"
            {...field}
            variant="outlined"
            sx={{ width: "100%" }}
          />
            )}
            />
        </Stack>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <Controller
            name="section"
            control={control}
            render={({field}) => (
          <TextField
            label="Section"
            {...field}
            variant="outlined"
            sx={{ width: "100%" }}
          />
            )}
            />
          <Controller
            name="date"
            control={control}
            render={({field}) => (
          <TextField
            label="Date"
            {...field}
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "100%" }}
          />
            )}
            />
        </Stack>
      </Stack>
    </Stack>
  </Box>
);

const PageTwo = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        PERSONAL - SOCIAL DEVELOPMENT (PSD)
      </Typography>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        Family:
      </Typography>
      <Stack spacing={2}>
        <Controller
          control={control}
          name="family_problem"
          render={({field}) => (
        <SingleSelect
          label="Problems Encountered:"
          {...field}
          options={[
            "Lack of Quality Time",
            "Parental Pressure",
            "Sibling Rivalry",
            "Financial Discomfort",
            "Parent-child Misunderstanding",
            "Others",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Controller
          name="family_details"
          control={control}
          render={({field}) => (
        <TextField
          label="Details:"
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        Friends/Peers/Interpersonal Relationship:
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="friends_problems"
          control={control}
          render={({field}) => (
        <SingleSelect
          {...field}
          label="Problems Encountered:"
          options={[
            "Incompatibilities",
            "Adjustment Difficulties",
            "Lack of Communication",
            "Boy-Girl Relationships",
            "Mistrust",
            "Bullying",
            "Peer Pressure",
            "Others",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Controller
          name="friends_details"
          control={control}
          render={({field}) => (
        <TextField
          label="Details:"
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Box>

      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        Personal & Health:
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="health_problem"
          control={control}
          render={({field}) => (
        <SingleSelect
          {...field}
          label="Problems Encountered:"
          options={[
            "Physical Disabilities",
            "Stress",
            "Hospitalization",
            "Gender Confusion",
            "Poor Health",
            "Low Self-Esteem",
            "Psychological Disturbances",
            "Others",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Controller
          name="health_details"
          control={control}
          render={({field}) => (
        <TextField
          label="Details:"
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Box>
    </Stack>
  </Box>
);

const PageThree = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        ACADEMIC DEVELOPMENT (AD)
      </Typography>
      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        Academics/School:
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="academic_problem"
          control={control}
          render={({field}) => (
        <SingleSelect
          {...field}
          label="Problems Encountered:"
          options={[
            "Failing Marks",
            "Misbehavior",
            "Transition to School Life",
            "Learning Difficulties",
            "Low Motivation",
            "Teachers",
            "Laziness",
            "Difficult Subjects",
            "Frequent D.O. Client",
            "Failed to Comply Requirements",
            "Others",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Controller
          name="academic_details"
          control={control}
          render={({field}) => (
        <TextField
          label="Details:"
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Box>
    </Stack>
  </Box>
);

const PageFour = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        CAREER DEVELOPMENT (AC)
      </Typography>
      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        Academics/School:
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="career_problem"
          control={control}
          render={({field}) => (
        <SingleSelect
          {...field}
          label="Problems Encountered:"
          options={[
            "Undecided",
            "No Identified",
            "Confusion",
            "Parent's Choice",
            "Change of Interest",
            "Others",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Controller
          name="career_details"
          control={control}
          render={({field}) => (
        <TextField
          label="Details:"
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Box>
    </Stack>
  </Box>
);

const PageFive = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        GENERAL IMPRESSION/ COUNSELOR'S REMARKS
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="remarks"
          control={control}
          render={({field}) => (
        <TextField
          {...field}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
          )}
          />
      </Stack>
      <Typography
        variant="h7"
        sx={{
          color: "#3f3f3f",
          marginTop: 2,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Recommendations:
      </Typography>
      <Stack spacing={2}>
        <Controller
          name="recommendation"
          control={control}
          render={({field}) => (
        <SingleSelect
          {...field}
          label="Recommendation"
          options={[
            "For Follow-up",
            "Conference with parent/guardian",
            "Conference with adviser/subject teachers",
            "For Assessment",
          ]}
          sx={{ width: "50%" }}
        />
          )}
          />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="other_recommendation"
            control={control}
            render={({field}) => (
          <TextField
            {...field}
            label="Other"
            variant="standard"
            sx={{ width: "200px" }}
          />
            )}
            />
        </Box>
      </Box>
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
          type="submit"
          color="primary">
          Submit
        </Button>
      </Box>
    </Stack>
  </Box>
);

const RoutineInterview = () => {

  const defaultValues = {
    name: '',
    section: '',
    grade: '',
    date: '',
    family_problem: '',
    family_details: '',
    friends_problem: '',
    friends_details: '',
    health_problem: '',
    health_details: '',
    academic_problem: '',
    academic_details: '',
    career_problem: '',
    career_details: '',
    remarks: '',
    recommendation: '',
    other_recommendation: '',
     }

  const { handleSubmit, reset, setValue, control } = useForm({defaultValues:defaultValues});
  const submission = (data) => {
    AxiosInstance.post(`/routine_interview/`,{
      name: data.name,
      section: data.section,
      grade: data.grade,
      date: data.date,
      family_problem: data.family_problem,
      family_details: data.family_details,
      friends_problem: data.friends_problem,
      friends_details: data.friends_details,
      health_problem: data.health_problem,
      health_details: data.health_details,
      academic_problem: data.academic_problem,
      academic_details: data.academic_details,
      career_problem: data.career_problem,
      career_details: data.career_details,
      remarks: data.remarks,
      recommendation: data.recommendation,
      other_recommendation: data.other_recommendation,
    }

    )
  }
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 5)); // Maximum page remains 5
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
        ROUTINE INTERVIEW FORM
      </Typography>

      {page === 1 && <PageOne control={control} />}
      {page === 2 && <PageTwo control={control} />}
      {page === 3 && <PageThree control={control} />}
      {page === 4 && <PageFour control={control} />}
      {page === 5 && <PageFive control={control} />}

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: 4 }}
      >
        <IconButton onClick={handleBack} disabled={page === 1}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} disabled={page === 5}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
    </form>
  );
};

export default RoutineInterview;

