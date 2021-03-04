import Slides from './Slides.js';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { StepConnector } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "50%", 
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

export default function MediaStepper() {
  const classes = useStyles();
  const steps = getSteps();

  function getStepContent(index) {
    if (index % 2 == 0) {
      return <div style={{marginLeft: "-108%"}}><Slides month={steps[index]}/></div>;
    } else {
      return <div><Slides month={steps[index]}/></div>;
    } 
  }

  return (
    <div className={classes.root}>
      <Stepper 
        orientation="vertical" 
        style={{marginLeft: "-5%"}} 
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
              <StepLabel><p></p></StepLabel>
              <StepContent>
                  {getStepContent(index)} 
              </StepContent>
            </Step>     
        ))}
      </Stepper>
    </div>
  );
}