import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotesIcon from "@mui/icons-material/Notes";
import MenuIcon from "@mui/icons-material/Menu";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import file from "./images/file.png"; // Use the exact casing for your logo file

export default function NavBar(props) {
  const { drawerWidth, content } = props;
  const location = useLocation();
  const path = location.pathname;

  const [open, setOpen] = React.useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);

  const changeOpenStatus = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogout = () => {
    // Clear the authentication token and role from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirect to the login page
    window.location.href = "/";
    handleProfileMenuClose(); // Close the profile menu
  };

  const myDrawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/counselor/dashboard"
              selected={"/counselor/dashboard" === path}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)", // Hover effect
                },
                "&.Mui-selected": {
                  backgroundColor: "#1E90FF", // Highlight active link
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"}  primaryTypographyProps={{ sx: {  fontWeight: "bold" } }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/counselor/resourcesharing"
              selected={"/counselor/resourcesharing" === path}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)", // Hover effect
                },
                "&.Mui-selected": {
                  backgroundColor: "#1E90FF", // Highlight active link
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary={"Resource Sharing"} primaryTypographyProps={{ sx: {  fontWeight: "bold" } }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/counselor/forms"
              selected={"/counselor/forms" === path}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)", // Hover effect
                },
                "&.Mui-selected": {
                  backgroundColor: "#1E90FF", // Highlight active link
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Forms"}  primaryTypographyProps={{ sx: {  fontWeight: "bold" } }}/>
            </ListItemButton>
          </ListItem>
        </List>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/counselor/appointment"
            selected={"/counselor/appointment" === path}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)", // Hover effect
              },
              "&.Mui-selected": {
                backgroundColor: "#1E90FF", // Highlight active link
              },
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary={"Appointment"}  primaryTypographyProps={{ sx: {  fontWeight: "bold" } }}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/counselor/records"
            selected={"/counselor/records" === path}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)", // Hover effect
              },
              "&.Mui-selected": {
                backgroundColor: "#1E90FF", // Highlight active link
              },
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary={"Records"}  primaryTypographyProps={{ sx: {  fontWeight: "bold" } }} />
          </ListItemButton>
        </ListItem>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={changeOpenStatus}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={file} alt="file" style={{ width: 40, marginRight: 8 }} />{" "}
          {/* Adjust size as needed */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            Student Center for Life and Career Management
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgba(200, 220, 240, .5)",
          },
        }}
      >
        {myDrawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={changeOpenStatus}
        sx={{
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            
          },
        }}
      >
        {myDrawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
