import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        <div>
          {this.props.counterState.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
