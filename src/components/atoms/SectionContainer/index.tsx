import { Container, SxProps } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function SectionContainer({
  children,
  sx,
}: IProps) {
  return (
    <Container
      sx={{
        marginY: { xs: 4, sm: 5 },
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}
