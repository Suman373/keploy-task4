const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Ebook title is required"]
    },
    link:{
        type:String,
        required:[true, "Ebook link is required"]
    }
},{
    timestamps:true
});

module.exports = mongoose.model('EbookModel', EbookSchema);