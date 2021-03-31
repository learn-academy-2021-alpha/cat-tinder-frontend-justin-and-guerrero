import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';


Enzyme.configure({ adapter: new Adapter()})

describe ('When a page renders', () => {
  it ('displays the Footer heading', () => {
    const footerTest = shallow(<Footer />)
    const headingFind = footerTest.find('h1')
    expect(headingFind.text()).toEqual("Guerrero & Justin's Tinder")
  })
})