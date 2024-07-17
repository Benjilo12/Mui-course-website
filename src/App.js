import Become from "./components/Become/Become";
import Benefits from "./components/Benefits/Benefits";
import FeaturedCard from "./components/FeaturedCards/FeaturedCard";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCourses />
      <FeaturedCard />
      <Benefits />
      <Become />
    </>
  );
};

export default App;
