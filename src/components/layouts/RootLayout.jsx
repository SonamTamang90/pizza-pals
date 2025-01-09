import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
