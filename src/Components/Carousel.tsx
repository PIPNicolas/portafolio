import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const steps = [
  {
    img:'https://www.digiapp.cl/static/images/preview-mys.svg',
    label: 'Mascota y salud',
    description: `Empresa que ofrece planes de salud para mascotas enfocados en perros y gatos, tenemos la convicción que ellos también merecen tener salud de calidad.`,
  },
  {
    img:'https://limitesur.cl/wp-content/uploads/2021/12/limite-sur-logo-v3.svg',
    label: 'Limite Sur',
    description:
      'Un partner que busca el impacto positivo. Son ya más 9 años de partnership, apoyando la evolución digital de Límite Sur, marca que inspira por su propósito sustentable y un equipo que ha creado una audiencia fiel con el pasar de los años.',
  },
  {
    img:'https://www.digiapp.cl/static/images/preview-mys.svg',
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
<Card sx={{ display: 'flex', backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" color='white'variant="h5">
          {steps[activeStep].label}
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
          {steps[activeStep].description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150, height:160, marginTop:3 }}
        image={steps[activeStep].img}
        alt="Live from space album cover"
      />
    </Card>

      <MobileStepper
        variant="text"
        sx={{backgroundColor:'transparent', color:'transparent '}} 
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{color:'white'}} 
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{color:'white'}} />
            ) : (
              <KeyboardArrowRight sx={{color:'white'}} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color:'white'}} >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{color:'white'}} />
            ) : (
              <KeyboardArrowLeft sx={{color:'white'}} />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}