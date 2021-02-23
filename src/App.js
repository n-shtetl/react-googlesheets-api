import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      salary: '',
      hobby: '',
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/833003b4-a27e-4b91-a11c-14e4d18ae9b2', this.state)
         .then(response => {
           console.log(response);
         }).catch(error => console.log(error));
  }

  getData = (e) => {
    fetch('https://sheet.best/api/sheets/833003b4-a27e-4b91-a11c-14e4d18ae9b2')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid>
        <Header as="h2">React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Enter your name"></input>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input type="text" name="age" value={age} onChange={this.changeHandler} placeholder='Enter your age' />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input type="text" name="salary" value={salary} onChange={this.changeHandler} placeholder='Enter your salary' />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input type="text" name="hobby" value={hobby} onChange={this.changeHandler} placeholder='Enter your hobby' />
          </Form.Field>

          <Button type="submit" color="blue">Submit!</Button>

        </Form>
        <Button color="green" onClick={this.getData}>Get Data</Button>
      </Container>
    )
  }
}
