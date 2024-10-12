import React, { useState, useMemo } from "react";
import { Box, Typography, Paper, Stack, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MaterialReactTable } from "material-react-table";

// Sample data for multiple students across grades 6 to 10
// (You can add your data back here if needed)

const CareerTracking = () => {
  const [page, setPage] = useState(6); // Start with Page 6

  const gradeColumns = useMemo(
    () => [
      { accessorKey: "student", header: "Student" },
      { accessorKey: "cle", header: "CLE" },
      { accessorKey: "english", header: "English" },
      { accessorKey: "filipino", header: "Filipino" },
      { accessorKey: "ap", header: "AP" },
      { accessorKey: "science", header: "Science" },
      { accessorKey: "math", header: "Math" },
      { accessorKey: "mapeh", header: "MAPEH" },
      { accessorKey: "tle", header: "TLE" },
      { accessorKey: "computer", header: "Computer" },
      { accessorKey: "fl", header: "FL" },
    ],
    []
  );

  const trackColumns = useMemo(
    () => [
      { accessorKey: "student", header: "Student" },
      { accessorKey: "trackType", header: "Track Type" },
      { accessorKey: "trackOptions", header: "Track Options" },
      { accessorKey: "preferredCourses", header: "Preferred Courses" }, // New column added
    ],
    []
  );

  const medicalColumns = useMemo(
    () => [
      { accessorKey: "student", header: "Student" },
      { accessorKey: "medicalRecord", header: "Medical Record" },
      { accessorKey: "medicalCondition", header: "Medical Condition" }, // New column added
    ],
    []
  );

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, 12)); // Adjust max page to 12
  };

  const handleBack = () => {
    setPage((prev) => Math.max(prev - 1, 6)); // Start back from page 6
  };

  // Use actual student data from props or API here
  const currentGradeData = []; // Replace with data for current grade

  // Create unique lists for preferred tracks and medical records
  const uniqueTracks = []; // Replace with unique track data
  const uniqueMedicalRecords = []; // Replace with unique medical record data

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        margin: "auto",
        mt: 4,
        maxWidth: "900px",
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", mb: 4 }}>
        CAREER TRACKING
      </Typography>

      {/* Display Grades Table for Current Page */}
      {page >= 6 && page <= 10 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Final Grade Summary: [Grade {page}]
          </Typography>
          <MaterialReactTable
            columns={gradeColumns}
            data={currentGradeData} // Use data for the current grade
            enableEditing={false}
          />
        </Box>
      )}

      {/* Display Preferred Tracks Table */}
      {page === 11 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Preferred Track/Strand
          </Typography>
          <MaterialReactTable
            columns={trackColumns}
            data={uniqueTracks} // Use updated data for unique tracks
            enableEditing={false}
          />
        </Box>
      )}

      {/* Display Medical Records Table */}
      {page === 12 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Medical Records
          </Typography>
          <MaterialReactTable
            columns={medicalColumns}
            data={uniqueMedicalRecords} // Use updated data for unique medical records
            enableEditing={false}
          />
        </Box>
      )}

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <IconButton onClick={handleBack} disabled={page === 6}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} disabled={page === 12}>
          <ArrowForward />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default CareerTracking;
