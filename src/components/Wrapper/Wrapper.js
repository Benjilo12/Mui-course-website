import Box from "@mui/material/Box";

const styles = {
  Wrapper: {
    maxWidth: "1240px",
    margin: "auto",
    p: "20px",
  },
};

function Wrapper({ children }) {
  return <Box sx={styles.Wrapper}>{children}</Box>;
}

export default Wrapper;
