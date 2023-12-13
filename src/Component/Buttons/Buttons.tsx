import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
interface ButtonsProps {
  content: React.ReactNode; // or React.ReactElement
  url: string;
}

const Buttons: React.FC<ButtonsProps> = ({ content ,url }) => {
  return (
    <Box>
      <Button className="link-btn"
        variant="contained"
        sx={{
          padding: "10px 20px",
          backgroundColor: "#001c55",
          "&:hover": {
            backgroundColor: "transparent",
            border: "1px solid #001c55",  
          }
        }}
      >
        <Link className="link-btn"
          to={url}
          style={{ color: "#edf2fe"}}
        >
          {content}
        </Link>
      </Button>
    </Box>
  );
};

export default Buttons;
