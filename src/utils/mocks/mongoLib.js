/* eslint-disable class-methods-use-this */

const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMocks {
  getAll(coll, query) {
    return getAllStub(coll, query);
  }

  create(coll, data) {
    return createStub(coll, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMocks
};
