import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";
import CourseDetailsScreen from "./components/Screens/CourseDetailsScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path={"/course-details"} element={<CourseDetailsScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
