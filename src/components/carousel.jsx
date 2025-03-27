import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const images = [
    "images/Man ki baat.png",
    "images/unionBudget.png",
    "images/govSchemes.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="Carousel">
      <div
        className="carousel-Inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <div className="innerImage">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={goToPrevious}>
          <ArrowBackIosNewIcon />
        </button>
        <button className="carousel-button" onClick={goToNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
