import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PageRoute from "./routes/PageRoute";
import { useLocation } from "react-router-dom";

const App = () => {
  const currentLocation = useLocation();
  console.log("currentLocation:", currentLocation.pathname);
  return (
    <>
      <PageRoute />
    </>
  );
};

export default App;
