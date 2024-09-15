import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Music from "./components/Music/Music";
import MusicReviews from "./components/Music-Reviews/MusicReviews";
import Poems from "./components/Poems/Poems";
import Shoots from "./components/Shoots/Shoots";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music-reviews" element={<MusicReviews />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/shoots" element={<Shoots />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
