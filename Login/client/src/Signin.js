import React, {Component}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Jumbotron, Row } from 'react-bootstrap';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Signin extends Component {
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

    var url = "http://localhost:80/Login/Login/backend/Signin.php";

    axios.post(url, formData)
      .then(res => {
        console.log(res.data);

        if (res.data == "Signin Success") {
            window.location.href = './Home';
        }
        
        else {
            alert('User Does not Exist..!');
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
                    <FaUserCircle />
                  </div>
                </IconContext.Provider>
                <h1>Sign In</h1>
                <p>
                  This is a simple PHP,React Login screen.Please provide a Name & Email bellow..
                </p>
              </Jumbotron>
              <Form onSubmit= { this.onSubmit }>
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
              Need an Account? <Link to={'/Signup'}>signup</Link>
            </div>
            </div>
          </Row>
          <p className="text-center Copyright">Copyright &copy; 2020 | SHALITHA</p>
      </div>
    );
  }
}
