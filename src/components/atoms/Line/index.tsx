import { Box } from "@mui/material";
import classes from "./Line.module.css";

export default function Line() {
  return (
    <Box sx={{ width: "100%", marginY: 5, height: 2, }}>
      <hr className={classes.line} />
    </Box>
  );
}
