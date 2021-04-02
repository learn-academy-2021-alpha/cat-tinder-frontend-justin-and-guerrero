import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SuperheroEdit from './pages/SuperheroEdit';
import SuperheroIndex from './pages/SuperheroIndex';
import SuperheroNew from './pages/SuperheroNew';
import SuperheroShow from './pages/SuperheroShow';
//import mockSuperheroes from './mockSuperheroes';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      superheroes: []
    }
  }

  componentDidMount(){
    this.superheroIndex()
  }

  superheroIndex = () => {
    fetch("http://localhost:3000/superheros")
    .then(response => {
      return response.json()
    })
    .then(superheroArray => {
      console.log(superheroArray)
      this.setState({ superheroes: superheroArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewHero = (newhero) => {
    console.log(newhero)
  }

  updateHero = (editHero) => {
    console.log(editHero)
  }

  render (){
    return (
      <>
        <Router>
          < Header />
            <Switch>
              <Route exact path= "/" component= { Home }/> 
              <Route path="/superheroindex" render= { () => <SuperheroIndex superheroes={ this.state.superheroes } /> } />
              <Route path="/superheroshow/:id" render= { (props) => {
                const id = parseInt(props.match.params.id);
                const foundHero = this.state.superheroes.find((hero) => hero.id === id);
                return <SuperheroShow hero={foundHero}/>}
              }/>
              <Route path="/superheronew" render= { (props) => {
                return <SuperheroNew createNewHero={ this.createNewHero }/> 
              }}/>
              <Route path="/superheroedit/:id" render= { (props) => {
                return <SuperheroEdit updateHero={ this.updateHero }/> 
              }}/>
              <Route component= { NotFound } />
            </Switch>
          < Footer />
        </Router>
      </>
    );
  }
}

export default App;
