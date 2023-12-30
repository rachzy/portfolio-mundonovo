import { Grid } from "@mui/material";
import { IContent } from "../../../interfaces/Content";
import ContentBox from "../../atoms/ContentBox";
import ContentSlider from "../../atoms/ContentSlider";

export default function ContentMap({ content }: { content: IContent[] }) {
  if (content.length > 4) {
    return <ContentSlider content={content} />;
  }
  
  function renderContent() {
    return content.map((ct) => <ContentBox key={ct.title} {...ct} />);
  }

  return (
    <Grid container spacing={4} marginY={4}>
      {renderContent()}
    </Grid>
  );
}
