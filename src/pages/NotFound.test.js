import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';


Enzyme.configure({ adapter: new Adapter()})

describe ('When notFound renders', () => {
  it ("displays an error message saying 'notFound'", () => {
    const notFound = shallow(<NotFound />)
    const found = notFound.find('h1')
  
    expect(found.text()).toEqual('NotFound')
  })
})