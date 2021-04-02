import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SuperheroIndex extends Component {
    render () {
        return (
            <>
                <h1>index</h1>
                <ul>
                    {this.props.superheroes.map(superhero => {
                        return (
                            <li key={superhero.id}>
                                <NavLink to={`/superheroshow/${superhero.id}`}>{superhero.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default SuperheroIndex
