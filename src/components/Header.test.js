import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';


Enzyme.configure({ adapter: new Adapter()})

describe ('When a page renders', () => {
  it ('displays the App heading', () => {
    const headerTest = shallow(<Header />)
    const headingFind = headerTest.find('h1')
    expect(headingFind.text()).toEqual("Superhero Tinder")
  })
})