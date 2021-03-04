import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArtParticles from '../images/art_particles.png';
import KTFatCake from '../images/KT_fat_cake_tweet.png';
import Meme from '../images/meme.jpg';
import RohanFat from '../images/rohan_fat_zoom.png';
import Wanker from '../images/wanker.png'


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;

const tutorialSteps = [
  {
    label: 'January',
    imgPath: ArtParticles,
  },
  {
    label: '',
    imgPath:
      KTFatCake,
  },
  {
    label: '',
    imgPath: Meme,
  },
  {
    label: '',
    imgPath: RohanFat,
  },
  {
    label: '',
    imgPath:
      Wanker,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    textAlign: "center",
    // backgroundColor: theme.palette.background.default,
    borderRadius: "30px"
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    textAlign: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    maxWidth: 400,
    width: "100%"
  },
  containerRow: {
    display: "grid"
  },
  layer1: {
    gridColumn: 1,
    gridRow: 1,
    backgroundColor: "#000cf6"
  },
  layer2: {
    gridColumn: 1,
    gridRow: 1,
    backgroundColor: "#ABABAB",
    alpha: "0.4"
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    borderRadius: "30px",
    backgroundColor: "blue"
  },
}));

export default function Slides({month}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <p>{month}</p>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div>
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div style={{backgroundColor: "transparent"}}>
          <MobileStepper
            style={{borderRadius: "30px", backgroundColor: "transparent"}}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                {/* next button */}
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                {/* back button */}
              </Button>
            }
          />
        </div>
    </div>
  );
}