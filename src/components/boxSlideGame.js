import React from "react";
import "./../App.css";
import { MDBAnimation } from "mdbreact";
import * as Constant from "./../constants/gameConstants";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSequence: [3, 2, 4, 1, 5, 6],
      overlay: { display: "block" },
      fadeOutAnimation: "",
      fixedButton: { display: "none" }
    };
    this.getRandomArray = this.getRandomArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.canMove = this.canMove.bind(this);
    this.swap = this.swap.bind(this);
    this.startGame = this.startGame.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
    this.gameOver = false;
    this.blankIndex = 6;
    //this.state["blockSequence"] = this.getRandomArray(6);
  }

  getRandomArray = function(len) {
    const map = new Map();
    const arr = Array.from({ length: len - 1 }, () => {
      while (1) {
        const rand = Math.floor(Math.random() * (len - 1)) + 1;
        if (!map.has(rand)) {
          map.set(rand, true);
          return rand;
        }
      }
    });
    arr.push(len);
    return arr;
  };

  handleClick = function(event) {
    if (this.gameOver) {
      return;
    }
    const divClass = event.target.className;
    const divId = event.target.id;
    const index = parseInt(divId["3"]);
    if (!divClass.includes("blank")) {
      const moveIndex = this.canMove(index);
      if (moveIndex !== -1) {
        this.swap(index, moveIndex);
        this.blankIndex = index;
        this.isGameOver();
      }
    }
  };

  handleArrowKeys = function(event) {
    let moveIndex = 0;
    switch (event.keyCode) {
      case 38:
        moveIndex = Constant.UpHashmap.get(this.blankIndex);
        if (moveIndex !== 0) {
          this.swap(this.blankIndex, moveIndex);
        }
        break;
      case 40:
        moveIndex = Constant.DownHashmap.get(this.blankIndex);
        if (moveIndex !== 0) {
          this.swap(this.blankIndex, moveIndex);
        }
        break;
      case 37:
        moveIndex = Constant.LeftHashmap.get(this.blankIndex);
        if (moveIndex !== 0) {
          this.swap(this.blankIndex, moveIndex);
        }
        break;
      case 39:
        moveIndex = Constant.RightHashmap.get(this.blankIndex);
        if (moveIndex !== 0) {
          this.swap(this.blankIndex, moveIndex);
        }
        break;
    }
    if (moveIndex !== 0) {
      this.blankIndex = moveIndex;
      this.isGameOver();
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
    const adjacentArray = Constant.Hashmap.get(index);
    for (const adjacentBlockIndex of adjacentArray) {
      if (this.state.blockSequence[adjacentBlockIndex - 1] === 6) {
        return adjacentBlockIndex;
      }
    }
    return -1;
  };
  startGame = function() {
    this.setState({
      overlay: { display: "none" },
      fixedButton: { display: "block" }
    });
  };

  isGameOver() {
    for (let i = 0; i < Constant.FinalBlockSeq.length; i += 1) {
      if (Constant.FinalBlockSeq[i] !== this.state.blockSequence[i]) {
        this.gameOver = false;
        return false;
      }
    }
    this.gameOver = true;
    this.setState({
      fadeOutAnimation: "bounceOut",
      fixedButton: { display: "none" }
    });
    setTimeout(this.props.skipGame, 1300);
    return true;
  }
  render() {
    const { overlay, blockSequence, fixedButton } = this.state;
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
        <button
          style={fixedButton}
          className="fixed-button"
          onClick={this.props.skipGame}
        >
          Skip
        </button>
        <MDBAnimation type={this.state.fadeOutAnimation} delay="0.3s">
          <div onKeyDown={this.handleArrowKeys} tabIndex="0" id="image">
            {blocks}
          </div>
        </MDBAnimation>

        <div style={overlay} className="overlay ">
          <div className="game-panel">
            <div className="game-panel-content">
              <h3>Welcome to Manish's Portfolio</h3>
              <div>
                <button className="game-button" onClick={this.startGame}>
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
