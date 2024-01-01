import { Box, Grid } from "@mui/material";
import { IContent } from "../../../interfaces/Content";
import ContentBox from "../../atoms/ContentBox";
import ContentSlider from "../../atoms/ContentSlider";

export default function ContentMap({ content }: { content: IContent[] }) {
  function renderContent() {
    return content.map((ct) => (
      <Grid item xs={12} sm={4} md={3} key={ct.title}>
        <ContentBox {...ct} />
      </Grid>
    ));
  }

  function renderSlider() {
    if(content.length > 4) {
      return <ContentSlider content={content} />;
    }

    return(
      <Grid container spacing={4} marginY={4}>
      {renderContent()}
    </Grid>
    )
  }

  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Grid container spacing={4} marginY={4}>
          {renderContent()}
        </Grid>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {renderSlider()}
      </Box>
    </>
  );
}
