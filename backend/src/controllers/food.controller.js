const foodModel = require('../models/food.model');

const storageService = require('../services/storage.service');

const {v4: uuid} = require('uuid');

const likeModel = require("../models/likes.model");

const saveModel = require("../models/save.model");

const { findByIdAndUpdate } = require('../models/foodpartner.model');

async function createFood(req,res){

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

    const foodItem = await foodModel.create({
        name:req.body.name,
        description: req.body.description,
        videos: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food created successfully",
        food: foodItem
    })
}

async function getFoodItems(req,res){
    const foodItems = await foodModel.find({})

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

async function likeFoodItem(req, res) {
    const {foodId} = req.body;
    const user = req.user;
    
    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food:foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc :{likeCount: -1}
    })

    if(isAlreadyLiked){
        await likeModel.deleteOne({
        user: user._id,
        food:foodId
        })
        return res.status(200).json({
            message: "Food unliked successfully"
        })
    }

    const like = await likeModel.create({
        user: user._id,
        food: foodId
        
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc :{likeCount: 1}
    })

    res.status(201).json({
        message: "Food liked successfully",
        like
    })

}

async function saveFoodItem(req, res) {

    const {foodId} = req.body;
    const user = req.user;
    
    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food:foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc :{saveCount: -1}
    })

    if(isAlreadySaved){
        await saveModel.deleteOne({
        user: user._id,
        food:foodId
        })
        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const like = await saveModel.create({
        user: user._id,
        food: foodId
        
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc :{likeCount: 1}
    })

    res.status(201).json({
        message: "Food saved successfully",
        like
    })


}
module.exports = {
    createFood,
    getFoodItems,
    likeFoodItem,
    saveFoodItem
};