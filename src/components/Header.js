import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Header extends Component {
    render () {
        return (
         <>
           <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Superhero Tinder</h1>
            <p className="lead">Find a connection</p>
            </Container>
          </Jumbotron>
         </>
        )
    }
}
export default Header