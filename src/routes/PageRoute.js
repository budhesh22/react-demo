import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Error = lazy(() => import("../components/common/Error"));

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={"Loading"}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/demo/home"
            element={
              <Suspense fallback={"Loading"}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/demo/about"
            element={
              <Suspense fallback={"Loading"}>
                <About />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/demo/contact"
            element={
              <Suspense fallback={"Loading"}>
                <Contact />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={"Page Not Found"}>
              <Error />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default PageRoute;
