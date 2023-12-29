import { Container, SxProps } from "@mui/material";
import React from "react";

export default function SectionContainer({
  children,
  sx
}: {
  children: React.ReactNode;
  sx?: SxProps 
}) {
  return (
    <Container sx={{ marginY: { xs: 4, sm: 16 }, overflow: "hidden", ...sx }}>
      {children}
    </Container>
  );
}
