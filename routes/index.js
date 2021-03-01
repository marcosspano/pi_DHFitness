const express = require ('express');
const router = express.Router();

router.get ('/:id', (req, res, next) => {
    let id = req.params.id
    res.send (id);
})

module.exports = router;