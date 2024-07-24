import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import styles from "./styles";

function Breadcrumbs() {
  return (
    <MuiBreadcrumbs sx={styles.breadcrumbs}>
      <Link sx={styles.link}>Home</Link>
      <Link sx={styles.link}>Course</Link>
      <Link sx={styles.link}>Lotem ipsum</Link>
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
