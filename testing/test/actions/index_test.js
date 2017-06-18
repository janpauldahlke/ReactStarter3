//goofy filename to reflect prject structures

import { expect } from '../test_helper';
import { SAVE_COMMENT} from '../../src/actions/types';
// webpack points to index so: ../../src/actions/index
import { saveComment} from '../../src/actions/index'

describe('Testing actions', () => {

  describe('Action: save a comment', () => {

    let action;

    it('has the correct Type', () => {
      action = saveComment();
      //console.log(action);
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      action = saveComment('new saved comment');
      expect(action.payload).to.equal('new saved comment');
    });

  });
});
