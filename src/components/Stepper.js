import Slides from './Slides.js';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

function getSteps() {
  return ['January', 'February', 'March'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Slides/>;
    case 1:
      return <Slides/>;
    case 2:
      return <Slides/>

    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper orientation="vertical">
        {steps.map((label, index) => (
            <Step key={label} active={true} style={{width: "100%", textAlign: "left"}}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    <Typography style={{width: "100%", marginLeft: "5%", marginBottom: "30px"}}>{getStepContent(index)}</Typography>
                </StepContent>
            </Step>
                
        ))}
      </Stepper>
    </div>
  );
}