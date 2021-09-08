import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatState()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-info btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-warning btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning " : "bg-primary";
    return classes;
  };

  formatState = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
