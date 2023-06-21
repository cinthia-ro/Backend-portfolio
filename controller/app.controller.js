const {portfolioModel} = require("../model/portfolio_model");
const {testimonialModel} = require("../model/testimonial_model");


exports.portfolioAppRouter = async (req, res) => {
    try{
        items = await portfolioModel.find({});
        return res.status(200).send({
            message: "sucess",
            data: items
        })

    } catch (error) {
        res.status(500).json({error:"internal server error"});
        
    }
}

exports.testimonialAppRouter = async (req, res) => {
    try{
        items = await testimonialModel.find({});
        return res.status(200).send({
            message: "sucess",
            data: items
        })

    } catch (error) {
        res.status(500).json({error:"internal server error"});
        
    }
}