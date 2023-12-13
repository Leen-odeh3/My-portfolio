import { Box, Grid, Typography } from "@mui/material";
import { Skills } from "../../data/Skills";

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: { xs: "10px 20px", md: "0px 30px" },
        padding: { xs: "10px 20px", md: "20px 40px" },
        alignItems: "center",
      }}
    >
      <Typography
        component="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "600px",
          fontFamily: "Montserrat",
        }}
      >
        What I do
      </Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <img src="../../../public/about.png" alt="img" width="100%" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              component="p"
              sx={{
                color: "rgb(134, 142, 150)",
                margin: { md: "10px 0px", xs: "0px" },
              }}
            >
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </Typography>
            <Box>
      {Skills.map((skill) => (
        <Box key={skill.name} style={{ backgroundColor: skill.color }}>
          <img src={skill.logo} alt={skill.name} />
        </Box>
      ))}
    </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
