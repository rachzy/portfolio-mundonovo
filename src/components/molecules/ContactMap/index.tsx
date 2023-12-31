import { Box, Grid } from "@mui/material";
import { IContact } from "../../../interfaces/Contact";
import FooterIcon from "../../atoms/FooterIcon";

export default function ContactMap({ contacts }: { contacts: IContact[] }) {
  function handleContactIconClick(href: string) {
    window.open(href);
  }

  function renderContactIcons(): JSX.Element[] {
    return contacts.map((contact) => (
      <Grid key={contact.icon} item xs={12} sm={3} md={1}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <FooterIcon
            src={contact.icon}
            onClick={() => handleContactIconClick(contact.href)}
          />
        </Box>
      </Grid>
    ));
  }

  return (
    <Grid width={"100%"} container rowGap={16} columnGap={3}>
      {renderContactIcons()}
    </Grid>
  );
}
