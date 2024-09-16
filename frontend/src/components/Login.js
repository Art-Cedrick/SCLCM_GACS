import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Link,
  Container,
  Box,
  useTheme,
  Divider, // Import Divider
  Typography, // Import Typography
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AppProvider } from "@toolpad/core";

function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Username"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle fontSize="inherit" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(prev => !prev);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined" size="small" sx={{ my: 2 }}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        autoComplete="new-password" // Disable autofill for this field
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      Sign In
    </Button>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/" variant="body2">
      Forgot password?
    </Link>
  );
}

function CustomSignInForm() {
  const [rememberMe, setRememberMe] = React.useState(true);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Full width for better responsiveness
        padding: "16px", // Add padding for better spacing
        borderRadius: "8px", // Optional: rounded corners
      }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Sign In
      </Typography>
      <Divider
        sx={{
          width: "100%",
          mb: 5,
          bgcolor: "skyblue", // Change divider color to sky blue
          height: "2px", // Increase the thickness of the divider
        }}
      />
      <CustomEmailField />
      <CustomPasswordField />
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2, // Margin top
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              name="rememberMe"
              color="primary"
            />
          }
          label="Remember me"
          sx={{ mr: 8 }} // Margin right to add space between checkbox and link
        />
        <ForgotPasswordLink />
      </FormGroup>
      <CustomButton />
    </Box>
  );
}

export default function SlotsSignIn() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          px: 2, // Optional: add horizontal padding
          backgroundColor: "background.paper", // Set to theme background color
          border: `1px solid ${theme.palette.divider}`, // Border color
          borderRadius: "8px", // Rounded corners
          boxShadow: 3, // Shadow for depth
          padding: "20px", // Padding inside the container
        }}
      >
        <Box
          component="img"
          src="your-image-url-here" // Replace with your image URL
          alt="Auth Header"
          sx={{
            width: "100%",
            height: "auto",
            mb: 10, // Margin bottom to separate image from the form box
          }}
        />
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px", // Max width for the box
            padding: "10px", // Adjust padding inside the box
            backgroundColor: "background.default", // Background color of the box
            borderRadius: "20px", // Rounded corners
            minHeight: "300px", // Adjust the height of the box
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Distribute space between elements
            border: "2px solid skyblue", // Set the border color to sky blue
          }}
        >
          <CustomSignInForm />
        </Box>
      </Container>
    </AppProvider>
  );
}
