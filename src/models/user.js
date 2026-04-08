const mongoose = require('mongoose');

const LanchesSchema = mongoose.Shema({
    nome: {type: String, required: true},
    tipo: {type: String, required: true},
    preco: {type: Integer, required: true} 
})

modules.exports = ProductSchema;