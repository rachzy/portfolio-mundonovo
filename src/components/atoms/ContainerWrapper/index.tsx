import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

interface IProps {
  children: React.ReactNode;
  title?: string;
  color?: string;
}

const containerWrapperTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    }
  },
});

containerWrapperTheme.typography.h1 = {
  [containerWrapperTheme.breakpoints.up("xs")]: {
    color: "rgba(0, 0, 0, 0.2)",
    textTransform: "uppercase",
    fontWeight: "bold",
    lineHeight: 0.75,
    fontSize: 48,
    textAlign: "center",
  },
  [containerWrapperTheme.breakpoints.up("sm")]: {
    fontSize: 64,
  },
  [containerWrapperTheme.breakpoints.up("md")]: {
    fontSize: 128,
    textAlign: "left",
  },
}

export default function ContainerWrapper({ children, title, color }: IProps) {
  function renderTitleBox() {
    if (!title) return null;
    return (
      <Container>
        <Box sx={{ position: "relative", top: 0, }}>
          <Typography variant="h1">{title}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: color }}>
      <ThemeProvider theme={containerWrapperTheme}>
        {renderTitleBox()}
        <Box marginTop={-5} paddingBottom={5}>{children}</Box>
      </ThemeProvider>
    </Box>
  );
}
