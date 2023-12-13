import { Box, Grid, Stack, Typography } from "@mui/material";
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
          textAlign: "center",
          fontSize: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: 600,
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
            md={5}
            sx={{ display: { lg: "block", md: "none", xs: "none" } }}
          >
            <img
              src="../../../public/about.png"
              alt="img"
              width="75%"
              height="270px"
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} lg={7} md={12}>
            <Typography
              component="p"
              sx={{
                color: "rgb(134, 142, 150)",
                margin: { md: "10px 0px", xs: "0px" },
              }}
            >
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </Typography>
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
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
