const _get = require('lodash.get');
const articlesService = require('../services/news-origin');
const logger = require('../utils/logger');

module.exports = {
  async list(req, res) {
    try {
      const queryParams = req.query || {};
      const articles = await articlesService.fetchArticles(queryParams);
      res.send(articles);
    } catch (err) {
      logger.error(err, `Error: ${_get(err, 'response.data.message')}`);
      res.status(500).end();
    }
  },

  async item(req, res) {
    try {
      const { id } = req.params;
      const queryParams = req.query || {};
      const article = await articlesService.fetchArticlesItem(id, queryParams);
      res.send(article);
    } catch (err) {
      logger.error(err, `Error: ${_get(err, 'response.data.message')}`);
      res.status(500).end();
    }
  },
};
