import Feedback from "./Feedback";
import Navbar from "./Navbar";

import Player from "./Player";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsFeedbackModalOpen(true);
  };
  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };
  return (
    <>
      <Navbar handleClickOpen={handleClickOpen} />
      <main>
        <Outlet />
      </main>
      <Feedback
        isFeedbackModalOpen={isFeedbackModalOpen}
        handleClose={handleClose}
      />
      <Player />
    </>
  );
};

export default Layout;
