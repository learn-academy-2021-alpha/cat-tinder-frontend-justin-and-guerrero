import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Footer extends Component {
    render () {
        return (
            <>
            <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-12">Guerrero & Justin's Tinder</h1>
            <p className="lead">Cap Stone Footer</p>
            </Container>
          </Jumbotron>
            </>
        )
    }
}
export default Footer