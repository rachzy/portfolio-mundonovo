import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { INumber } from "../../../interfaces/Number";

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
          <img src={icon} style={{ width: 60 }} alt="" />
          <Box>
            <Typography variant="h3">+{value}</Typography>
            <Typography variant="h5">{label}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Grid>
  );
}