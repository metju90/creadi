import React from 'react';
import Tile from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const initialState = {};

const mockStore = configureStore();
let wrapper;
let store;

describe(' Tile Component', () => {
  beforeEach(() => {
  // creates the store with any initial state or middleware needed
	  store = mockStore(initialState);
    wrapper = shallow(<Tile store={store} />);
	 });

  // ...tests here...
  test(' CSS class changes when hovered', () => {
    const component = renderer.create(<Tile premium="100" title="Testing" />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();

    // re-rendering
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
