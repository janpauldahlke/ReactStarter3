/*  TODO rewrite test_helper
  1. set up testing env to run like a browser
  2. build 'renderComponent' helper, that renders a react class
  3. build helper for simulating events
  4. set up chaiJquery
*/

import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';


//------------//
//create fake html and assign it to global (scope) document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView#Syntax
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
//wire up jquery and jsdom //wrap an instance of jq and bind to global.window
const $ = jquery(window);
//------------//

//------------//
//seutp chaiJquery
// https://github.com/chaijs/chai-jquery
chaiJquery(chai, chai.util, $);
//------------//


//------------//
//renderHelper()
function renderComponent(ComponentClass, props = {}, state = {}) {
  //"copy" of the class as instance (rendered version)
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ createStore(reducers, state) }>
      <ComponentClass {...props} />
    </Provider>
  );
  //get acces to DOM
  return $(ReactDOM.findDOMNode(componentInstance)); //produces the HTML)
//------------//
}
//------------//
// @callback simulate
// @param  {String} eventName
// @params {String} value

//add function to $ named simulate, that every instance of $
//https://facebook.github.io/react/docs/test-utils.html#simulate
$.fn.simulate = function(eventName, value) {

  if(value) {
    this.val(value);
  }
  //Simulate[change]!! contemplate
  //this[0] only on th first element
    TestUtils.Simulate[eventName](this[0]);
}
//------------//


//
export { renderComponent, expect };
