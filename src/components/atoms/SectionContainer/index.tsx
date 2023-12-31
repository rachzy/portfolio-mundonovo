import { Container, SxProps } from "@mui/material";
import React from "react";

interface IProps {
  id?: string;
  children: React.ReactNode;
  sx?: SxProps;
}

export default function SectionContainer({ id, children, sx }: IProps) {
  return (
    <Container
      id={id}
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
