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
import logo from './images/LOGO.jpg'; // Use the exact casing for your logo file

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
      variant="outlined"
      InputLabelProps={{
        required: false,
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

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username: email,
        password: password,
      });

      // Store the token and role in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      // Handle redirect based on role
      if (response.data.role === "counselor") {
        window.location.href = "/counselor";
      } else if (response.data.role === "psychometrician") {
        window.location.href = "/psychometrician";
      } else if (response.data.role === "student") {
        window.location.href = "/student";
      } else {
        console.error("Unknown role:", response.data.role);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "1px",
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
          bgcolor: "#1E90FF",
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
        border: "3px solid #1E90FF",
        borderRadius: "20px",
        boxShadow: 3,
        padding: "20px",
        marginTop: "60px",
      }}
    >
      <Box
        component="img"
        src={logo} // Use the imported logo here
        alt="Auth Header"
        sx={{
          width: "80px", // Set a smaller width for the logo
          height: "auto",
          mb: 2, // Adjust margin as needed
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
          border: "2px solid #1E90FF",
          position: "relative", // Make position relative to avoid shifting
          overflow: "hidden", // Prevent overflow
        }}
      >
        <CustomSignInForm />
      </Box>
    </Container>
  );
}

