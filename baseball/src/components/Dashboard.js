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
  };

  render() {
    return (
      <>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.addEvent}>Ball</button>
        <button onClick={this.addEvent}>Foul</button>
        <button onClick={this.addEvent}>Hit</button>
      </>
    );
  }
}

export default Dashboard;
