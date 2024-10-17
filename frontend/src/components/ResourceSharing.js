import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  IconButton,
  TextField
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  AttachFile as AttachFileIcon,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";

const ResourceSharing = () => {
  const { control, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef] = useState(null);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("Resized");
    };

    if (!elementRef) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(() => {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(handleResize, 100);
      });
    });

    resizeObserver.observe(elementRef);

    return () => {
      resizeObserver.unobserve(elementRef);
      clearTimeout(window.resizeTimeout);
    };
  }, [elementRef]);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send to an API)
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h7"
            className="resource-title"
            sx={{ fontWeight: "bold" }}
          >
            RESOURCE SHARING
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton onClick={toggleVisibility}>
              <AddIcon />
            </IconButton>
            <TextField
              control={control}
              name="search"
              placeholder="Search..."
              sx={{ 
                marginRight: 1, 
                height: '30px', // Adjust height
                '& input': { 
                  padding: '5px', // Adjust padding for input
                  lineHeight: '1.2' // Adjust line height
                } 
              }} 
            />
            <IconButton size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>

        {isVisible && (
          <>
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                p: 2,
                mb: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Narrative Report
                </Typography>
                <Typography className="report-date">
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </Typography>
              </Stack>
            </Box>

            <Box
              className="form-section"
              mt={2}
              sx={{ border: "1px solid #ddd", borderRadius: "10px", p: 2 }}
            >
              <Box className="box" sx={{ mb: 2 }}>
                <Box display="flex" alignItems="flex-start">
                  <TextField
                    control={control}
                    name="title"
                    label="Title:"
                    sx={{ mb: 1, width: "300px" }} // Set width to 300px
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  sx={{ mt: 1 }}
                >
                  <IconButton size="small">
                    <AttachFileIcon fontSize="small" />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 1 }}
                    size="small" // Make the button smaller
                    onClick={handleSubmit(onSubmit)}
                  >
                    Post
                  </Button>
                </Box>
              </Box>

              <TextField
                control={control}
                name="content" // Update the name as needed
                label="Content"
                multiline
                rows={5}
                sx={{ mb: 2, width: '100%'}}
              />
            </Box>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default ResourceSharing;
