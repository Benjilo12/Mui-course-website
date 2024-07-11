import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import close from "../../assets/close.svg";

import Navbar from "../Navbar/Navbar";

//if the name of the component correspond with the mui compn use Mui to make a differnce
function Drawer({ open, onClose }) {
  return (
    <MuiDrawer
      anchor={"left"}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: "100%" }, zIndez: 4 }}
    >
      <Box sx={{ p: "20px" }}>
        <IconButton onClick={onClose} sx={{ p: 0 }}>
          <Box component="img" src={close} />
        </IconButton>
      </Box>
      <Box sx={{ mt: "24px" }}>
        <Navbar />
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
