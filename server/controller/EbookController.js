const EbookModel = require('../models/EbookModel');


const getAllEbooks = async(req,res)=>{
    try {
        const savedBooks = await EbookModel.find({});
        if(savedBooks){
            res.status(200).json(savedBooks);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}


const addEbook = async(req,res)=>{
    try {
        const {title, link} = await  req.body;
        if(await EbookModel.findOne({title}) || await EbookModel.findOne({link})){
            throw Error("Ebook already exists!");
        }
        await EbookModel.create(req.body);
        res.status(201).json({message:"Ebook created successfully!"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }   
}

module.exports = {getAllEbooks, addEbook};