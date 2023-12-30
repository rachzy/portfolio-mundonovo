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
    h1: {
      fontFamily: "Poppins",
      color: "rgba(0, 0, 0, 0.2)",
      textTransform: "uppercase",
      fontSize: "9vw",
      fontWeight: "bold",
      lineHeight: 0.73,
    },
  },
});

export default function ContainerWrapper({ children, title, color }: IProps) {
  function renderTitleBox() {
    if (!title) return null;
    return (
      <Container>
        <Box sx={{ position: "absolute" }}>
          <Typography variant="h1">{title}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: color }}>
      <ThemeProvider theme={containerWrapperTheme}>
        {renderTitleBox()}
        <Box paddingTop={10} paddingBottom={5}>{children}</Box>
      </ThemeProvider>
    </Box>
  );
}
