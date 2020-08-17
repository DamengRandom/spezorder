import React, { Component, createContext } from "react";
import Cookie from "js-cookie";

const Contexts = createContext();

class StateContext extends Component {
  state = {
    darkmode: false
  };

  componentDidMount() {
    this.setState({
      darkmode: Cookie.get('darkmode') === 'true' ? true : false
    });
  }
  
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
