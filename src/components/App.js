import React from "react";
import Task from "./Form/Task";
import axios from 'axios';

class App extends React.Component {

  state = {
    title: '',
    description: '',
    expiry: '',
    reward: '',
    workers: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();
    
    const payload = {
      title: this.state.title,
      decision: this.state.decision,
      expiry: this.state.expiry,
      reward: this.state.reward,
      workers: this.state.workers
    };

    axios({
      url: 'http://localhost:8080/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
    })
    .catch(() => {
      console.log('Error');
    });

  };

  render() {

    console.log('State: ', this.state);

    return (
      <div>
        <Task />
        <form className="formContainer">
        
        <div className="form-group">
        <h4>Describe your task to workers</h4>
        <form onSubmit={this.submit}>
          <div className="form-label">
            <p>Title</p>
            <input 
              type="text"
              name="title"
              placeholder="Enter task title"
              style={{ width: "1270px" }}
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-label">
            <p>Description</p>
            <input
              type="text"
              name="description"
              placeholder="Enter task description"
              style={{ width: "1270px" }}
              value={this.state.description}
              onChange={this.handleChange}
            >
            </input>
          </div>
          <div className="form-label">
            <p>Expiry date</p>
            <input
              type="text"
              name="expiry"
              style={{ width: "1270px" }}
              value={this.state.description}
              onChange={this.handleChange}
            >
            </input>
          </div>
          <br/><br/>

          <h4>Worker requirment</h4>
          <div className="form-label">

          </div>

          <div className="form-label">
            <p>Reward per response</p>
            <input
              type="text"
              name="description"
              style={{ width: "1270px" }}
              value={this.state.description}
              onChange={this.handleChange}
            >
            </input>
          </div>
          <div className="form-label">
            <p>Number of workers</p>
            <input
              type="text"
              name="expiry"
              style={{ width: "1270px" }}
              value={this.state.description}
              onChange={this.handleChange}
            >
            </input>
          </div>

          <button>Submit</button>
        </form>
      </div>
      </form>
      </div>
    );
  }
}

export default App;
