import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  };

  strike = e => {
    e.preventDefault();
    let newValue = this.state.strikes + 1;
    if (newValue > 2) {
      newValue = 0;
    }
    this.setState({ strikes: newValue });
  };

  ball = e => {
    e.preventDefault();
    let newValue = this.state.balls + 1;
    if (newValue > 3) {
      newValue = 0;
    }
    this.setState({ balls: newValue });
  };

  render() {
    return (
      <>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <button data-testid="strike-button" onClick={this.strike}>
          Strike
        </button>
        <button data-testid="ball-button" onClick={this.ball}>
          Ball
        </button>
        <button onClick={this.addEvent}>Foul</button>
        <button onClick={this.addEvent}>Hit</button>
      </>
    );
  }
}

export default Dashboard;
