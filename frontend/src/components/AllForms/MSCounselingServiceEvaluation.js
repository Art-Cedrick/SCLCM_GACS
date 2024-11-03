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

const MSCounselingServiceEvaluation = () => {
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
                options={["St. Gregory", "St. Alexander", "St. Barachiel", "St. Gabriel", "St. Sealtiel", "St. Raphael", "St. Michael", "St. Uriel", "St. Judiel", "St. Sebastian", "St. Charles", "St. Christopher", "St. Vincent","St. Francis", "St. Benedict", "St. Martin"]}
                sx={{ flex: 1 }}
                {...register("section")}
              />
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Question Section */}
            <Typography variant="h7" gutterBottom align="left">
              1. The time for counselling session is sufficient.
            </Typography>
            <RadioGroup
              {...register("guidanceContent1")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              2. The counseling room is appropriate for the counselling session.
            </Typography>
            <RadioGroup
              {...register("guidanceContent2")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
               <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              3. The counselling session help me widen my perspective in handling my problems/concerns.
            </Typography>
            <RadioGroup
              {...register("guidanceContent3")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
               <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              4. The counselling session help me understand myself better and the situation I am right.
            </Typography>
            <RadioGroup
              {...register("guidanceContent4")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
               <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              5. The counselling session enables me to become a better individual
            </Typography>
            <RadioGroup
              {...register("guidanceContent5")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
               <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              6. The counsellor manifests warm acceptance toward me.
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              7. The counsellor allows me to express my feelings, thoughts ideas freely.
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              8. The counsellor is a good listener.
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              9. The counsellor manifests competence in handling my concerns/problems.
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h7" gutterBottom align="left">
              10. The counsellor is trustworthy and ensures confidentiality.
            </Typography>
            <RadioGroup
              {...register("guidanceContent6")}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="4 = Strongly Agree"
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="3 = Agree"
              />
              <FormControlLabel
                value="Two"
                control={<Radio />}
                label="2 = Disagree"
              />
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="1 = Strongly Disagree"
              />
            </RadioGroup>

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

export default MSCounselingServiceEvaluation;
