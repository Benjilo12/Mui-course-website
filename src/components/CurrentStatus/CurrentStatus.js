import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import styles from "./styles";

function CurrentStatus() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>current status</Typography>
        <Button disabled>not enrolled</Button>
      </Box>
      <Divider orientation="vertical" sx={styles.divider} />
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>price</Typography>
        <Typography sx={styles.price}>$12</Typography>
      </Box>
      <Divider orientation="vertical" sx={styles.divider} />
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>get started</Typography>
        <Button sx={styles.btn}>take this course</Button>
        <Typography sx={styles.loginLink}>
          Or <Link sx={styles.link}>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default CurrentStatus;
