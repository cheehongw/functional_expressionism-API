const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dishSchema = new Schema({
    name: String,
    price: { type: Number, required: true },
    displayImage: String,
    rating: { type: Number, min: 0, max: 5 },
    desc: String,

    stall: { type: Schema.Types.ObjectId, ref: 'Stall', required: true }

})

dishSchema
    .virtual('url')
    .get( () => {
        return '/catalog/dish/' + this._id;
    });

module.exports = mongoose.model('Dish', dishSchema);