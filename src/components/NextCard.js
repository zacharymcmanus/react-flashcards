import React, { Component } from "react";
import { Button, Icon } from "react-materialize";

class NextCard extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }

  render(props) {
    return (
      <div className="buttonContainer">
        <Button className="react-blue" waves="light" onClick={this.drawCard}>
          Next Question 
        </Button>
      </div>
    );
  }
}
export default NextCard;
