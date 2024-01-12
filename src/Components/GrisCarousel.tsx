import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import TextMobileStepper from './Carousel';



export default function GrisCarousel() {
  return (
 
  <Grid sx={{  justifyContent: "center" }} container spacing={2}>
    
    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>

   
    <Avatar
        alt="Remy Sharp"
        src="https://www.digiapp.cl/static/images/logo.svg"
        sx={{ width: 56, height: 56 }}
      />
   
      
    </Grid>

    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://whooohq.com/wp-content/uploads/2018/04/cropped-Mesa-de-trabajo-1.png"
        sx={{ width: 70, height: 60 }}
      />
    </Grid>
    
    <Grid item md={11} xs={10} sx={{  display: "flex", justifyContent: "center" }}>
      <TextMobileStepper />
    </Grid> 
  </Grid>

  );
}


