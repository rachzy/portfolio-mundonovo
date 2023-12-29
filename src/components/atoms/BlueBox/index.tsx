import { Grid } from "@mui/material";

export default function BlueBox({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: {
          xs: "0",
          sm: "7vw",
        },
        width: {
          xs: "100%",
          sm: "93vw",
        },
        padding: {
          xs: 3,
          sm: 7,
        },
        background: "var(--darkblue)",
        marginTop: 10,
        borderTopLeftRadius: {
          xs: 0,
          sm: 50,
        },
        rowGap: 10,
      }}
      container
    >
      {children}
    </Grid>
  );
}
