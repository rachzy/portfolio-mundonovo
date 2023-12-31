import classes from "./FooterIcon.module.css";
import { Box } from "@mui/material";

export default function FooterIcon({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) {
  return (
    <Box
      className={classes.footerIcon}
      onClick={onClick}
      sx={{ position: "absolute", width: 75 }}
    >
      <img style={{ width: "100%" }} src={src} alt="" />
    </Box>
  );
}
