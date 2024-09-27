import { useState } from "react";
import { motion } from "framer-motion";
import Transition from "../../components/Transition/Transition";
import "./musicReviews.css";
import { div } from "framer-motion/client";
const reviews = [
  {
    review_number: 1,
    album_name: "Heis",
    artist: "Rema",
    released: "2024",
    // details: [
    //   {
    src: "/src/assets/review_images/review-1.jpg",
    p1: "Rema has returned with an album that not only cements his place at the top of the new wave of Afrobeats artists but also showcases his unique artistry and bold creativity. From the outset, Rema’s mission is to demonstrate his dominance and versatility within the genre.",
    p2: "The album kicks off with an intensity that is hard to ignore. Rema bursts out of the gates with the energy of a sprinter, setting a pace that is relentless, only easing up near the very end. His choice of beats is as polarizing as it is innovative, with tracks that weave between ethereal vocal deliveries and sharply crafted songwriting. Rema doesn’t just want to be heard—he demands it, asserting his presence as if to say, “I am HIM.” The confidence is palpable and unapologetic.",
    p3: "On the track 'Hehehehe,', Rema repeats with conviction that he 'isn’t going to take it on his hater,' a statement that feels both like a mantra and a warning. Following this, 'Yayo' showcases Rema’s vocal agility and his ability to find unique rhythmic pockets within the music. Here, he boasts of his success—money, hits, women, and cars—delivering each line with a flair that’s almost theatrical.",
    p4: "This album is bold, and it dares to be different. There’s a certain Yeezus-like vibe in its unapologetic nature, a raw authenticity that makes it feel almost outrageous in its self-assurance. Rema’s confidence in his art is admirable, and it’s clear that Mavin Records has given him the creative freedom to explore and push boundaries. This level of artistic control is rare, especially for artists on the rise, and it’s something that has allowed Rema to produce a body of work that is as defining for his career as it is for the current state of Afrobeats.",
    p5: "The timing of this album is crucial. Afrobeats has reached a crossroads, where the soundscape is increasingly dominated by more watered-down iterations of the genre. Rema’s album feels like a necessary disruption, following in the footsteps of groundbreaking albums like 'Made In Lagos' (MMWTV) and 'Superstar'. It’s a reminder of what Afrobeats can be when artists are allowed to experiment and stay true to their roots.",
    p6: "If there’s one critique, it’s the album’s relentless pace. The high BPM and non-stop energy can be overwhelming, with the only reprieve coming in the form of the final two tracks. However, even this ties into the overall concept, creating a listening experience that is as exhausting as it is exhilarating.",
    p7: "In the end, this album isn’t just a collection of songs—it’s a statement. It’s Rema proving a point, and doing so with a style and bravado that is uniquely his.",
    conclusion: "So, to wrap it up: “Siri, play me OZEBA jaare.”",
    //   },
    // ],
  },
];

const TitleVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};
const MusicReviews = () => {
  const [selectedReview, setSelectedReview] = useState({});

  // console.log(selectedReview.details[0].p1);

  return (
    <div className="review-container">
      <div className="review-content">
        <div className="review-title">
          <h2>Music reviews</h2>
        </div>
        <div className="review-headings">
          <p>Album</p>
          <p>Artist</p>
          <p>Year</p>
        </div>
        {reviews.map((rev, index) => {
          return (
            <div
              key={index}
              className="review"
              onClick={() => setSelectedReview(rev)}
            >
              <div className="review-headings">
                <p>{rev.album_name}</p>
                <p>{rev.artist}</p>
                <p>{rev.released}</p>
              </div>

              <div className="review-details">
                <div className="review-image">
                  <img src={rev.src} alt="Album Artwork" />
                </div>
                <div className="review-text">
                  <p>{rev.p1}</p>
                  <p>{rev.p2}</p>
                  <p>{rev.p3}</p>
                  <p>{rev.p4}</p>
                  <p>{rev.p5}</p>
                  <p>{rev.p6}</p>
                  <p>{rev.p7}</p>
                  <p>{rev.p8}</p>
                  <p>{rev.p9}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transition(MusicReviews);
