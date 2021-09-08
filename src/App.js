import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleAdd = () => {
    let counters = [...this.state.counters];
    let newId =
      counters.length === 0 ? 0 : counters[counters.length - 1].id + 1;
    counters.push({ id: newId, value: 0 });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called!", counterId);
    this.setState({
      counters: this.state.counters.filter(({ id }) => !(id === counterId)),
    });
    console.log("The array is ", this.state.counters);
  };

  handleIncrement = (counter) => {
    console.log("handleIncrement Handler Called!", counter);
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const zeroCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: zeroCounters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar numCounters={this.state.counters.length} />
        <main>
          <Counters
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counterState={this.state}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
