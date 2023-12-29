import { Box } from "@mui/material";
import Slider from "../../molecules/Slider";

import Slider1 from "../../../assets/images/slider/slider1.png";
import Slider2 from "../../../assets/images/slider/Slider2.png";
import Slider3 from "../../../assets/images/slider/Slider3.png";
import Slider4 from "../../../assets/images/slider/Slider4.png";

export default function HomeSection() {
    const images = [Slider1, Slider2, Slider3, Slider4];
    return(
        <Box>
            <Slider images={images} floatingDots />
        </Box>
    )
}