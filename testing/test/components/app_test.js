import { renderComponent, expect }  from '../test_helper';
import App from '../../src/components/app';

//group similar tests -> App
describe('Testing App', () =>{

  let component
  beforeEach(() => {
    component = renderComponent(App);
  });

  //use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    /*use 'expect' to make an assertion about target
    //  syntax is
    //  expect(component).to.have.class('selector')
    //  keyword(thingToTest).Assertion.matcher(selector)
    */
    expect(component).to.contain('React simple starter');
  });

});
