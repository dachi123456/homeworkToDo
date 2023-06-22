import React, { Component } from "react";
import "./todo.css";
import TodoList from "./todoList";
import Finished from "./finished";

class Todo extends Component {
  state = {
    inputValue: "",
    plan: [],
    finished: []
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  };

  addPlan = (event) => {
    event.preventDefault();
    const newPlan = {
      id: this.state.plan.length + 1,
      name: this.state.inputValue
    };

    this.setState((prevState) => ({
      plan: [...prevState.plan, newPlan],
      inputValue: ""
    }));
  };

  finish = (id) => {
    const finishedItem = this.state.plan.find((item) => item.id === id);
    const updatedPlan = this.state.plan.filter((item) => item.id !== id);

    this.setState((prevState) => ({
      plan: updatedPlan,
      finished: [...prevState.finished, finishedItem]
    }));
  };

  deleteFinished = (id) => {
    const updatedFinished = this.state.finished.filter((item) => item.id !== id);
    this.setState({
      finished: updatedFinished
    });
  };

  returnToPlan = (id) => {
    const returnedItem = this.state.finished.find((item) => item.id === id);
    const updatedFinished = this.state.finished.filter((item) => item.id !== id);

    this.setState((prevState) => ({
      plan: [...prevState.plan, returnedItem],
      finished: updatedFinished
    }));
  };

  render() {
    return (
      <div className="main">
        <section className="plan-section">
          <form className="todo-add">
            <input
              type="text"
              className="add-input"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <button className="add-btn" onClick={this.addPlan}>
              Add
            </button>
          </form>
          {this.state.plan.map((plan) => (
            <TodoList
              name={plan.name}
              key={plan.id}
              id={plan.id}
              action={this.finish}
            />
          ))}
        </section>

        <section className="finished-section">
          {this.state.finished.map((finishedItem) => (
            <Finished
              name={finishedItem.name}
              key={finishedItem.id}
              id={finishedItem.id}
              deleteFinished={this.deleteFinished}
              returnToPlan={this.returnToPlan}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Todo;