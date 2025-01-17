import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Navbar from "../Navbar/Navbar";
import SearchInput from "../SearchInput/SearchInput";
import Drawer from "../Drawer/Drawer";

import logo_desk from "../../assets/logo.svg";
import logo_mob from "../../assets/logo-mobile.svg";
import shopping_cart from "../../assets/shopping-cart.svg";
import user_info from "../../assets/user-info.svg";
import { useState } from "react";

const styles = {
  appBar: (theme) => ({
    background: `${theme.palette.purpleDark.main}`,
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      Padding: "48px 0",
    },
  }),
};
function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box component="img" src={logo_desk} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Box component="img" src={logo_mob} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              paddingLeft: "80px",
            }}
          >
            <Navbar white />
          </Box>
          <SearchInput />
          <Box sx={{ display: "flex" }}>
            <Tooltip title="cart">
              <IconButton>
                <Box component="img" src={shopping_cart} />
              </IconButton>
            </Tooltip>
            <Tooltip title="user">
              <IconButton sx={{ display: { xs: "none", lg: "block" } }}>
                <Box component="img" src={user_info} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
