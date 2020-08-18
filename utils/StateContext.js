import React, { Component, createContext } from "react";

const Contexts = createContext();

class StateContext extends Component {
  state = {
    darkmode: true
  };
  
  toggleMode = () => {
    this.setState({
      darkmode: !this.state.darkmode
    });
  };

  render() {
    return (
      <Contexts.Provider value={{
        state: this.state,
        toggleMode: this.toggleMode
      }}>
        {this.props.children}
      </Contexts.Provider>
    );
  }
};

const ContextsConsumer = Contexts.Consumer;

export default StateContext;
export { ContextsConsumer };
