import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Music from "./components/Music/Music";
import MusicReviews from "./components/Music-Reviews/MusicReviews";
import Poems from "./components/Poems/Poems";
import Shoots from "./components/Shoots/Shoots";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function LocationProvider({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <Routes location={location} key={location.key}>
      <Route index element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/music" element={<Music />}></Route>
      <Route path="/music-reviews" element={<MusicReviews />}></Route>
      <Route path="/poems" element={<Poems />}></Route>
      <Route path="/shoots" element={<Shoots />}></Route>
    </Routes>
  );
}
function App() {
  return (
    // <>
    //   <BrowserRouter>
    //     {/* <AnimatePresence>
    //       <Navbar />
    //       <Routes>
    //         <Route index element={<Home />}></Route>
    //         <Route path="/contact" element={<Contact />}></Route>
    //         <Route path="/music" element={<Music />}></Route>
    //         <Route path="/music-reviews" element={<MusicReviews />}></Route>
    //         <Route path="/poems" element={<Poems />}></Route>
    //         <Route path="/shoots" element={<Shoots />}></Route>
    //       </Routes>
    //     </AnimatePresence> */}
    //   </BrowserRouter>
    // </>
    <>
      <BrowserRouter>
        <Navbar />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
