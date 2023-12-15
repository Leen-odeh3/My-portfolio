import { Container, Typography, Box, LinearProgress } from "@mui/material";

function SkillsBar() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        mt: 5,
        mb: 7,
        p: 3,
        marginLeft: { xs: 2, sm: "auto" },
        marginRight: { xs: 2, sm: "auto" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#001c55",
          fontWeight: 400,
          borderRadius: 50,
          mt: 2,
          mb: 3,
        }}
      >
        Skills
      </Typography>

      {skills.map((skill) => (
        <Box key={skill.title} sx={{ marginY: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "#333" }}
          >
            {skill.title}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={skill.percent}
            sx={{
              height: 8,
              borderRadius: 6,
              backgroundColor: "rgba(0,0, 0, 0.1)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "rgb(109, 131, 242)" }
            }}
          />
        </Box>
      ))}
    </Container>
  );
}

const skills = [
  { title: "HTML", percent: 95 },
  { title: "ReactJS", percent: 90 },
  { title: "JavaScript", percent: 85 },
  { title: "CSS", percent: 80 },
  { title: "Backend .NET Core Web Api", percent: 70 },
  { title: "Backend MVC", percent: 60 },
  { title: "Programming", percent: 50 },
];

export default SkillsBar;
