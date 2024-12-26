import React, { useState } from "react";
import img1 from '../assets/images/slider/slider1.png';
import img2 from '../assets/images/slider/slider2.png';
import img3 from '../assets/images/slider/download.jpg';

const Slider = () => {
  const images = [
    img1,
    img2,
    img3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
      <div style={{ position: "relative" }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <button
          onClick={goToPreviousSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ❮
        </button>
        <button
          onClick={goToNextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
