const express = require('express');

const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'Movies listed!'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieID', async (req, res, next) => {
    const { movieID } = req.params;
    try {
      const movies = await moviesService.getMovie({ movieID });

      res.status(200).json({
        data: movies,
        message: 'Movie retrieved!'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    console.log(req)
    const { body: movie } = req;
    try {
      const createMovieID = await moviesService.crateMovie({ movie });

      res.status(201).json({
        data: createMovieID,
        message: 'Movie created!'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieID', async (req, res, next) => {
    const { movieID } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieID = await moviesService.updateMovie({
        movieID,
        movie
      });

      res.status(200).json({
        data: updatedMovieID,
        message: 'Updated Movie'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieID', async (req, res, next) => {
    const { movieID } = req.params;
    try {
      const removedMovieID = await moviesService.deleteMovie({ movieID });

      res.status(200).json({
        data: removedMovieID,
        message: 'Removed Movie!'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
