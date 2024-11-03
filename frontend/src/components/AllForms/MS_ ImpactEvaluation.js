import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Divider,
  Card,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SingleSelect from "./AllForms/Forms/SingleSelect";
import { useForm, Controller } from "react-hook-form";

const PageOne = ({ control }) => (
  <Box>
    <Stack spacing={6}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="Section"
            control={control}
            render={({ field }) => (
              <SingleSelect
                label="Section"
                {...field}
                options={[
                  "St. Gregory",
                  "St. Alexander",
                  "St. Barachiel",
                  "St. Gabriel",
                  "St. Sealtiel",
                  "St. Raphael",
                  "St. Michael",
                  "St. Uriel",
                  "St. Judiel",
                  "St. Sebastian",
                  "St. Charles",
                  "St. Christopher",
                  "St. Vincent",
                  "St. Francis",
                  "St. Benedict",
                  "St. Martin",
                ]}
                sx={{ width: "100%" }}
              />
            )}
          />
        </Stack>
        <Stack spacing={6} sx={{ flex: 1 }}>
          <Controller
            name="gradelevel"
            control={control}
            render={({ field }) => (
              <SingleSelect
                label="Grade Level"
                {...field}
                options={["Grade 6", "Grade 7", "Grade 8"]}
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
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        IMPACT OF COMPREHENSIVE GUIDANCE AND COUNSELING PROGRAM
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        1. My grades improved.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        2. I can easily identify my interest, strength and weaknesses.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        3. I became aware of the world of work
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        4. I finish my school work on time.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        5. I now have a clear career plan.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        6. I become more respectful of other people.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        7. I become more responsible students.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        8. I developed study habits.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        9. I now cooperate with others well.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        10. I have decided on the field of work that i want to go to.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        11. I have realistic caree goals.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        12. I prioritize my studies over other activties.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        13. I can now maintain a good positive relation with others.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        14. I am now adjusted and able to cope with school life.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        15. I became more attentive to my teachers.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        16. I understand the need for self-control and how to appreciate it.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        17. I become aware of my skills and abilities that match with my career
        choice.
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="great" control={<Radio />} label="Great" />
        <FormControlLabel
          value="considerable"
          control={<Radio />}
          label="Considerable"
        />
        <FormControlLabel value="slight" control={<Radio />} label="Slight" />
        <FormControlLabel
          value="notatall"
          control={<Radio />}
          label="Not at All"
        />
      </RadioGroup>
    </Stack>
  </Box>
);

const PageThree = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        CLOSING THOUGHTS
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h7" gutterBottom align="left">
        A. What was the one service or topic of dicussion in SCLCM that was most
        beneficial or helpful to you?
      </Typography>
      <TextField
        label=""
        name="helpful"
        control={control}
        placeholder=""
        multiline
        rows={2}
        sx={{ flex: 1 }}
      />
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        B. Overall, is the SCLCM Program meeting your needs?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="unsure" control={<Radio />} label="Unsure" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        B.1. If YES, how satisfied are you?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          value="verysatisfied"
          control={<Radio />}
          label="Very Satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel
          value="somewhatsatisfied"
          control={<Radio />}
          label="Somewhat Satisfied"
        />
      </RadioGroup>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h7" gutterBottom align="left">
        B.2. If UNSURE or NO, state your reason
      </Typography>
      <TextField
        label=""
        name="B.2"
        control={control}
        placeholder=""
        multiline
        rows={2}
        sx={{ flex: 1 }}
      />
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h7" gutterBottom align="left">
        C. What other activities would you suggest to help improved yourself
        better. (For: Personal/Social, Educational/Academic)
      </Typography>
      <TextField
        label=""
        name="c"
        control={control}
        placeholder=""
        multiline
        rows={2}
        sx={{ flex: 1 }}
      />
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h7" gutterBottom align="left">
        D. What can you recommend to SCLCM to improve its service offered to the
        students.
      </Typography>
      <TextField
        label=""
        name="d"
        control={control}
        placeholder=""
        multiline
        rows={2}
        sx={{ flex: 1 }}
      />
    </Stack>
  </Box>
);

const PageFour = ({ control }) => (
  <Box>
    <Stack spacing={3}>
      <Typography
        variant="h7"
        sx={{ color: "#3f3f3f", marginBottom: 2, fontWeight: "bold" }}
      >
        A. Experience with the School Counselor
      </Typography>
      <Divider sx={{ marginY: 2 }} />

      {/* Radio group questions */}
      <Typography variant="h7" gutterBottom align="left">
        1. Which of the following describe how well you are acquainted with your
        counselor?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          value="idk"
          control={<Radio />}
          label="I don't know his name"
        />
        <FormControlLabel
          value="ik"
          control={<Radio />}
          label="I know his name, but we've never met and talked"
        />
        <FormControlLabel
          value="I've talked"
          control={<Radio />}
          label="I've talked with him about minor matters"
        />
        <FormControlLabel
          value="I've talked 2"
          control={<Radio />}
          label="I've talked to him about some major concerns"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        2. How easy was it to arrange a time to see your counselor?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          value="veryeasy"
          control={<Radio />}
          label="Very Easy"
        />
        <FormControlLabel
          value="prettyeasy"
          control={<Radio />}
          label="Pretty Easy"
        />
        <FormControlLabel
          value="aslightstruggle"
          control={<Radio />}
          label="A slight struggle"
        />
        <FormControlLabel
          value="difficult"
          control={<Radio />}
          label="Difficult"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        3. How helpful was the counselor in your conversation with him?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          value="veryhelpful"
          control={<Radio />}
          label="Very helpful"
        />
        <FormControlLabel value="helpful" control={<Radio />} label="Helpful" />
        <FormControlLabel
          value="somewhat helpful"
          control={<Radio />}
          label="Somewhat helpful"
        />
        <FormControlLabel
          value="nothelpful"
          control={<Radio />}
          label="Not helpful"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h7" gutterBottom align="left">
        4. How comfortable are you talking with your counselor?
      </Typography>
      <RadioGroup sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          value="verycomfortable"
          control={<Radio />}
          label="Very Comfortable"
        />
        <FormControlLabel
          value="comfortable"
          control={<Radio />}
          label="Comfortable"
        />
        <FormControlLabel
          value="somewhatcomfortable"
          control={<Radio />}
          label="Somewhat comfortable"
        />
        <FormControlLabel
          value="veryuncomfortable"
          control={<Radio />}
          label="Very uncomfortable"
        />
      </RadioGroup>

      <Divider sx={{ marginY: 2 }} />

      {/* Submit button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 2,
        }}
      >
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Box>
    </Stack>
  </Box>
);

const MS_ImpactEvaluation = () => {
  const { handleSubmit, control } = useForm();
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 4)); // Adjusted max page to 4
  };

  const handleBack = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Card
      elevation={3}
      sx={{ padding: 2, maxWidth: "900px", margin: "20px auto" }}
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Typography variant="h5" gutterBottom align="center">
          MS_ IMPACT EVALUATION
        </Typography>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            padding: 4,
            backgroundColor: "#f7f9fc",
            borderRadius: 2,
          }}
        >
          {page === 1 && <PageOne control={control} />}
          {page === 2 && <PageTwo control={control} />}
          {page === 3 && <PageThree control={control} />}
          {page === 4 && <PageFour control={control} />}

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: 4 }}
          >
            <IconButton onClick={handleBack} disabled={page === 1}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleNext} disabled={page === 4}>
              <ArrowForward />
            </IconButton>
          </Stack>
        </Paper>
      </form>
    </Card>
  );
};

export default MS_ImpactEvaluation;
