import React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { NavLink } from "react-router-dom";
import img from "../../../assests/images/header/header_shape.png";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
  },
});

const Header = () => {
  let [user,setUser] = useState(true);
  const pages = [
    {
      name: "Home",
      path: "/",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "Rescue",
      path: "/rescue",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "PetCare",
      path: "/petcare",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "Adoption",
      path: "/adoption",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "Breeder",
      path: "/breeder",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "About",
      path: "/about",
      styles: ({ isActive }) => (isActive ? active : null),
    },
    {
      name: "Contact",
      path: "/contact",
      styles: ({ isActive }) => (isActive ? active : null),
    },
  ];
  const active = {
    color: "orange",
    backgroundColor: "orange",
    fontWeight: "bold",
    margin: "3px",
    borderRadius: "6px",
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "NunitoBold",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#1e4b57",
                textDecoration: "none",
              }}
            >
              CarePetWell
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "NunitoBold",
                        color: "#1e4b57",
                      }}
                    >
                      <NavLink to={page.path} style={page.styles}>
                        {page.name}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "NunitoBold",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CarePetWell
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <NavLink key={index} to={page.path} style={page.styles}>
                  <Button
                    sx={{ my: 2, color: "#1e4b57", display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            {user?
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>:
            <PersonAddIcon/>
            
            }
            
          </Toolbar>
        </Container>
        <img className="cloud_img" src={img} />
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
