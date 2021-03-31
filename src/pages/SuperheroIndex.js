import React, { Component } from 'react'

class SuperheroIndex extends Component {
    render () {
        return (
            <>
                <h1>index</h1>
                <ul>
                    {this.props.superheroes.map(superhero => {
                        return (
                            <li key={superhero.id}>
                                <a href={`/superheroshow/${superhero.id}`}>{superhero.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default SuperheroIndex