import CourseDescription from "../CourseDescription/CourseDescription";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Wrapper from "../Wrapper/Wrapper";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import imageslearn from "../../assets/imageslearn.png";
import CurrentStatus from "../CurrentStatus/CurrentStatus";
import CourseDetails from "../CourseDetails/CourseDetails";
import Courses from "../Courses/Courses";
import LearnCourse from "../LearnCourse/LearnCourse";

const styles = {
  wrapper: (theme) => ({
    pt: "24px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      pt: "96px",
      gap: "15px",
    },
  }),
  wrapperLeftBlock: (theme) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: "717px",
    },
  }),
  img: {
    width: "100%",
    minHeight: "395px",
    objectFit: "cover",
  },
};

function CourseDetailsScreen() {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <Breadcrumbs />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.wrapperLeftBlock}>
            <Box component="img" src={imageslearn} sx={styles.img} />
            <CurrentStatus />
            <CourseDescription />
            <LearnCourse />
          </Box>
          <Box>
            <CourseDetails />
            <Courses />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
}

export default CourseDetailsScreen;
