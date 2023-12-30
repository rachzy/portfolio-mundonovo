import { Box, Grid } from "@mui/material";
import { IPerson } from "../../../interfaces/Person";
import Title from "../../atoms/Title";
import PersonCard from "../../atoms/PersonCard";

export default function TeamMembers({ team }: { team: IPerson[] }) {
  function renderTeamMembers(): JSX.Element[] {
    return team.map((person) => <PersonCard key={person.name} {...person} />);
  }

  return (
    <Box marginTop={10}>
      <Title>Nossos executivos:</Title>
      <Grid container display={"flex"} spacing={2} rowGap={4}>
        {renderTeamMembers()}
      </Grid>
    </Box>
  );
}
