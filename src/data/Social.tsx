import { SocialMediaLink } from "../Interface/Social";

import FacebookIcon  from '@mui/icons-material/Facebook';
import InstagramIcon from  '@mui/icons-material/Instagram';
import  GitHubIcon from '@mui/icons-material/GitHub';
import  LinkedIn from '@mui/icons-material/LinkedIn';
import  GoogleIcon  from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';


export const Social: SocialMediaLink[] = [
  {
    name:"facebook",
    icons: <FacebookIcon />,
    url: "https://www.facebook.com/profile.php?id=100045529333705",
  },
  {
    name:"github",
    icons: <GitHubIcon />,
    url: "https://github.com/Leen-odeh3?fbclid=IwAR2F1IjH-4lKkKp1NgjCmFkuJI6CjvL_550Dp6SSbj12IvjOSEzKURRxtpU",
  },
  {
    name:"twitter",
    icons: <TwitterIcon />,
    url: "https://twitter.com/leen_odeh2803 ",
  },
  {
    name:"insta",
    icons: <InstagramIcon />,
    url: "https://www.instagram.com/leen.odeh12/?next=%2F",
  },
  {
    name:"gitlab",
    icons: <i className="bi bi-gitlab"></i>,
    url: "https://gitlab.com/Leen-odeh3",
  },
  {
    name:"email",
    icons: <GoogleIcon />,
    url: "leenodeh287@gmail.com",
  },
  {
    name:"linkedin",
    icons: <LinkedIn />,
    url: "https://www.linkedin.com/in/leen-odeh3/",
  },
];
