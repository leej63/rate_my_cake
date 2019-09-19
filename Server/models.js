// MODELS
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes', {useNewUrlParser: true});

const ReviewSchema = new mongoose.Schema({
    rating: {type: Number, min: 1, max: 5, required: [true, "Rating is required!"]},
    comment: {type: String, minlength: 3, required: [true, "Please submit a comment"]}
}, {timestamps: true})

const CakeSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: [true, "Name is required!"]},
    image: {type: String, required: [true, "Please submit photo of cake"]},
    reviews: [ReviewSchema]
}, {timestamps: true})

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;

// You can also use one line to export
// example: module.exports = mongoose.model("Cake", CakeSchema);