import {
  Box,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { IContent } from "../../../interfaces/Content";

interface IProps extends IContent {
  className?: string;
}

export default function ContentBox({
  icon,
  color,
  title,
  description,
  inline,
  inverse,
}: IProps) {
  const contentBoxTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
        color: color,
        fontSize: 19,
        textAlign: "center",
      },
      body1: {
        fontWeight: "bold",
      },
      body2: {
        fontWeight: 400,
      },
    },
  });

  function renderTypography() {
    if (inline) {
      if (inverse) {
        return (
          <Typography variant="body2">
            {description} <span style={{ fontWeight: "bold" }}>{title}</span>
          </Typography>
        );
      }
      return (
        <Typography variant="body1">
          {title} <span style={{ fontWeight: 400 }}>{description}</span>
        </Typography>
      );
    }
    return (
      <>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </>
    );
  }

  return (
    <Paper
      className={"paper"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        height: 400,
        borderRadius: 5,
      }}
      elevation={12}
    >
      <ThemeProvider theme={contentBoxTheme}>
        <Box sx={{ width: 70 }}>
          <img style={{ width: "100%" }} src={icon} alt="" />
        </Box>
        <Box sx={{ width: "100%", padding: 1, overflowX: "hidden" }}>
          {renderTypography()}
        </Box>
      </ThemeProvider>
    </Paper>
  );
}
