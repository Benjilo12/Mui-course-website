import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import eye from "../../assets/eye.svg";

import styles from "./style";

function FeaturedCourses() {
  return (
    <Box>
      <Box sx={styles.wrapper}>
        <Box sx={styles.content}>
          <Box sx={{ pr: "20px" }}>
            <Typography sx={styles.topTitle}>#Top Courses</Typography>
            <Typography sx={styles.Title}>Featured Courses</Typography>
          </Box>
          <Divider orientation="vertical" sx={styles.divider} />
          <Typography sx={styles.text}>
            Online learning offers a new way to explore subjects you’re
            passionate about.
          </Typography>
        </Box>
        <Button sx={styles.btn}>
          <Box component="img" src={eye} /> View all
        </Button>
      </Box>
    </Box>
  );
}

export default FeaturedCourses;
