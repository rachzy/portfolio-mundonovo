import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { INumber } from "../../../interfaces/Number";

import CountUp from "react-countup";

const numberTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textAlign: "right",
    },
    h5: {
      color: "white",
      fontWeight: "bold",
    },
  },
});

numberTheme.typography.h3 = {
  [numberTheme.breakpoints.up("xs")]: {
    color: "var(--green)",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  [numberTheme.breakpoints.up("sm")]: {
    fontSize: 32,
    textAlign: "right",
  },
};

numberTheme.typography.h5 = {
  [numberTheme.breakpoints.up("xs")]: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  [numberTheme.breakpoints.up("sm")]: {
    textAlign: "right",
  },
};

export default function Number({ icon, value, label }: INumber) {
  return (
    <Grid item xs={12} sm={4} md={2}>
      <ThemeProvider theme={numberTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
            alignItems: {
              xs: "center",
              sm: "flex-end",
            },
            height: {
              xs: "fit-content",
              sm: 220,
            },
          }}
        >
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <img src={icon} style={{ maxWidth: 70, maxHeight: 60 }} alt="" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3">
              <CountUp end={value} duration={10} enableScrollSpy prefix="+" />
            </Typography>
            <Typography variant="h5">{label}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Grid>
  );
}
