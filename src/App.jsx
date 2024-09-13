import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Music from "./components/Music/Music";
import MusicReviews from "./components/Music-Reviews/MusicReviews";
import Poems from "./components/Poems/Poems";
import Shoots from "./components/Shoots/Shoots";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/music-reviews" element={<MusicReviews />}></Route>
            <Route path="/poems" element={<Poems />}></Route>
            <Route path="/shoots" element={<Shoots />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
