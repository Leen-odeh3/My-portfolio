
import { Container, Typography, Box, LinearProgress } from "@mui/material";

function SkillsBar() {
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "white", borderRadius: 7, mt: 5, p: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", backgroundColor: "crimson", color: "white", fontWeight: 400, borderRadius: 50, mt: 2, mb: 3 }}>
        React Progress Bar
      </Typography>

      {skills.map((skill) => (
        <Box key={skill.title} sx={{ marginY: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#333" }}>
            {skill.title}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={skill.percent}
            sx={{ height: 8, borderRadius: 6, backgroundColor: "rgba(0,0, 0, 0.1)" }}
          />
        </Box>
      ))}
    </Container>
  );
}

const skills = [
  { title: "HTML", percent: 95 },
  { title: "CSS", percent: 80 },
  { title: "JavaScript", percent: 60 },
  { title: "NodeJS", percent: 40 },
  { title: "ReactJS", percent: 70 },
  { title: "ExpressJS", percent: 75 },
];

export default SkillsBar;
