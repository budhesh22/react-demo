import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));

const PublicLayout = () => {
  return (
    <>
      <Suspense fallback={"Loading"}>
        <Header />
      </Suspense>
      <main className="main-content">
        <Outlet />
      </main>
      <Suspense fallback={"Loading"}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PublicLayout;
