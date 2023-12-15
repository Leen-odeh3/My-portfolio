// About.jsx
import { Box, Grid, Typography } from "@mui/material";
import SkillStack from "./SkillStack";
import { Languages, Frontend, Back, Tools } from "../../data/Skills";
import Headeing from "../Headeing/Headeing";
import Description from "./Description";

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: { xs: "10px 20px", md: "0px 30px" },
        padding: { xs: "10px 20px", md: "20px 40px" },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        component="h4"
        sx={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          margin: "auto",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        What I do
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "rgb(134, 142, 150)",
          margin: { md: "10px 0px 20px", xs: "0px" },
          textAlign: "center",
        }}
      >
        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
      </Typography>
      <Box sx={{ margin: "10px" }}>
        <Description />
      </Box>

      <Grid container spacing={3} sx={{ marginTop: "15px" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
        >
          <Headeing content="Languages" />
          <SkillStack skills={Languages} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
        >
          <Headeing content="Front-End" />
          <SkillStack skills={Frontend} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
        >
          <Headeing content="Back-End" />
          <SkillStack skills={Back} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
        >
          <Headeing content="Tools" />
          <SkillStack skills={Tools} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
