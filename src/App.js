import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";

import "../src/assets/scss/main.scss";
import PageRoute from "./routes/PageRoute";
import { ToastContainer } from "react-toastify";

const App = () => {
  const currentLocation = useLocation();
  console.log("currentLocation:", currentLocation.pathname);
  return (
    <>
      <PageRoute />
      <ToastContainer />
    </>
  );
};

export default App;
