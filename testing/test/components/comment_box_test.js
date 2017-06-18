import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Testing CommentBox', () => {

  //give component let (it changes in each beforeEach)
  let component;

  beforeEach((done) => {
    //reassign render Element on component, call done();
    component = renderComponent(CommentBox);
    done();
  });

  // matchers reference
  // https://github.com/chaijs/chai-jquery
  it('has a the correct className', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Component has TextArea', () => {
  //no params() on exist !!
    expect(component.find('textarea')).to.exist;
  });

  it('Component has Button', () => {
    expect(component.find('button')).to.exist;
  });

  //wrap related tests in a nested describe()
  describe('test entering text in the area', () => {

    beforeEach((done) => {
      //simulate('eventname', 'fakeText')
      component.find('textarea').simulate('change', 'new comment');
      done();
    })

    it('shows text that is entered by the user', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      //emtpy field by submitting
      component.find('button').simulate('click');
      //setTimeOut? or callback nesting
      //expect(component.find('textarea')).to.have.value('');
    });
  });
});
