import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SuperheroEdit from './pages/SuperheroEdit';
import SuperheroIndex from './pages/SuperheroIndex';
import SuperheroNew from './pages/SuperheroNew';
import SuperheroShow from './pages/SuperheroShow';
import mockSuperheroes from './mockSuperheroes';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      superheroes: mockSuperheroes
    }
  }
  render (){
    return (
      <>
        <Router>
          < Header />
            <Switch>
              <Route exact path= "/" component= { Home }/> 
              <Route path="/superheroedit/:id" component={ SuperheroEdit }/>
              <Route path="/superheroindex" component={ SuperheroIndex } />
              <Route path="/superheronew" component={ SuperheroNew }/>
              <Route path="/superheroshow/:id" component={ SuperheroShow }  />
              <Route component= { NotFound } />
            </Switch>
          < Footer />
        </Router>
      </>
    );
  }
}

export default App;
