import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { IAddress } from "../../../interfaces/Address";
import { Fragment } from "react";

const contactLabelTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color: "var(--darkblue)",
    },
    body1: {
      fontWeight: "bold",
      fontSize: 22,
    },
    body2: {
      fontSize: 20,
    },
  },
});

export default function AddressLabel({ title, description }: IAddress) {
  function renderDescription() {
    return description.map((line) => (
      <Fragment key={line}>
        {line}
        <br />
      </Fragment>
    ));
  }
  return (
    <Grid item xs={12} sm={6}>
      <ThemeProvider theme={contactLabelTheme}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{renderDescription()}</Typography>
      </ThemeProvider>
    </Grid>
  );
}
