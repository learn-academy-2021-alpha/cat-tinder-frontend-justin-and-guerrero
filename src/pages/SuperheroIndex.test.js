import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuperheroIndex from './SuperheroIndex';


Enzyme.configure({ adapter: new Adapter()})

describe ('When Superhero Index renders', () => {
  it ('displays an the index header', () => {
    const superheroIndex = shallow(<SuperheroIndex />)
    const tinder = superheroIndex.find('h1')
    expect(tinder.text()).toEqual('index')
  })
})