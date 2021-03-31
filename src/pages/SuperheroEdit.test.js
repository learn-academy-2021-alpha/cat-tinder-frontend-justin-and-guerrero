import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuperheroEdit from './SuperheroEdit';


Enzyme.configure({ adapter: new Adapter()})

describe ('When Superhero Edit renders', () => {
  it ('displays an edit form', () => {
    const superheroEdit = shallow(<SuperheroEdit />)
    const editHeading = superheroEdit.find('h1')
    expect(editHeading.text()).toEqual('edit')
  })
})