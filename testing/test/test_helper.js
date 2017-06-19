/*  TODO rewrite test_helper
  1. set up testing env to run like a browser
  2. build 'renderComponent' helper, that renders a react class
  3. build helper for simulating events
  4. set up chaiJquery
*/

import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//create fake html and assign it to global (scope) document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView#Syntax
global.window = global.document.defaultView;
//wire up jquery and jsdom //wrap an instance of jq and bind to global.window
const $ = jquery(global.window);

//renderHelper()
function renderComponent(ComponentClass, props, state) {
  //"copy" of the class as instance (rendered version)
  const componentInstance = TestUtils.renderIntoDocument(
    //wrap this with Provider and create store
    //createStore = connect with 2
    <Provider store={ createStore(reducers, state) }>
      //spread operator to bind props to toplevel
      // dont do !! props = { props} the call would be ComponentClass.props.props
      <ComponentClass {...props} />
    </Provider>
  );
  //get acces to DOM
  return $(ReactDOM.findDOMNode(componentInstance)); //produces the HTML)
}



//
export {renderComponent, expect};
