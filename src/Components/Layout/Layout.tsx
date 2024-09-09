import { type FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Layout: FC = () => {
  const { pathname } = useLocation();

  const pageVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        scale: 0.95,
        y: 20,
      },
      in: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
      out: {
        opacity: 0,
        scale: 1.05,
        y: -20,
      },
    }),
    []
  );

  const pageTransition = useMemo(
    () => ({
      type: "tween",
      stiffness: 300,
      damping: 30,
      duration: 0.7,
    }),
    []
  );

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Navbar />
          <Outlet />
        </motion.div>
      </div>
    </main>
  );
};

export default Layout;
