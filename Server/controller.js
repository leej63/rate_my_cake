// VIEWS in DJANGO - this is where the logic goes
const Cake = require('./models');                       // double check if correct

module.exports = {
    all_cakes: (req, res)=>{
        Cake.find({})
            .then(data=>res.json({cake_list: data, message:'success'}))
            .catch(err=>res.json({cake_list: err, message: 'failure'}))
    },

    create_cake: (req, res)=>{
        Cake.create(req.body)
            .then(data=>res.json({cake_list: data, message:'success'}))
            .catch(err=>res.json({cake_list: err, message: 'failure'}))
    },

    one_cake: (req, res)=>{
        Cake.findById(req.params.id)
            .then(data=>res.json({cake_list: data, message:'success'}))
            .catch(err=>res.json({cake_list: err, message: 'failure'}))
    },

    // Using this for creating a review
    update_cake: (req, res)=>{
        Cake.update({_id: req.params.id}, {$push: {reviews: req.body}}, {runValidators: true})
            .then(data=>res.json({cake_list: data, message:'success'}))
            .catch(err=>res.json({cake_list: err, message: 'failure'}))
    },

    delete_cake: (req, res)=>{
        Cake.findByIdAndRemove(req.params.id)
            .then(data=>res.json({cake_list: data, message:'success'}))
            .catch(err=>res.json({cake_list: err, message: 'failure'}))
    },

    // create_review: (req, res)=>{
    //     Cake.findByIdAndUpdate(req.params.id, {$push: {rating: req.body.rating, comment: req.body.comment}}, {runvalidators: true, new: true})
    //         .then(data=>res.json({cake_list: data, message:'success'}))
    //         .catch(err=>res.json({cake_list: err, message: 'failure'}))
    // }
}