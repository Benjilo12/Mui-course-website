import Box from "@mui/material/Box";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";

function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </Box>
  );
}

export default Layout;
