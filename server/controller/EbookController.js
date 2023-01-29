const mongoose = require('mongoose');
const EbookModel = require('../models/EbookModel');


const getAllEbooks = async(req,res)=>{
    try {
        const savedBooks = await EbookModel.find({});
        if(savedBooks){
            res.status(200).json(savedBooks);
        }else{
            throw Error({message:'Could not get books'});
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}


const addEbook = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }   
}

module.exports = {getAllEbooks, addEbook};