import './App.css';
import MediaStepper from './components/MediaStepper.js'
import {Component} from 'react';
import firebase from "./components/Firebase.js";
import Button from '@material-ui/core/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Rohan",
      lastName: "Kapur"
     };
  }

  createUser = event => {
    event.preventDefault();
    const db = firebase.firestore();
    const userRef = db.collection("users").add({
      firstname: this.state.firstName,
      lastName: this.state.lastName
    });  
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="Main">
        <div className="Timeline">
          <h1 style={{fontSize: "100px"}}>My2020</h1>
          <p className="App-intro"></p>
          <MediaStepper/>
          <Button onClick={this.createUser}>Create User</Button>
        </div>
      </div>
    )
  };
}