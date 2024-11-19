import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data) => {
    const { username, password, role } = data;

    try {
      const response = await axios.post("http://localhost:8000/register/", {
        username,
        password,
        role,
      });
      alert("User created successfully");
    } catch (error) {
      alert("Error creating user");
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          p: 3,
          borderRadius: 3,
          boxShadow: 5,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backgroundImage: "url(https://source.unsplash.com/random/800x600)", // Optional: Add your background image here
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            width: "100%",
            border:"2px solid skyblue"
            

          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              color: "#333",
            }}
          >
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              {/* Username Field */}
              <Controller
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Username"
                    variant="outlined"
                    fullWidth
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ""}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                    }}
                  />
                )}
              />

              {/* Password Field */}
              <Controller
                name="password"
                control={control}
                defaultValue="" // Explicitly set default value to empty string
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    sx={{
                      borderRadius: "8px",
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="new-password" // Prevent browser from autofilling
                  />
                )}
              />

              {/* Role Selection */}
              <FormControl
                fullWidth
                error={!!errors.role}
                sx={{ borderRadius: "8px" }}
              >
                <InputLabel>Role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue="Student"
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Role"
                      sx={{ borderRadius: "8px" }}
                    >
                      <MenuItem value="Student">Student</MenuItem>
                      <MenuItem value="Counselor">Counselor</MenuItem>
                      <MenuItem value="Psychometrician">
                        Psychometrician
                      </MenuItem>
                    </Select>
                  )}
                />
                {errors.role && (
                  <FormHelperText>{errors.role.message}</FormHelperText>
                )}
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#007bff",
                  "&:hover": { backgroundColor: "#0056b3" },
                  borderRadius: "8px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                 
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
