import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

const Home = lazy(() => import("../pages/Home"));
const Error = lazy(() => import("../components/common/Error"));
const HooksMain = lazy(() => import("../components/demo/HooksMain"));
const LifeCycleMain = lazy(() => import("../components/demo/LifeCycleMain"));

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
          />
          <Route
            exact
            path="/home"
            element={
              <Suspense fallback={"Loading"}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/demo/hooks"
            element={
              <Suspense fallback={"Loading"}>
                <HooksMain />
              </Suspense>
            }
          />
          <Route
            exact
            path="/demo/life-cycle"
            element={
              <Suspense fallback={"Loading"}>
                <LifeCycleMain />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={"Page Not Found"}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
export default PageRoute;
