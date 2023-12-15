import { Box, Grid, Stack, Typography } from "@mui/material";



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

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box sx={{ marginTop: "30px" }}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ marginTop: "20px", flexWrap: "wrap" }}
              >
                Languages
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
      
front
          </Grid>
          <Grid item xs={12} md={3}>
    back

      </Grid>
      <Grid item xs={12} md={3}>
  
Tools
      </Grid>
      
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
