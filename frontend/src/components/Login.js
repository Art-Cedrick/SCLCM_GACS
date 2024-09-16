import React, { useState } from "react";
import axios from "axios"; // Import Axios
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
  Divider,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomEmailField({ email, setEmail }) {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Username"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      SlotProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
      variant="outlined"
      InputLabelProps={{
        required: false, // Remove the asterisk by setting to false
      }}
    />
  );
}

function CustomPasswordField({ password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make the Axios POST request to your backend login API
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username: email,
        password: password,
      });

      // Store the token and role in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      // Handle redirect based on role
      if (response.data.role === "admin") {
        window.location.href = "/admin-dashboard"; // Example redirect
      } else {
        window.location.href = "/user-dashboard"; // Example redirect
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Use handleSubmit here
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Sign In
      </Typography>
      <Divider
        sx={{
          width: "100%",
          mb: 5,
          bgcolor: "skyblue",
          height: "2px",
        }}
      />
      <CustomEmailField email={email} setEmail={setEmail} />
      <CustomPasswordField password={password} setPassword={setPassword} />
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
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
          sx={{ mr: 8 }}
        />
        <ForgotPasswordLink />
      </FormGroup>
      <CustomButton />
    </Box>
  );
}

export default function SlotsSignIn() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        px: 2,
        backgroundColor: "background.paper",
        border: `1px solid`,
        borderRadius: "8px",
        boxShadow: 3,
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src="your-image-url-here"
        alt="Auth Header"
        sx={{
          width: "100%",
          height: "auto",
          mb: 10,
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          backgroundColor: "background.default",
          borderRadius: "20px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid skyblue",
        }}
      >
        <CustomSignInForm />
      </Box>
    </Container>
  );
}
