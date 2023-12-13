import { Box, Grid, Stack, Typography } from "@mui/material";
import { Skills } from "../../data/Skills";
import Description from "./Description";

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
          textAlign: "center",
          fontSize: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          margin:"auto",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        What I do
      </Typography>
      <Box>
        <Typography
          component="p"
          sx={{
            color: "rgb(134, 142, 150)",
            margin: { md: "10px 0px", xs: "0px" },
            textAlign:"center"
          }}
        >
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginTop: "30px" }}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ marginTop: "20px", flexWrap: "wrap" }}
              >
                {Skills.map((skill) => (
                  <img
                    key={skill.name}
                    src={skill.logo}
                    style={{
                      marginBottom: "10px",
                      width: "fit-content",
                      height: "30px",
                    }}
                    className="skill"
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Description />

            {/* <img
              src="../../../public/about.png"
              alt="img"
              width="75%"
              height="270px"
              style={{ objectFit: "cover" }}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
