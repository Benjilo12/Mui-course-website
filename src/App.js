import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomeScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
