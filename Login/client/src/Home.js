import React, {Component}from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Table, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: []
    }

    this.displayTable = this.displayTable.bind(this);
  }

  componentDidMount() {
    var url = "http://localhost:80/PHP_REACT/backend/UserList.php";

    axios.get(url)
      .then(res => { 
          this.setState({ userList: res.data });
          console.log(this.state.userList); 
        })
        .catch(err => console.log(err));
  }

  displayTable() {
    return this.state.userList.map(function(object, i) {
      return <tbody><td>{ object.id }</td><td>{ object.name }</td><td>{ object.email }</td></tbody>;
    });
  }
  

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Link to={'/Signin'}>
              <Button variant="dark" className="mt-3">
                Logout
              </Button>
            </Link>
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              
                { this.displayTable() }
              
            </Table>
            </Row>
        </Container>
        <p className="text-center Copyright">Copyright &copy; 2020 | SHALITHA</p>
      </div>
    );
  }
}
