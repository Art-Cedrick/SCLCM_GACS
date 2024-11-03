import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardContent,
  Stack,
  TextField,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SingleSelect from "./AllForms/Forms/SingleSelect";

const SCLCMGUIDANCECLASSEVALUATION = () => {
  const { control, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          WHAT DO YOU THINK OF WHAT WE DID TODAY?
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
            {/* First Row: Name, Grade, Section, and Date */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Name"
                name="name"
                control={control}
                placeholder=""
                sx={{ flex: 1 }}
              />
              <SingleSelect
                label="Grade Level"
                options={["Grade 6", "Grade 7", "Garde 8"]}
                sx={{ flex: 1 }}
                {...register("grade")}
              />
              <SingleSelect
                label="Section"
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
                sx={{ flex: 1 }}
                {...register("section")}
              />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Question Section */}
            <Typography variant="h7" gutterBottom align="left">
              1. How much of the Guidance Class content was new to you?
            </Typography>
            <RadioGroup
              {...register("guidanceContent1")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="none"
                control={<Radio />}
                label="None was new to me"
              />
              <FormControlLabel
                value="some"
                control={<Radio />}
                label="Some were new to me"
              />
              <FormControlLabel
                value="almostAll"
                control={<Radio />}
                label="Almost all was new to me"
              />
              <FormControlLabel
                value="everything"
                control={<Radio />}
                label="Everything was new to me"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              2. Is the Guidance Class important to you?
            </Typography>
            <RadioGroup
              {...register("guidanceContent2")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="not"
                control={<Radio />}
                label="Not at all relevant"
              />
              <FormControlLabel
                value="some"
                control={<Radio />}
                label="Somewhat relevant"
              />
              <FormControlLabel
                value="very"
                control={<Radio />}
                label="Very relevant"
              />
              <FormControlLabel
                value="extremely"
                control={<Radio />}
                label="Extremely relevant"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              3. How easy were the written materials to understand?
            </Typography>
            <RadioGroup
              {...register("guidanceContent3")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="not"
                control={<Radio />}
                label="Not at all easy"
              />
              <FormControlLabel
                value="some"
                control={<Radio />}
                label="Some were easy"
              />
              <FormControlLabel
                value="most"
                control={<Radio />}
                label="Most of it was easy"
              />
              <FormControlLabel
                value="everything"
                control={<Radio />}
                label="Everything was easy"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              4. How effective was the counselor?
            </Typography>
            <RadioGroup
              {...register("guidanceContent4")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="not"
                control={<Radio />}
                label="Not at all effective"
              />
              <FormControlLabel
                value="some"
                control={<Radio />}
                label="Somewhat effective"
              />
              <FormControlLabel
                value="very"
                control={<Radio />}
                label="Very effective"
              />
              <FormControlLabel
                value="extremely"
                control={<Radio />}
                label="Extremely effective"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              5. How efficient do you feel about your ability to put what you
              have learned into practice?
            </Typography>
            <RadioGroup
              {...register("guidanceContent5")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="not"
                control={<Radio />}
                label="Not at all confident"
              />
              <FormControlLabel
                value="some"
                control={<Radio />}
                label="Somewhat confident"
              />
              <FormControlLabel
                value="confident"
                control={<Radio />}
                label="Confident"
              />
              <FormControlLabel
                value="very"
                control={<Radio />}
                label="Very Confident"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              6. What is your overall assessment of the Guidance Class?
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel value="poor" control={<Radio />} label="Poor" />
              <FormControlLabel
                value="satisfactory"
                control={<Radio />}
                label="Satisfactory"
              />
              <FormControlLabel value="good" control={<Radio />} label="Good" />
              <FormControlLabel
                value="excellent"
                control={<Radio />}
                label="Excellent"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              7. What were the two best things about our guidance class today?
            </Typography>
            <TextField
              label=""
              name="q7"
              control={control}
              placeholder=""
              multiline
              rows={2}
              sx={{ flex: 1 }}
            />

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              8. What were the two best things about our guidance class today?
            </Typography>
            <TextField
              label=""
              name="q8"
              control={control}
              placeholder=""
              multiline
              rows={2}
              sx={{ flex: 1 }}
            />

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              9. What would make it better?
            </Typography>
            <TextField
              label=""
              name="q9"
              control={control}
              multiline
              rows={2}
              sx={{ flex: 1 }}
            />

            {/* Submit Button */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ marginTop: 2 }}
            >
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default SCLCMGUIDANCECLASSEVALUATION;
