import * as React from "react";
import {AppBar,Box ,Toolbar, Typography,Container }from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";


import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

const links = ["Home", "Education", "Experience", "Projects", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledNavLink = styled(NavLink)`
    &:hover {
      background-color: #a6e1fa;
    }
    &.active {
      font-weight:600;
    }
  `;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#edf2fe",
        boxShadow: "none",
        color: "#001C55",
        padding: "10px 30px",
        marginBottom:"10px"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#001C55" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <StyledNavLink
                  to={`/${link.toLowerCase()}`}
                  key={link}
                  onClick={handleCloseNavMenu}
                  style={{
                    color: "#001C55",
                    display: "flex",
                    padding: "20px",
                    width: "300px",
                    textAlign: "center",
                    justifyContent:"center"
                  }}
                >
                  {link}
                </StyledNavLink>
              ))}
            </Menu>
          </Box>
          {/* ----------------------------------- */}
          <Stack direction="row" spacing={1} flexGrow={1} sx={{alignItems:"center"}}>
            <Typography sx={{ fontSize: "25px" }}>&lt;</Typography>
            <Typography variant="h4" className="name">leen odeh</Typography>
            <Typography sx={{ fontSize: "25px" }}>/&gt;</Typography>
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {links.map((link) => (
              <StyledNavLink
                to={`/${link.toLowerCase()}`}
                key={link}
                onClick={handleCloseNavMenu}
                style={{
                  color: "#001C55",
                  display: "block",
                  padding: "20px",
                }}
              >
                {link}
              </StyledNavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
