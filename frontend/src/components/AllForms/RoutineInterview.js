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
import MultilineTextFields from "./Forms/MultilineTextField";
import MultipleSelect from "./Forms/MultipleSelect";
import CheckboxLabels from "./Forms/CheckboxLabels";
import { useForm } from "react-hook-form";

const PageOne = ({ control }) => (
  <Box>
    <Stack spacing={6}>
      <Divider sx={{ my: 3 }} />
      <Stack direction="row" spacing={3}>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <TextField
            label="Name"
            name="name"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            label="Grade"
            name="grade"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <TextField
            label="Section"
            name="section"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            control={control}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "100%" }}
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
        <MultipleSelect
          name="healthCategories"
          control={control}
          label="Problems Encountered:"
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <MultilineTextFields
          label="Details:"
          name="healthDetails"
          control={control}
          sx={{ width: "100%" }}
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
        <MultipleSelect
          name="friendsCategories"
          control={control}
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <MultilineTextFields
          label="Details:"
          name="friendsDetails"
          control={control}
          sx={{ width: "100%" }}
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
        <MultipleSelect
          name="socialDevelopmentCategories"
          control={control}
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <MultilineTextFields
          label="Details:"
          name="socialDevelopmentDetails"
          control={control}
          sx={{ width: "100%" }}
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
        <MultipleSelect
          name="academicCategories"
          control={control}
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <MultilineTextFields
          label="Details:"
          name="academicDetails"
          control={control}
          sx={{ width: "100%" }}
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
        <MultipleSelect
          name="careerCategories"
          control={control}
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <MultilineTextFields
          label="Details:"
          name="careerDetails"
          control={control}
          sx={{ width: "100%" }}
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
        <MultilineTextFields
          name="counselorRemark"
          control={control}
          sx={{ width: "100%" }}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        {[
          "For Follow-up",
          "Conference with parent/guardian",
          "Conference with adviser/subject teachers",
          "For Assessment",
        ].map((label, index) => (
          <CheckboxLabels
            key={index}
            control={control}
            name={`recommendation${index + 1}`}
            label={label}
          />
        ))}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckboxLabels
            control={control}
            name="recommendation5"
            label="Others:"
          />
          <TextField
            name="otherRecommendationDetails"
            control={control}
            variant="standard"
            sx={{ width: "200px" }}
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
          color="primary"
          onClick={() => {
            /* handle submit logic */
          }}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  </Box>
);

const RoutineInterview = () => {
  const { control } = useForm();
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 5)); // Maximum page remains 5
  };

  const handleBack = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
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
  );
};

export default RoutineInterview;
