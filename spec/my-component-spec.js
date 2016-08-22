import React from 'react';
import sinon from 'sinon';
import {mount} from 'enzyme';
import Foo from '../foo.jsx';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc;
global.window = doc.defaultView;

describe('<Foo />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz"/>);
    expect(wrapper.props().bar).toEqual('baz');
    wrapper.setProps({bar: 'foo'});
    expect(wrapper.props().bar).toEqual('foo');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <Foo onButtonClick={onButtonClick}/>
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.callCount).toEqual(1);
    Foo.prototype.componentDidMount.restore();
  });
});