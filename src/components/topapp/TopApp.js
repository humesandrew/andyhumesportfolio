import * as React from "react";
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
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import "./topapp.css";
import resumeData from "../../resumeData.js";

const emailBtn = function () {
  window.open("mailto:humes.andrew@gmail.com");
};
const linkedInBtn = function () {
  window.open("https://www.linkedin.com/in/andy-humes-72075559/");
};
const gitHubBtn = function () {
  window.open("https://github.com/humesandrew/");
};
const resumeBtn = function () {
  window.open(resumeData.resume);
};

const pages = ["Bio", "Works", "Credentials"];

const TopApp = () => {
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
    <div>
      <AppBar position="fixed" sx={{ opacity: "90%" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Andy Humes - Software Developer
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Navigation">
                <IconButton
                  size="large"
                  aria-label="navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href={`#${page}`}
                      sx={{ textDecoration: "none" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Andy Humes
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="linkBtns"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                  href={`#${page}`}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box className="rightBox" sx={{ flexGrow: 0 }}>
              <Tooltip title="Email me">
                <EmailIcon
                  className="email"
                  onClick={emailBtn}
                  sx={{ p: 0 }}
                ></EmailIcon>
              </Tooltip>
              <Tooltip title="LinkedIn profile">
                <LinkedInIcon
                  className="linkedIn"
                  onClick={linkedInBtn}
                  sx={{ p: 0 }}
                ></LinkedInIcon>
              </Tooltip>
              <Tooltip title="GitHub profile">
                <GitHubIcon
                  className="gitHub"
                  onClick={gitHubBtn}
                  sx={{ p: 0 }}
                ></GitHubIcon>
              </Tooltip>
              <Tooltip title="Resume">
                <DescriptionIcon
                  className="resume"
                  onClick={resumeBtn}
                  sx={{ p: 0 }}
                ></DescriptionIcon>
              </Tooltip>
              <Tooltip title="Navigation">
                <IconButton
                  sx={{
                    display: { p: 0, xs: "none", md: "flex" },
                  }}
                  className="andy"
                  onClick={handleOpenUserMenu}
                >
                  <Avatar alt="Andy Humes Portfolio" src={resumeData.image2} />
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href={`#${page}`}
                      sx={{ textDecoration: "none" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default TopApp;
