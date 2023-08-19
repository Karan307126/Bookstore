import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { MainNavigation } from "./components/MainNavigation";
import loader from "../src/assets/images/loader.gif";
import Navbar from "./pages/common/navBar";
import Footer from "./pages/common/footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <div className="loader-wrapper">
          <img src={loader} alt="loader" />
        </div>
        <MainNavigation />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;