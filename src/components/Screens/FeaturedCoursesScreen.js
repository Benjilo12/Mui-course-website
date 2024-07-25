import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Wrapper from "../Wrapper/Wrapper";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CurrentlyFeatured from "../CurentlyFeatured/CurrentlyFeatured";

const styles = {
  Wrapper: (theme) => ({
    gap: "15px",
    [theme.breakpoints.up("md")]: {
      dispaly: "flex",
    },
  }),
};

function FeaturedCoursesScreen() {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <Breadcrumbs />
          <CurrentlyFeatured />
        </Box>
        <Box sx={styles.Wrapper}></Box>
      </Wrapper>
    </Box>
  );
}

export default FeaturedCoursesScreen;
