/* eslint-disable class-methods-use-this */
const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async crateMovie() {
    const createMovideID = await Promise.resolve(moviesMock[0].id);
    return createMovideID;
  }

  async updateMovie() {
    const updatedMovieID = await Promise.resolve(moviesMock[0].id);
    return updatedMovieID;
  }

  async deleteMovie() {
    const deleteMovieID = await Promise.resolve(moviesMock[0].id);
    return deleteMovieID;
  }
}

module.exports = MoviesService;
