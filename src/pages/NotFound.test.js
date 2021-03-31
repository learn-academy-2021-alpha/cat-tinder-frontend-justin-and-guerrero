import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';


Enzyme.configure({ adapter: new Adapter()})

describe ('When notFound renders', () => {
  it ('displays the NotFound message', () => {
    const notFound = shallow(<NotFound />)
    const found = notFound.find('h1')
    //console.log(something.debug())
    expect(found.text()).toEqual('NotFound')
  })
})