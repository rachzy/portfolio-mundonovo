import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import HalfCircle from "../../../assets/images/outros/grafismo-fotos-equipe.png";
import { useState } from "react";
import { IPerson } from "../../../interfaces/Person";

const personCardTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    h4: {
      color: "var(--darkblue)",
      fontWeight: "bold",
      fontSize: 18,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.2,
      color: "var(--darkblue)",
    },
    body2: {
      color: "white",
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
});

export default function PersonCard({
  name,
  image,
  jobTitle,
  description,
}: IPerson) {
  const [active, setActive] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  function handleTextClick() {
    setActive((currentValue) => !currentValue);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ThemeProvider theme={personCardTheme}>
        <Box sx={{ border: "none", borderRadius: 0 }}>
          <Box
            onClick={handleTextClick}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: 360,
              overflow: "hidden",
              borderRadius: 6,
              marginBottom: 1,
              cursor: "pointer",
              transition: "0.2s all",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                transition: "0.2s all",
                backgroundSize: "cover",
                transform: mouseOver ? "scale(1.1)" : "none",
              }}
            />
            <Box
              sx={{
                position: "relative",
                width: "100%",
                background: "rgba(4, 48, 59, 1)",
                padding: 2,
                zIndex: 1,
              }}
            >
              <Typography variant="body2">{name}</Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                alignSelf: "flex-end",
                marginBottom: -5,
                marginRight: 2,
                zIndex: 2,
              }}
            >
              <img style={{ width: "80%" }} src={HalfCircle} alt="" />
            </Box>
          </Box>
          <Box sx={{ width: "85%" }}>
            <Typography
              variant="h4"
              sx={{
                marginLeft: {
                  xs: 1,
                  sm: 0,
                },
              }}
            >
              {jobTitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                transition: "0.2s all",
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxHeight: active ? "200vh" : "fit-content",
                whiteSpace: active ? "normal" : "nowrap",
                cursor: active ? "text" : "pointer",
                marginLeft: {
                  xs: 1,
                  sm: 0,
                },
              }}
              onClick={handleTextClick}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Grid>
  );
}
