import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <a href="#" className="navbar-brand">
                <span> <i className={ this.props.icon}></i> {this.props.title}</span>
            </a>
        </div>
        
      </nav>
    )
  }
}

Navbar.defaultProps = {
    icon: "bi bi-github",
    title: "Github Finder"
}

export default Navbar