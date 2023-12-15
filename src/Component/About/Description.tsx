import { Box, Typography } from "@mui/material";

const Description = () => {
  const desc = [
    {
      text: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      imageSrc: "../../../public/numbers/1.png"
    },
    {
      text: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      imageSrc: "/numbers/2.png"
    },
    {
      text: "Creating application backend in .NET Core and Integration of third party services such as Firebase",
      imageSrc: "/numbers/3.png"
    },
    {
      text: "Building responsive website front end using React-Redux",
      imageSrc: "/numbers/4.png"
    },
  
  ];

  return (
    <>
      {desc.map((item, index) => (
        <Box key={index} display="flex" alignItems="center" mb={1} mt={3}>
          <img src={item.imageSrc} alt={`Image ${index + 1}`} style={{ width: "35px", height: "35px", marginRight: "8px" }} />
          <i className="bi bi-stars" style={{ color: "rgb(255 169 0)", fontSize: "25px" }}></i>
          <Typography variant="body1" ml={1} component="p" sx={{ color: "#7F8DAA", fontSize: "17px", marginBottom: { xs: "5px", md: "6px" } }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Description;
