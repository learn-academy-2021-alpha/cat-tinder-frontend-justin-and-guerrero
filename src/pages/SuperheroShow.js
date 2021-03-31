import React, { Component } from 'react'

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
            </>
        )
    }
}
export default SuperheroShow
// pseudo