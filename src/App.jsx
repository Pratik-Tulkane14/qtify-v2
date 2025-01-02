import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewAlbums from './components/NewAlbums'
import Songs from './components/Songs'
import TopAlbum from './components/TopAlbum'
import Faq from './components/Faq'
import Player from './components/Player'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TopAlbum/>
      <NewAlbums/>
      <Songs/>
      <Faq/>
      <Player/>
    </>
  )
}

export default App
