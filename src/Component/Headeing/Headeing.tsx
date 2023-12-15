import { Typography } from "@mui/material"

const Headeing = ({content}:{content:string}) => {
  return (
  <Typography component="h3" sx={{color:"001C55"}}>{content}</Typography>
  )
}

export default Headeing
