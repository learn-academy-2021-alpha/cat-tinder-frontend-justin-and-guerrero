
import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
  let renderedApp;
  beforeEach(() => {
    // arrange
    renderedApp = shallow(<App />);
  });

  it ('displays an edit form', () => {
      const renderedEdit = renderApp.find('SuperheroEdit')
      
      expect(renderedEdit).toEqual(1)
  })
})