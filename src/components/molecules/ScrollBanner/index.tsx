import React from "react";
import "./Banner.css";
import { Container } from "@mui/material";

interface IProps {
  banner: string;
  children: React.ReactNode;
}

const ScrollBanner: React.FC<IProps> = ({ banner, children }) => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `url(${banner})`,
        overflow: "hidden",
      }}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default ScrollBanner;
