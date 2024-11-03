import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SingleSelect from "./AllForms/Forms/SingleSelect"; // Ensure this path is correct
import DatePicker from "./AllForms/Forms/DatePicker"; // Adjust the import path as necessary

const Kinder = () => {
  const { control, handleSubmit } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          Kinder
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: "40px",
            borderRadius: "8px",
            backgroundColor: "#f7f9fc",
            minHeight: "50vh",
          }}
        >
          <Stack spacing={2}>
            {/* First Row - Single Column */}
            <Stack direction="column" spacing={2}>
              <TextField
                label="Student Name"
                name="name"
                control={control}
                fullWidth
              />
            </Stack>

            {/* Subsequent Rows - Three Columns */}
            {[
              [
                {
                  label: "Sex",
                  name: "sex",
                  component: SingleSelect,
                  options: ["M", "F"],
                },
                {
                  label: "Date of Birth",
                  name: "dateofbirth",
                  component: DatePicker,
                }, // Updated to use DatePicker
                { label: "Address", name: "address", component: TextField },
              ],
              [
                { label: "Pre GM", name: "pregm", component: TextField },
                { label: "PreSGM", name: "presgm" },
                { label: "PreFM", name: "prefm" },
              ],
              [
                { label: "PreSFM", name: "presfm" },
                { label: "Pre SH", name: "presh" },
                { label: "PreSSH", name: "pressh" },
              ],
              [
                { label: "pre RL", name: "presrl" },
                { label: "pre EL", name: "preel" },
                { label: "PreSEL", name: "presel" },
              ],
              [
                { label: "Pre C", name: "prec" },
                { label: "PreSC", name: "presc" },
                { label: "Pre Scale Sum", name: "prescalesum" },
              ],
              [
                { label: "Pre Standard Score", name: "prestandardscore" },
                { label: "Pre Verbal Int", name: "preverbalint" },
                { label: "Post GM", name: "postgm" },
              ],
              [
                { label: "PostSGM", name: "postsgm" },
                { label: "Post FM", name: "postfm" },
                { label: "PostSFM", name: "postsfm" },
              ],
              [
                { label: "Post SH", name: "postsh" },
                { label: "PostSSH", name: "postssh" },
                { label: "Post RL", name: "Postrl" },
              ],
              [
                { label: "PostSRL", name: "postsrl" },
                { label: "Post EL", name: "postel" },
                { label: "PostSEL", name: "Postsel" },
              ],
              [
                { label: "Post C", name: "postc" },
                { label: "PostSC", name: "postsc" },
                { label: "Post Scale Sum", name: "postscalesum" },
              ],
              [
                { label: "Post Standard Score", name: "poststandardscore" },
                { label: "Post Verbal Int", name: "postverbalint" },
              ],
            ].map((row, rowIndex) => (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                key={rowIndex}
              >
                {row.map((field, index) =>
                  field.component ? (
                    <field.component
                      key={index}
                      label={field.label}
                      name={field.name}
                      control={control}
                      options={field.options}
                      sx={{ flex: 1 }}
                    />
                  ) : (
                    <TextField
                      key={index}
                      label={field.label}
                      name={field.name}
                      control={control}
                      fullWidth
                      sx={{ flex: 1 }}
                    />
                  )
                )}
              </Stack>
            ))}
          </Stack>

          {/* Submit Button */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              sx={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Kinder;
