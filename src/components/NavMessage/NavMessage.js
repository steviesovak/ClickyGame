import React, { Component } from "react";
import "./NavMessage.css";


class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

// if else to see if selection was correct / incorrect

  componentDidUpdate({ score, topScore }, prevState) {
    const newState = { animating: true };

    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }
// display correct / incorrect messages

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "You guessed correctly!";
    case "incorrect":
      return "You guessed incorrectly!";
    default:
      return "Click an image to begin!";
    }
  };

  render() {
    return (
      <li
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
