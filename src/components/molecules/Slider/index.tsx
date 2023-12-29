import React, { useEffect, useState, useCallback } from "react";
import "./Slider.css";

interface IProps {
  images: string[];
  floatingDots?: boolean;
}

// import SliderDireita from "../../assets/other/slider-direita.png";
// import SliderEsquerda from "../../assets/other/slider-esquerda.png";

import SliderTextBox from "../../atoms/SliderTextBox";

const Slider: React.FC<IProps> = ({ images, floatingDots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideButtonClick = useCallback(() => {
    setCurrentSlide((currentValue) => {
      if (currentValue >= images.length - 1) return 0;
      return currentValue + 1;
    });
  }, [images.length]);

  // const handlePreviousSlideButtonClick = useCallback(() => {
  //   setCurrentSlide((currentValue) => {
  //     if (currentValue === 0) return images.length - 1;
  //     return currentValue - 1;
  //   });
  // }, [images.length]);

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
        />
      );
    });
  }

  useEffect(() => {
    setInterval(handleNextSlideButtonClick, 5000);
  }, [handleNextSlideButtonClick]);

  return (
    <>
      <div className="slider">
        {/* <div className="buttons">
          <button onClick={handlePreviousSlideButtonClick}>
            <img src={SliderEsquerda} />
          </button>
          <button onClick={handleNextSlideButtonClick}>
            <img src={SliderDireita} />
          </button>
        </div> */}
        {floatingDots && <div className="dots float">{renderDots()}</div>}

        <SliderTextBox />
        <div className="slides">{renderImages()}</div>
      </div>
      {!floatingDots && <div className="dots">{renderDots()}</div>}
    </>
  );
};

export default Slider;
