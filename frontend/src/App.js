import logo from './logo.svg';
import './App.css';
import MediaStepper from './components/MediaStepper.js'
import {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="Main">
        <div className="Timeline">
          <h1 style={{fontSize: "100px"}}>My2020</h1>
          <p className="App-intro">{this.state.apiResponse}</p>
          <MediaStepper/>
        </div>
      </div>
    )
  };
}