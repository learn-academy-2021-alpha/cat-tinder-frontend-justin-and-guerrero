import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from "react-router-dom"

class SuperheroEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name:"",
                age:"",
                enjoys:""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.updateHero(this.state.form)
        this.setState({ submitted: true })
    }

    render () {
        return (
            <>
                <h1>Edit Superhero</h1>
                <br></br>
                <Form>
                <FormGroup>
                    <Label for="name">Superhero Name</Label>
                    <Input
                     type="text"
                     name="name"
                     value={ this.state.form.name }
                     onChange={ this.handleChange }
                />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Superhero Age</Label>
                    <Input
                      type="number"
                      name="age"
                      value={ this.state.form.age }
                      onChange={ this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="enjoys">This Superhero enjoys?</Label>
                    <Input
                      type="text"
                      name="enjoys"
                      value={ this.state.form.enjoys }
                      onChange={ this.handleChange }
                    />
                </FormGroup>
                <br></br>
                <Button
                    onClick={ this.handleSubmit }
                >
                    Edit Existing Hero
                </Button>
            </Form>
            { this.state.submitted && <Redirect to="/superheroindex" /> }
            </>
        )
    }
}
export default SuperheroEdit