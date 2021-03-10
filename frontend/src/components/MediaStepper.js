import Slides from './Slides.js';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { StepConnector } from "@material-ui/core";
// local images
import ArtParticles from '../images/art_particles.png';
import KTFatCake from '../images/KT_fat_cake_tweet.png';
import Meme from '../images/meme.jpg';
import RohanFat from '../images/rohan_fat_zoom.png';
import Wanker from '../images/wanker.png'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "47.65%", 
    paddingLeft: "-10%"
  },
  leftTimeline: {
      marginLeft: "-120%",
      marginBottom: "30px"
  },
  rightTimeline: {
    marginLeft: "20%",
    marginBottom: "30px"
}
}));

function getSteps() {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
          'August', 'September', 'October', 'November', 'December'];
}

const localMedia = [
  {
    label: 'Funky Clinic Particles',
    imgPath: ArtParticles,
  },
  {
    text: 'I went for a walk to MBS in the middle of the night'
  },
  {
    label: 'KT Tweet',
    imgPath: KTFatCake,
  },
  {
    label: 'Your Life is a Meme',
    imgPath: Meme,
  },
  {
    label: 'Rohan being fat',
    imgPath: RohanFat,
  },
  {
    label: 'The lads',
    imgPath:
      Wanker,
  },
];

export default function MediaStepper() {
  const classes = useStyles();
  const steps = getSteps();

  function getStepContent(index) {
    if (index % 2 == 0) {
      return <div style={{marginLeft: "-101.3%"}}><Slides month={steps[index]} medias={localMedia}/></div>;
    } else {
      return <div><Slides month={steps[index]} medias={localMedia}/></div>;
    } 
  }

  return (
    <div className={classes.root}>
      <Stepper 
        orientation="vertical" 
        style={{marginLeft: "-0%"}} 
        connector={
            <StepConnector
              classes={{
                line: classes.connectorLine,
                disabled: true
              }}
            />
          }>
        {steps.map((label, index) => (
            <Step key={label} active={true} style={{}}>
              <StepLabel></StepLabel>
              <StepContent>
                  {getStepContent(index)} 
              </StepContent>
            </Step>     
        ))}
      </Stepper>
    </div>
  );
}