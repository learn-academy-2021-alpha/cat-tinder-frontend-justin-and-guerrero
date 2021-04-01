import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class SuperheroShow extends Component {
    render () {
        const hero = this.props.hero;
        console.log(hero)
        return (
            <>
                <h1>Show</h1>

                <div>Name: {hero.name}</div>
                <div>Age: {hero.age}</div>
                <div>Enjoys: {hero.enjoys}</div>
                <br></br>
                <NavLink
                    to={`/superheroedit/${this.props.hero.id}`}
                >
                    <Button color="secondary">
                        Edit SuperHero Profile
                    </Button>
                </NavLink>
            </>
        )
    }
}
export default SuperheroShow
