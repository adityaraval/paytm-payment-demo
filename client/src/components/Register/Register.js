import React from "react";
import "./Register.css";
import axios from "axios";
import PayNow from "../PayNow";

export default class Register extends React.Component {
  state = {
    users: [],
    id: "",
    name: "",
    amount: "",
    counter: 0,
    paytmresponse: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      //id: `${this.state.counter++}`,
      name: this.state.name,
      amount: this.state.amount
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newUser);

      axios
        .post("http://localhost:9000/wallet", body, config)
        .then(response => {
          this.setState({
            paytmresponse: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }

    const updatedusers = [...this.state.users, newUser];

    this.setState(
      {
        users: updatedusers,
        id: newUser.id,
        name: "",
        amount: ""
      },
      () => {}
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3">
          <h1 className="title">Registration Form</h1>
          <p className="fill-form">
            <strong>*Please fill the required fields in the form below.</strong>
          </p>
          <form onSubmit={this.onSubmit} className="register-form">
            <div className="form-group">
              <label className="label-form">Name*</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="form-control"
                placeholder="Enter name"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label className="label-form">Amount*</label>
              <input
                type="text"
                name="amount"
                value={this.state.amount}
                className="form-control"
                placeholder="Enter amount"
                onChange={this.onChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-submit"
            >
              Submit
            </button>
          </form>
        </div>
        <PayNow paymentresponse={this.state.paytmresponse} />
      </React.Fragment>
    );
  }
}
