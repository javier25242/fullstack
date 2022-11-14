const express = require('express');
const router = express.Router();
const plan = require('../services/plan');


/* GET plan */
router.get('/', async function(req, res, next) {
  try {
    res.json(await plan.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting plan `, err.message);
    next(err);
  }
});

/* POST plan */
router.post('/', async function(req, res, next) {
    try {
      res.json(await plan.create(req.body));
    } catch (err) {
      console.error(`Error while creating plan`, err.message);
      next(err);
    }
});

/* PUT plan */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await plan.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating plan`, err.message);
      next(err);
    }
});

/* DELETE plan */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await plan.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting plan`, err.message);
      next(err);
    }
});

module.exports = router;