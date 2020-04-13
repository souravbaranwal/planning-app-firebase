import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
