import { Typography } from "@mui/material"

const Headeing = ({content}:{content:string}) => {
  return (
  <Typography component="h1" sx={{color:"001C55",lineHeight:"2"}}>{content}</Typography>
  )
}

export default Headeing
