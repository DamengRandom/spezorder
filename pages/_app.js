// pages/_app.js
import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
// Global CSS
import "../styles.css";
// Global State
import StateContext from "../utils/StateContext";
// Components
import App, { Container } from "next/app";

export default class Root extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <StateContext>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </StateContext>
      </Container>
    );
  }
}
