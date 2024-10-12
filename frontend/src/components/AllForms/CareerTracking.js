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
import CheckboxLabels from "./Forms/CheckboxLabels";
import TextFields from "./Forms/TextFields";
import { useForm } from "react-hook-form";

const PageOne = ({ control }) => {
  const fields = [
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
          Final Grade Summary: [GRADE 6]
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {fields.map((field) => (
            <TextFields
              key={field.name}
              label={field.label}
              name={field.name}
              control={control}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageTwo = ({ control }) => {
  const fields = [
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
          Final Grade Summary: [GRADE 7]
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {fields.map((field) => (
            <TextFields
              key={field.name}
              label={field.label}
              name={field.name}
              control={control}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageThree = ({ control }) => {
  const fields = [
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
          Final Grade Summary: [GRADE 8]
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {fields.map((field) => (
            <TextFields
              key={field.name}
              label={field.label}
              name={field.name}
              control={control}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageFour = ({ control }) => {
  const fields = [
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
          Final Grade Summary: [GRADE 9]
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {fields.map((field) => (
            <TextFields
              key={field.name}
              label={field.label}
              name={field.name}
              control={control}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageFive = ({ control }) => {
  const fields = [
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
          Final Grade Summary: [GRADE 10]
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {fields.map((field) => (
            <TextFields
              key={field.name}
              label={field.label}
              name={field.name}
              control={control}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const PageSix = ({ control }) => (
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
        {["STEM", "HSS", "ABM"].map((label, index) => (
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
            sx={{ width: "200px", marginTop: "-10px" }}
          />
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
        {["HE", "ICT"].map((label, index) => (
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
            sx={{ width: "200px", marginTop: "-10px" }}
          />
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
        <TextField
          name="preferredCourse"
          control={control}
          variant="standard"
          sx={{ width: "200px", marginLeft: "10px", marginTop: "-10px" }}
        />
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

const PageSeven = ({ control }) => (
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
        {[
          "No history of medical illness",
          "With history of medical illness",
        ].map((label, index) => (
          <CheckboxLabels
            key={index}
            control={control}
            name={`recommendation${index + 1}`}
            label={label}
          />
        ))}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Specify:"
            name="specify"
            control={control}
            variant="standard"
            sx={{ width: "200px", marginTop: "-30px" }}
          />
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
        {["Above Average", "Average Student", "Low Average Student"].map(
          (label, index) => (
            <CheckboxLabels
              key={index}
              control={control}
              name={`recommendation${index + 1}`}
              label={label}
            />
          )
        )}
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
      <MultilineTextFields
        label=""
        name="psychologicalTestResults"
        control={control}
        sx={{ mt: 1 }} // Optional margin for spacing
      />

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

const CareerTracking = () => {
  const { control } = useForm();
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 7)); // Maximum page is now 7
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
        CAREER TRACKING
      </Typography>
      {page === 1 && <PageOne control={control} />}
      {page === 2 && <PageTwo control={control} />}
      {page === 3 && <PageThree control={control} />}
      {page === 4 && <PageFour control={control} />}
      {page === 5 && <PageFive control={control} />}
      {page === 6 && <PageSix control={control} />}
      {page === 7 && <PageSeven control={control} />} {/* New Page 7 */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
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

export default CareerTracking;
