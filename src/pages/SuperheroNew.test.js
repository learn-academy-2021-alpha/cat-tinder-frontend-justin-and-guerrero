import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuperheroNew from './SuperheroNew';


Enzyme.configure({ adapter: new Adapter()})

describe ('When Superhero New renders', () => {
  it ('displays an the new header', () => {
    const superheroNew = shallow(<SuperheroNew />)
    const newHero = superheroNew.find('h1')
    //console.log(something.debug())
    expect(newHero.text()).toEqual('new')
  })
})