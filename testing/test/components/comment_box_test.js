import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Testing CommentBox', () => {

  // matchers reference
  // https://github.com/chaijs/chai-jquery

  it('Component has TextArea', () => {
  //no params() on exist !!
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('Component has Button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
