import { Box } from "@mui/material"
import './RightSide.scss'

const RightSide = () => {
  return (
    <Box className="parent" sx={{backgroundColor:"rgb(109, 131, 242)",padding:{xs:"30px",md:"30px"}}}>
      <Box className="child" sx={{borderRadius:"10px",padding:{xs:"10px",md:"20px"},
      backgroundColor:"rgb(248, 248, 248)",boxShadow:"rgba(0, 0, 0, 0.05) 0px 5px 10px",color:"rgb(109, 131, 242)"}}>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b> {'{'}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp; constructor() {'{'}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = "<b>Leen Odeh</b>";
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits = ["<b>DESIGN</b>", "<b>DEV</b>"];
      </pre>
      <pre>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = new Date().getFullYear() - 2001;</pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}</pre>
      <pre>7&nbsp;&nbsp;{'}'}</pre>
      </Box>
      {/* <img src="../../public/HeroImg.gif" alt="hero-img" width="90%" height="100%"
       style={{objectFit:"cover"}}/> */}

        <style>
      {
        `
        @media(max-width:900px){
          img{
            width:100%;
            height:100%;
          }
        }
        `
      }
    </style> 
    </Box>

  
  )
}

export default RightSide

