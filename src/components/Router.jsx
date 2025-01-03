import Hero from "./Hero";
import TopAlbum from "./TopAlbum";
import NewAlbums from "./NewAlbums";
import Songs from "./Songs";
import Faq from "./Faq";
import Feedback from "./Feedback";
import { useState } from "react";
const Router = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };
  return (
    <>
      <Hero />
      <TopAlbum />
      <NewAlbums />
      <Songs />
      <Faq />
      <Feedback
        isFeedbackModalOpen={isFeedbackModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Router;
