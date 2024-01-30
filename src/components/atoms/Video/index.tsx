import { Box, Paper } from "@mui/material";

export default function Video() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginY: 8,
      }}
    >
      <Paper sx={{ width: "80%", height: "515px" }} elevation={24}>
        <iframe
          style={{ width: "100%", height: "100%" }}
          src={"//www.youtube.com/embed/NCVpvfdfre4"}
          allowFullScreen
        ></iframe>
      </Paper>
    </Box>
  );
}
