import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Testing CommentList', () => {

  let component;

  beforeEach((done) => {
    //define props
    const props = { comments: [ '1st comment' , '2nd new comment', 'foo' ]};
    component = renderComponent(CommentList, null, props);
    done();
  });

  it('has the correct classname', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows an <li> for each comment', () => {
    //due 2 comments in the props.comments object
    expect(component.find('li').length).to.equal(3);
  });

  it('it shows each comment text, that is provided', () => {
    //due first comment
    //expect(component.find('li')[0]).to.have.value('1st comment');

    //hardcoded TODO improve on dynammic structures?
    expect(component).to.contain('1st comment');
    expect(component).to.contain('2nd new comment');
    expect(component).to.contain('foo');
  });

});
