import React from "react";
import "./../App.css";
import { func } from "prop-types";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSequence: [3, 2, 4, 1, 5, 6],
      overlay: { display: "block" }
    };
    this.handleClick = this.handleClick.bind(this);
    this.canMove = this.canMove.bind(this);
    this.swap = this.swap.bind(this);
    this.startGame = this.startGame.bind(this);
    this.skipGame = this.skipGame.bind(this);

    this.hashmap = new Map([
      [1, [2, 4]],
      [2, [1, 3, 5]],
      [3, [2, 6]],
      [4, [1, 5]],
      [5, [2, 4, 6]],
      [6, [3, 5]]
    ]);
  }

  handleClick = function(event) {
    const divClass = event.target.className;
    const divId = event.target.id;
    const index = parseInt(divId["3"]);
    if (!divClass.includes("blank")) {
      const moveIndex = this.canMove(index);
      if (moveIndex !== -1) {
        this.swap(index, moveIndex);
      }
    }
  };

  swap = function(index, moveIndex) {
    const array = this.state.blockSequence;
    const temp = array[index - 1];
    array[index - 1] = array[moveIndex - 1];
    array[moveIndex - 1] = temp;
    this.setState({ blockSequence: array, overlayOpacity: 1 });
  };
  canMove = function(index) {
    const adjacentArray = this.hashmap.get(index);
    for (const adjacentBlockIndex of adjacentArray) {
      if (this.state.blockSequence[adjacentBlockIndex - 1] === 6) {
        return adjacentBlockIndex;
      }
    }
    return -1;
  };
  startGame = function() {
    this.setState({ overlay: { display: "none" } });
  };
  skipGame = function() {
    console.log("Skip Game");
  };
  render() {
    const { overlay, blockSequence } = this.state;
    const blocks = blockSequence.map((block, index) => {
      return (
        <div
          key={index}
          index={index}
          id={`pos${index + 1}`}
          onClick={this.handleClick}
          className={`sq${block} imdiv ${block === 6 ? "blank" : ""}`}
        />
      );
    });
    return (
      <div>
        <div id="image">{blocks}</div>
        <div style={overlay} className="overlay ">
          <div className="game-panel">
            <div className="game-panel-content">
              <h3>Welcome to Manish's Portfolio</h3>
              <div>
                <button className="game-button text" onClick={this.startGame}>
                  Start Game
                </button>
              </div>
              <button
                className="game-button text"
                onClick={this.props.skipGame}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
