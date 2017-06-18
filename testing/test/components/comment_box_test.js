import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Testing CommentBox', () => {

  const component = renderComponent(CommentBox);

  // matchers reference
  // https://github.com/chaijs/chai-jquery

  it('Component has TextArea', () => {
  //no params() on exist !!
    expect(component.find('textarea')).to.exist;
  });

  it('Component has Button', () => {
    expect(component.find('button')).to.exist;
  });
});
