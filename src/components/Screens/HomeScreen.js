import Box from "@mui/material/Box";
import Hero from "../Hero/Hero";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import FeaturedCard from "../FeaturedCards/FeaturedCard";
import Benefits from "../Benefits/Benefits";
import Become from "../Become/Become";

function HomeScreen() {
  return (
    <Box>
      <Hero />
      <FeaturedCourses />
      <FeaturedCard />
      <Benefits />
      <Become />
    </Box>
  );
}

export default HomeScreen;
