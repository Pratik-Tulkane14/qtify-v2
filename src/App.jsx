import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewAlbums from './components/NewAlbums'
import Songs from './components/Songs'
import TopAlbum from './components/TopAlbum'
import Faq from './components/Faq'
import Player from './components/Player'
import Feedback from './components/Feedback'
import { useState } from 'react'

function App() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsFeedbackModalOpen(true);
  };
  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };
  return (
    <>
      <Navbar handleClickOpen={handleClickOpen}/>
      <Hero/>
      <TopAlbum/>
      <NewAlbums/>
      <Songs/>
      <Faq/>
      <Player/>
      <Feedback isFeedbackModalOpen={isFeedbackModalOpen} handleClose={handleClose}/>
    </>
  )
}

export default App
