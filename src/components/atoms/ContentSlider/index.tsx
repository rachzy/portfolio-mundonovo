import { useState, useCallback, memo } from "react";
import "./LogoSlider.css";
import { IContent } from "../../../interfaces/Content";
import ContentBox from "../ContentBox";
import { Grid } from "@mui/material";

interface IProps {
  content: IContent[];
}

const ContentSlider: React.FC<IProps> = memo(({ content: content }) => {
  const [firstSlide, setFirstSlide] = useState(0);

  const renderContent = useCallback(() => {
    return content.map((ct, index) => (
      <ContentBox
        key={ct.title}
        className={`content ${
          index >= firstSlide && index <= firstSlide + 3 ? "active" : "inactive"
        }`}
        {...ct}
      />
    ));
  }, [content, firstSlide]);

  function handleDotMouseOuver(index: number) {
    setFirstSlide(index * 4);
  }

  const renderDots = useCallback(() => {
    return content.map((ct, index) => {
      if (index % 4 !== 0) return null;
      return (
        <div
          key={ct.title}
          className={`contentDot ${index === firstSlide && "active"}`}
          onMouseOver={handleDotMouseOuver.bind(this, index / 4)}
        ></div>
      );
    });
  }, [content, firstSlide]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFirstSlide((currentValue) => {
  //       if (currentValue + 4 >= content.length - 1) return 0;
  //       return currentValue + 4;
  //     });
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [content, firstSlide]);

  return (
    <div className="logo-slider">
      <Grid container spacing={4} marginY={4}>
        {renderContent()}
      </Grid>
      <div className="dots">{renderDots()}</div>
    </div>
  );
});

export default ContentSlider;
