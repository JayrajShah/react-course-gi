import { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Somthing Went wrong</p>;
    }
    return this.props.children;
  }
}
