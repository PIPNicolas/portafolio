import React from 'react';
import { Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import GrisCarousel from '../Components/GrisCarousel';

let theme = createTheme({
});
theme = responsiveFontSizes(theme);

const HomePage = () => {
  return (
  <>
  
    <Grid sx={{paddingTop:0, marginRight: 0, marginLeft:6,  background: 'linear-gradient(9deg, rgba(0, 0, 0, 1) 0%, rgba(61, 60, 60, 0) 100%), url("https://preview.treethemes.com/hazel/wp-content/uploads/2021/05/432423.jpg")',  }} > 
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="left"
  justifyContent="initial"
  sx={{ minHeight: '100vh',paddingTop:6, mx: 'auto' }}
  color={'white'}
  
  >
<Grid   container spacing={2} columns={16}>
<Grid item md={1} xs={2}></Grid>
<Grid item md={6} xs={12}>
<ThemeProvider theme={theme}>
          <Grid container xs={12}>
          <Typography variant="h2" align="left" fontFamily="bold"  fontWeight={1} >
              {'|'}
            </Typography>
            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            <Typography variant="h3" align="center" sx={{paddingTop:1, fontFamily:'sans-serif', fontSize:100, borderRadius:100}} fontWeight={1} >
             {'N J F N'} 
            </Typography>
            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            <Typography variant="h2" align="right" fontFamily="Segoe UI" fontWeight={1} >
            {'|'}
            </Typography>
          </Grid>
           

            <Typography variant="h3" align="left" fontFamily="Segoe UI" color={'rgb(217 217 217 / 80%)'}   fontWeight={10} >
            IMPULSAMOS TU ESENCIA 
            </Typography>
            <br/>
            <Typography variant="h5" align="left" fontFamily="Segoe UI" /* color={'rgb(217 217 217 / 80%)'}  */  fontWeight={10} >
            
            # Nuestros servicios destacados web y marketing del 2023
            </Typography>
          </ThemeProvider>
  </Grid>
  <Grid item md={8}xs={16}>
    
  <GrisCarousel/> 
        </Grid>

        
        </Grid>
        <br/>



        {/*         <Carousel slides={slides}/>
 */}

 {/*        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (


              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}


    </section> */}
  
</Grid>


   
    
         
        </Grid>
        </>
  );
};

export default HomePage;