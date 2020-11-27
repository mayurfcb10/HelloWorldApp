import React from "react";
import "./styles.css";
import logo from "../src/assets/logo.jpg";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }
  // onClick function
  onclick = (event) => {
    console.log("save button is clicked ", { event });
    window.open(this.url, "_blank");
  };
  //onChange Event function
  onNameChangeHandler = (event) => {
    console.log("value is ", event.target.value);
    // see the title using setState Method
    this.setState({ userName: event.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img
            src={logo}
            onClick={this.onClick}
            alt="The BridgeLabz logo: A Bridge to Employement through lab works"
          />
        </div>
        <div className="text-box">
          <input onChange={this.onNameChangeHandler} />
        </div>
      </div>
    );
  }
}

export default App;
