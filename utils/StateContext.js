import React, { Component, createContext } from "react";

const Contexts = createContext();

class StateContext extends Component {
  state = {
    user: {},
    testState: 'test state get rendered'
  };

  render() {
    return (
      <Contexts.Provider value={this.state}>
        {this.props.children}
      </Contexts.Provider>
    );
  }
};

const ContextsConsumer = Contexts.Consumer;

export default StateContext;
export { ContextsConsumer };
