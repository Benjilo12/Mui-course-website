import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";
import CourseDetailsScreen from "./components/Screens/CourseDetailsScreen";
import FeaturedCoursesScreen from "./components/Screens/FeaturedCoursesScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path={"/course-details"} element={<CourseDetailsScreen />} />
          <Route
            path={"/currently-featured"}
            element={<FeaturedCoursesScreen />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
