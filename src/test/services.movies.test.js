const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMocks, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', () => {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMocks
  });

  const moviesService = new MoviesService();

  describe('When getMovies method is called.', async () => {
    it('Should call the getAll MongoLib methods.', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('Should return an array of movies.', async () => {
      const result = await moviesService.getMovies({});
      assert.strictEqual(moviesMock, result);
    });
  });
});
