import React from "react";
import {
  Container,
  Stack,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import SingleSelect from "./AllForms/Forms/SingleSelect";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        {/* Dashboard title */}
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>

        {/* Existing content */}
        <Stack
          direction={{ xs: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium and up
          spacing={8}
          alignItems="center"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }} // Stack vertically on extra small screens, horizontally on small screens and up
            spacing={4}
            alignItems="center"
            justifyContent={{ xs: "center" }} // Center on extra small screens, align to the end on small screens and up
            flexShrink={0}
            width="100%"
          >
            <Card sx={{ width: "200px", mb: { xs: 2, sm: 0 } }}>
              <CardContent>
                <Typography variant="h6" fontSize="0.875rem" sx={{fontSize:"15px", fontWeight:"bold"}}>
                  ACADEMIC YEAR
                </Typography>
                <SingleSelect></SingleSelect>
              </CardContent>
            </Card>
            <Card sx={{ width: "200px", mb: { xs: 2, sm: 0 } }}>
              <CardContent>
                <Typography variant="h6" fontSize="0.875rem" sx={{fontSize:"15px", fontWeight:"bold"}}>
                   NO. OF STUDENTS
                </Typography>
                <TextField></TextField>
              </CardContent>
            </Card>
          </Stack>
        </Stack>

        {/* New cards */}
        <Stack
          direction={{ xs: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium and up
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Card sx={{ width: "200px", mb: { xs: 2, md: 0 } }}>
            <CardContent>
              <Typography variant="h6" fontSize="0.875rem">
                Card 1
              </Typography>
              <Typography variant="body2" fontSize="0.75rem">
                Content for Card 1 goes here.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "200px", mb: { xs: 2, md: 0 } }}>
            <CardContent>
              <Typography variant="h6" fontSize="0.875rem">
                Card 2
              </Typography>
              <Typography variant="body2" fontSize="0.75rem">
                Content for Card 2 goes here.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "200px", mb: { xs: 2, md: 0 } }}>
            <CardContent>
              <Typography variant="h6" fontSize="0.875rem">
                Card 3
              </Typography>
              <Typography variant="body2" fontSize="0.75rem">
                Content for Card 3 goes here.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "200px", mb: { xs: 2, md: 0 } }}>
            <CardContent>
              <Typography variant="h6" fontSize="0.875rem">
                Card 4
              </Typography>
              <Typography variant="body2" fontSize="0.75rem">
                Content for Card 4 goes here.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
