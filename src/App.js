import React from "react";
import SlideGame from "./components/boxSlideGame.js";
import Portfolio from "./components/portfolio";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSkipped: false, backgroundClass: "" };
  }
  render() {
    return (
      <div className={this.state.backgroundClass}>
        {this.state.isSkipped ? (
          <Portfolio />
        ) : (
          <SlideGame
            skipGame={() => {
              this.setState({ isSkipped: true, backgroundClass: "body" });
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
