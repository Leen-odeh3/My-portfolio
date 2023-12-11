import { Box, Grid, Stack, Typography } from "@mui/material";
import { Social } from "../data/Social";

const Hero = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: { xs: "10px 20px", md: "10px 30px" },
        padding: { xs: "10px 20px", md: "20px 40px" },
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="info">
            <Typography
              component="h1"
              sx={{ fontSize: "40px", marginBottom: "20px", color: "#001c55" }}
            >
              Leen Odeh
            </Typography>
            <Typography component="h2" sx={{ marginBottom: "20px" }}>
              Full Stack Developer⌛️
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "rgb(127, 141, 170)",
                fontSize: { xs: "20px" },
                lineHeight: "40px",
                margin: { md: "20px 40px 20px 0px", xs: "20px auto 20px" },
              }}
            >
              A passionate individual who always thrives to work on end-to-end
              products that develop sustainable and scalable social and
              technical systems to create an impact.
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={3}
        
            >
              {Social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="-blank"
                  className={`${socialLink.name} links`}
                  style={{margin:"auto",marginBottom:"20px"}}
                >
                  {socialLink.icons}
                </a>
              ))}
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          leen
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
