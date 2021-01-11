import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Jumbotron, Row } from 'react-bootstrap'
import './App.css';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);

    var url = "http://localhost:80/Login/Login/backend/Signup.php";

    axios.post(url, formData)
      .then(res => { 
          console.log(res.data);

          if (res.data == "Singin Success") {
              alert('Signed Up Successfully..!');
              window.location.href = "./Signin";
          }
          
          else if (res.data == "User Exist") {
            alert('User Already Exist..!');
          }

          else {
              alert('Signup Error..!');
          }
        })
        .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="container" fluid="md">
        <Row className="justify-content-md-center">
          <div className="col-md-6">
          <Jumbotron className="jumbotron text-center mt-3">
            <IconContext.Provider value={{ size: '80px' }}>
              <div>
              <FaUserPlus />
              </div>
            </IconContext.Provider>
            <h1>Sign Up</h1>
            <p>
              This is a simple PHP,React Login screen.Please provide a Name & Email bellow..
            </p>
          </Jumbotron>
              <Form className="form" onSubmit= { this.onSubmit }>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={ this.state.name } onChange={ this.onChangeName } required/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={ this.state.email } onChange={ this.onChangeEmail } required/>
              </Form.Group>
              <div className="text-center">
                <Button variant="dark" type="Signup">
                  Submit
                </Button>
              </div>
            </Form>
            <div className="signinNav mt-2">
              Have an Account? <Link to={'/Signin'}>signin</Link>
            </div>
          </div>
        </Row>
        <p className="text-center Copyright">Copyright &copy; 2020 | SHALITHA</p>
      </div>
    );
  }
}
