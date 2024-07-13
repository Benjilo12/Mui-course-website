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
    </>
  );
};

export default App;
