/*  TODO rewrite test_helper
  1. set up testing env to run like a browser
  2. build 'renderComponent' helper, that renders a react class
  3. build helper for simulating events
  4. set up chaiJquery
*/


import jsdom from 'jsdom';
import _$ from 'jquery';


//create fake html and assign it to global (scope) document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView#Syntax
global.window = global.document.defaultView;
//wire up jquery and jsdom
const $ = _$(global.window);
