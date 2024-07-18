import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./styles";

function Subscribe() {
  return (
    <Box sx={styles.subscribe}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.title}>
          Subscribe and get update <br />
          Evert New Course
        </Typography>
        <Typography sx={styles.text}>
          10k+ students daily learn with Eduvi. Subscribe for new course
        </Typography>
        <Paper component="form" sx={styles.paper}>
          <InputBase
            sx={styles.inputBase}
            placeholder="Enter your email"
            inputProps={{ "aria-label": "enter your email" }}
          />
          <Button sx={styles.btn} aria-label="enter your email">
            Subscribe
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Subscribe;
