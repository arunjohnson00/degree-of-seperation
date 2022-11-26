import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";
import { Stack } from "@mui/system";
import InputTextStyled from "../../components/Input/InputTextStyled";
import AddPeopleCard from "../../components/addpeoplecard/AddPeopleCard";
import AddRelationShipCard from "../../components/addrelationshipcard/AddRelationShipCard";
import DegreeOfRelationCard from "../../components/degreeofrelation/DegreeOfRelationCard";

const Home = () => {
  return (
    <Container>
      <Grid container mt={3} rowGap={5} columnGap={3}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: "2rem",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            <HubIcon sx={{ color: "#FFFFFF" }} /> Find Degree of Separation
          </Typography>
        </Grid>
        <Grid container columnSpacing={2}>
          <Grid item xs={6}>
            <AddPeopleCard />
          </Grid>
          <Grid item xs={6}>
            <AddRelationShipCard />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <DegreeOfRelationCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
