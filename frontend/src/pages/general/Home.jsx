import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

const Reel = ({ item, isActive, onPlay }) => {
  const videoRef = useRef();

  // Pause video when not active
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="reel" onClick={onPlay}>
      {item.videos ? (
        <video
          ref={videoRef}
          className="reel-video"
          src={item.videos}
          muted
          loop
          playsInline
          preload="metadata"
          style={{ background: item.color }}
        />
      ) : (
        <div className="placeholder" style={{ background: item.color }} aria-hidden />
      )}
      <div className="reel-overlay">
        <div className="reel-desc">{item.desc}</div>
        <Link className="reel-button" to={"/food-partner/" + item.foodPartner} aria-label='Visit Store'>Visit Store</Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [reels, setReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
      .then(response => {
        setReels(response.data.foodItems);
      });
  }, []);

  return (
    <div className="reels-root">
      <div className="reels-list">
        {reels.map((r, idx) => (
          <Reel
            key={r._id}
            item={r}
            isActive={idx === activeIndex}
            onPlay={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
