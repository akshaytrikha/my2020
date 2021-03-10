import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;

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
    maxWidth: 400,
    width: "100%"
  },
  containerRow: {
    display: "grid"
  },
  img: {
    height: 260,
    display: 'block',
    // maxWidth: 450,
    overflow: 'hidden',
    width: '100%',
    borderRadius: "30px",
  },
  textfield: {
    // height: '100%',
    marginTop: "10%",
    overflow: 'hidden',
    width: '99%',
    borderRadius: "30px",
    border: "1px solid",
    borderColor: "#bdbdbd"
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200',
    // border: '3px solid green'
  },
}));

export default function Slides({month, medias}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = medias.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  function renderMedia(currentMedia) {
    if ('imgPath' in currentMedia) {
      return <img className={classes.img} src={currentMedia.imgPath} alt={currentMedia.label} />
    } else if ('text' in currentMedia) {
      return <TextField defaultValue={currentMedia.text} className={classes.textfield} inputProps={{style: {fontSize: 15, padding: 10, paddingLeft: 15, paddingRight: 15}}} 
              id="thought" variant="standard" fullWidth="True" multiline="True" rows={6} rowsMax={9}/>
    }
  }

  return (
    <div className={classes.root}>
      <p style={{fontSize: 20}}>{month}</p>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {medias.map((media, index) => (
            <div key={media.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className="center">
                  {renderMedia(media)}
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