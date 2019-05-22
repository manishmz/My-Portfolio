import React from "react";
import SlideGame from "./components/boxSlideGame.js";
import Portfolio from "./components/portfolio";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSkipped: false, backgroundClass: "" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    console.log(`width: ${window.innerWidth}, height: ${window.innerHeight}`);
    if (window.innerWidth <= 990) {
      this.setState({ isSkipped: true, backgroundClass: "body" });
    }
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
