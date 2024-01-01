import { useCallback, memo } from "react";
import "./LogoSlider.css";
import { IContent } from "../../../interfaces/Content";
import ContentBox from "../ContentBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

interface IProps {
  content: IContent[];
}

const ContentSlider: React.FC<IProps> = memo(({ content: content }) => {
  const renderContent = useCallback(() => {
    return content.map((ct) => (
      <SwiperSlide style={{padding: 4}} key={ct.title}>
        <ContentBox key={ct.title} {...ct} />
      </SwiperSlide>
    ));
  }, [content]);

  return (
    <Box sx={{ marginY: 5 }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {renderContent()}
      </Swiper>
    </Box>
  );
});

export default ContentSlider;
