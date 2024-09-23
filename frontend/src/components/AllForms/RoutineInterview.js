import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  IconButton,
  TextField
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

      {/* Two-column layout */}
      <Stack direction="row" spacing={3}>
        <Stack spacing={6} sx={{ flex: 1 }}>
          {/* Input for Name */}
          <TextField
            label="Name"
            name="name"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />

          {/* Input for Grade */}
          <TextField
            label="Grade"
            name="grade"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Stack>

        <Stack spacing={6} sx={{ flex: 1 }}>
          {/* Input for Section */}
          <TextField
            label="Section"
            name="section"
            control={control}
            variant="outlined"
            sx={{ width: "100%" }}
          />

          {/* Input for Date */}
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
        PERSONAL SOCIAL DEVELOPMENT
      </Typography>
      <Stack spacing={2}>
        <MultipleSelect
          name="categories"
          control={control}
          label="Problems Encountered:"
          options={[
            "Lack of Quality Time",
            "Parental Pressure",
            "Sibling Rivalry",
            "Finacial Discomfort",
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
          name="details"
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
        FRIENDS/ PEERS/ INTERPERSONAL RELATIONSHIP
      </Typography>
      <Stack spacing={2}>
        <MultipleSelect
          name="categories"
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
          name="details"
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
        PERSONAL & HEALTH
      </Typography>
      <Stack spacing={2}>
        <MultipleSelect
          name="categories"
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
          name="details"
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
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        ACADEMIC DEVELOPMENT
      </Typography>
      <Stack spacing={2}>
        <MultipleSelect
          name="categories"
          control={control}
          label="Problems Encountered:"
          options={[
            "Failing Marks",
            "Misbehaviour",
            "Transition to School Life",
            "Learning Difficulties",
            "Low Motivation",
            "Teachers",
            "Laziness",
            "Difficulties Subjects",
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
          name="details"
          control={control}
          sx={{ width: "100%" }}
        />
      </Box>
    </Stack>
  </Box>
);

const PageSix = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        CAREER DEVELOPMENT
      </Typography>
      <Stack spacing={2}>
        <MultipleSelect
          name="categories"
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
          name="details"
          control={control}
          sx={{ width: "100%" }}
        />
      </Box>
    </Stack>
  </Box>
);

const PageSeven = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={2}>
        <MultilineTextFields
          label="General Impression/ Counselor's Remarks:"
          name="counselorRemark"
          control={control}
          sx={{ width: "100%" }}
        />
      </Stack>
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginTop: 2, fontWeight: "bold" }}
      >
        Recommendation/s:
      </Typography>
      
      {/* Checkboxes for Recommendations */}
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        {['For Follow-up', 'Conference with parent/guardian', 'Conference with adviser/subject teachers', 'For Assessment'].map((label, index) => (
          <CheckboxLabels
            key={index}
            control={control}
            name={`recommendation${index + 1}`}
            label={label}
          />
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckboxLabels
            control={control}
            name="recommendation5"
            label="Others:"
          />
          <TextField
            name="othersRemark"
            control={control}
            variant="standard"
            placeholder=""
            sx={{ ml: 1 }} // Margin left for spacing
          />
        </Box>
      </Box>

      {/* New TextField for Guidance Associate/Date */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mt: 2 }}>
        <TextField
          name="guidanceAssociateDate"
          control={control}
          variant="standard"
          sx={{ width: 'auto', mb: 1 }} // Margin bottom for spacing
        />
        <Typography
          variant="body2"
          sx={{ color: "#3f3f3f", fontWeight: "bold" }}
        >
          Guidance Associate/Date
        </Typography>
      </Box>
    </Stack>
  </Box>
);


const RoutineInterview = () => {
  const { control } = useForm();
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 7)); // Set the maximum page number to 6
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
        margin: "auto", // This centers the Paper horizontally
        mt: 4, // Margin top
        mb: 4, // Margin bottom (same value as mt)
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
      {page === 6 && <PageSix control={control} />}
      {page === 7 && <PageSeven control={control} />}

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: 4 }}
      >
        <IconButton onClick={handleBack} disabled={page === 1}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} disabled={page === 7}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default RoutineInterview;
