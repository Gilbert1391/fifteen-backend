import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Nav from "./nav";

class Header extends Component {
  state = {
    show: false
  };

  handleSetActive = () => {
    this.setState({ show: true });
  };

  handleSetInactive = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo__heading">Fifteen</span>
        </div>
        <nav>
          <Nav
            onActive={this.handleSetActive}
            onInactive={this.handleSetInactive}
          />
        </nav>
        <Fade top collapse when={this.state.show}>
          <nav className="sticky">
            <Nav
              onActive={this.handleSetActive}
              onInactive={this.handleSetInactive}
            />
          </nav>
        </Fade>
      </header>
    );
  }
}

export default Header;
