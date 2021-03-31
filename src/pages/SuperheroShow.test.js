import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuperheroShow from './SuperheroShow';


Enzyme.configure({ adapter: new Adapter()})

describe ('When Superhero Show renders', () => {
  it ('displays the show header', () => {
    const superheroShow = shallow(<SuperheroShow />)
    const newShow = superheroShow.find('h1')
    //console.log(something.debug())
    expect(newShow.text()).toEqual('show')
  })
})