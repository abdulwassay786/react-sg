import React, { Component } from "react";

export default class Seasons2 extends Component {
  constructor(props) {
    super(props);

    this.state = { num: 0 };

}
    increase() {
        this.setState({
            num: this.state.num + 1
        });
    };
    decrease() {
        this.setState({
            num: this.state.num - 1
        });
    };
    reset(){
        this.setState({
            num: 0
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={(e)=>this.increase(e)}>Increase</button>
        <button onClick={(e)=>this.reset(e)}>Reset</button>
        <button onClick={(e)=>this.decrease(e)}>Decrease</button>
      </div>
    );
  }
}
