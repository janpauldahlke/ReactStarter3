import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Testing CommentList', () => {

  let component;

  beforeEach((done) => {
    component = renderComponent(CommentList);
    done();
  });

  it('has the correct classname', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows an <li> for each comment', () => {

  });

  it('it shows each comment, that is provided', () => {

  });
  
});
