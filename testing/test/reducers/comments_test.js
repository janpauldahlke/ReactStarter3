import { expect } from '../test_helper';
import CommentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Tests the CommentsReducer', () => {

  it('handles action with unknow type', () => {
    //give empty reducer
    //expect(CommentReducer()).to.be.instanceof(Array);
    //eql is a deep structure eql
    expect(CommentReducer()).to.be.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload : 'new test comment'};
    expect(CommentReducer([], action)).to.eql(['new test comment']);
  });
});
