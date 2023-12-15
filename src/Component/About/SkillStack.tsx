// SkillStack.jsx

import React from "react";
import { Box, Stack } from "@mui/material";
import Skill from "../../Interface/Skill";

interface SkillStackProps {
  skills: Skill[];
}

const SkillStack: React.FC<SkillStackProps> = ({ skills }) => {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Stack
        direction="row"
        spacing={0}
        sx={{ marginTop: "10px", flexWrap: "wrap",paddingBottom:"20px"}}
      >
        {skills.map((skill) => (
          <div key={skill.name} style={{ padding: "5px", marginRight: "10px",textAlign:"center" }}>
            <img
              src={skill.logo}
              alt={skill.name}
              width="fit-content"
              height="30"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillStack;
