var express = require('express')
var router = express.Router();
var movies = require('.moduels/movies')

router.patch('/movies/:id', async (req, res) => {
    const imovie = await Movie.findOne({ _id: req.params.id })
    imovie.name = req.body.name
    imovie.rating = req.body.rating
    await imovie.save((err, msg) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        else {
            res.status(200).json({
                msg: msg
            })
        }
    })

})