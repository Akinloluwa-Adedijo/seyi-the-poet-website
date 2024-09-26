import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./components/Contact/Contact";
import Music from "./pages/Music/Music";
import MusicReviews from "./components/Music-Reviews/MusicReviews";
import Poems from "./components/Poems/Poems";
import Shoots from "./components/Shoots/Shoots";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music-reviews" element={<MusicReviews />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/shoots" element={<Shoots />} />
      </Route>
    )
  );
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
