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
});
