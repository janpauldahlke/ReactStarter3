import { renderComponent, expect }  from '../test_helper';
import App from '../../src/components/app';

//group similar tests -> App
describe('Testing App', () =>{

  beforeEach(() => {
    //console.log('run App test beforeEach');
  });

  //use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    //helper to render the App Component
    const component = renderComponent(App);
    /*use 'expect' to make an assertion about target
    //  syntax is
    //  expect(component).to.have.class('selector')
    //  keyword(thingToTest).Assertion.matcher(selector)
    */
    expect(component).to.contain('React simple starter');
  });

});
