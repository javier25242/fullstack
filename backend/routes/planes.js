const express = require('express');
const router = express.Router();
const planes = require('../services/planes');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await planes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting plan `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
    try {
      res.json(await planes.create(req.body));
    } catch (err) {
      console.error(`Error while creating plan`, err.message);
      next(err);
    }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await planes.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating plan`, err.message);
      next(err);
    }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await planes.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting plan`, err.message);
      next(err);
    }
});

module.exports = router;