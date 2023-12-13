import { Box, Typography } from "@mui/material";

const Description = () => {
  const desc = [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Creating application backend in .NET Core",
    "Building responsive website front end using React-Redux",
    "Integration of third party services such as Firebase"
  ];

  return (
    <>
      {desc.map((description, index) => (
        <Box key={index} display="flex" alignItems="center" mb={1} mt={3}>
          <i className="bi bi-stars" style={{color:"rgb(255 169 0)",fontSize:"25px"}}></i>
          <Typography variant="body1" ml={1} component="p" sx={{color:"#7F8DAA",fontSize:"17px"
          ,marginBottom:{xs:"5px",md:"6px"}}}>
            {description}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Description;
