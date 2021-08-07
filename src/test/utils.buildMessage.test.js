const assert = require('assert');

const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', () => {
  describe('When receives an entity and an action', () => {
    it('Should the respective message.', () => {
      const result = buildMessage('movie', 'create');
      assert.strictEqual(result, 'movie created');
    });
  });
});
