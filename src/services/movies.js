/* eslint-disable class-methods-use-this */

const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async crateMovie({ movie }) {
    console.log(movie)
    const createMovideID = await this.mongoDB.create(this.collection, movie);
    return createMovideID;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieID = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updatedMovieID;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
