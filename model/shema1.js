const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    Nome: String,
    Prenome: String,
    Email: String,
    groupe:Number,
    module:String,
    nature:String,
    noteafiches:Number,
    notereel:Number,
  });

  
  const Projete = mongoose.model("Projetee", articleSchema);
  module.exports = Projete;
