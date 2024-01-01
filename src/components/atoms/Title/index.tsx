import { ThemeProvider, Typography, createTheme } from "@mui/material";

const titleTheme = createTheme({
  typography: {
    h3: {
      fontFamily: "Poppins",
      fontWeight: "bold",
      color: "var(--darkblue)",
    },
  },
});

titleTheme.typography.h3 = {
  [titleTheme.breakpoints.up("xs")]: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "var(--darkblue)",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 1.1,
  },
  [titleTheme.breakpoints.up("sm")]: {
    fontSize: 48,
  },
  [titleTheme.breakpoints.up("md")]: {
    textAlign: "left",
  },
};

export default function Title({
  children,
  color,
  noMargin,
}: {
  children: React.ReactNode;
  color?: string;
  noMargin?: boolean;
}) {
  return (
    <ThemeProvider theme={titleTheme}>
      <Typography
        style={{ color }}
        variant="h3"
        component="h1"
        marginTop={noMargin ? 0 : 4}
      >
        {children}
      </Typography>
    </ThemeProvider>
  );
}
