const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalExpensesSchema = new Schema({
    item:{
        type: String,
        required: true,
        minlength: 3
    },
    cost:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
},{
    timestamps: true
});

const PeronalExpenses = mongoose.model('PersonalExpenses', personalExpensesSchema);

module.exports = PeronalExpenses;