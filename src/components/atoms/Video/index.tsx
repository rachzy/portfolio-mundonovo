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
      <Paper sx={{ width: "80%" }} elevation={24}>
        <iframe
          style={{ width: "100%" }}
          width="560"
          height="515"
          src={"//www.youtube.com/watch?v=NCVpvfdfre4"}
          allowFullScreen
        ></iframe>
      </Paper>
    </Box>
  );
}
