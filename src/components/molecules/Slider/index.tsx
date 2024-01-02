import React, { useEffect, useState, useCallback } from "react";
import "./Slider.css";

interface IProps {
  images: string[];
  floatingDots?: boolean;
}

import SliderIcon from "../../../assets/images/icons/slider.png";

import SliderTextBox from "../../atoms/SliderTextBox";
import { Box, Container } from "@mui/material";

const Slider: React.FC<IProps> = ({ images, floatingDots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideButtonClick = useCallback(() => {
    setCurrentSlide((currentValue) => {
      if (currentValue >= images.length - 1) return 0;
      return currentValue + 1;
    });
  }, [images.length]);

  const handlePreviousSlideButtonClick = useCallback(() => {
    setCurrentSlide((currentValue) => {
      if (currentValue === 0) return images.length - 1;
      return currentValue - 1;
    });
  }, [images.length]);

  function renderImages() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`slide ${index === currentSlide && "active"}`}
        >
          <img src={image} />
        </div>
      );
    });
  }

  function renderDots() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`dot ${index === currentSlide && "active"}`}
          onClick={() => setCurrentSlide(index)}
        />
      );
    });
  }

  useEffect(() => {
    setInterval(handleNextSlideButtonClick, 5000);
  }, [handleNextSlideButtonClick]);

  return (
    <>
      <SliderTextBox mobile />
      <div className="slider" id="slider">
        <Container sx={{ position: "absolute" }}>
          <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
            <div className="buttons">
              <button onClick={handlePreviousSlideButtonClick}>
                <img
                  src={SliderIcon}
                  style={{
                    transform: "scaleX(-1)",
                    WebkitTransform: "scaleX(-1)",
                  }}
                />
              </button>
              <button onClick={handleNextSlideButtonClick}>
                <img src={SliderIcon} />
              </button>
            </div>
          </Box>
        </Container>
        {floatingDots && <div className="dots float">{renderDots()}</div>}

        <SliderTextBox />
        <div className="slides">{renderImages()}</div>
      </div>
      {!floatingDots && <div className="dots">{renderDots()}</div>}
    </>
  );
};

export default Slider;
