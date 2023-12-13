
const RightSide = () => {
  return (
    <div style={{padding:"20px"}}>
      <img src="../../public/HeroImg.gif" alt="hero-img" width="90%" height="100%"
       style={{objectFit:"cover"}}/>

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
    </div>

  
  )
}

export default RightSide

