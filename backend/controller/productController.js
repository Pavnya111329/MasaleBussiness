
const Product = require("../models/productModel");
const ApiFeature = require("../utils/apiFeatures");
let asyncErrorHandler = require("../middleware/asyncErrorHandler")
//ADD Masale Product

exports.CreateProduct = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        massage: "Product Created Succesfully",
        product
    })
})
//get ALL Product
exports.getAllProduct =asyncErrorHandler( async (req, res) => {
    let product = await Product.find()

    res.status(200).json({
        success: true,
        product,
        massage: "product Get succesfully"
    })
})
//get Masale Product

exports.getsingleProduct = asyncErrorHandler(async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        res.status({
            success: false,
            massage: "Product Not found",
        })
    }
    res.status(200).json({
        success: true,
        product,
        massage: "single product Get succesfully"
    })
})



//UPDATE Masale Product

exports.updateProduct =asyncErrorHandler(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        res.status({
            success: false,
            massage: "Product Not found",
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    })
    res.status(200).json({
        success: true,
        massage: "Product Update Succesfully",
        product
    })
})



//delete Masale Product
exports.deleteProduct =asyncErrorHandler(async (req, res, next) => {
    let product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
        res.status({
            success: false,
            massage: "Product Not found",
        })
    }
    Product.remove(req.params.id)
    res.status(200).json({
        success: true,
        massage: "Product delete Succesfully",
        product
    })
}
)

//Search PRoduct Product
exports.getSearchProduct =asyncErrorHandler(async (req, res) => {

    let apiFeatures = new ApiFeature(Product.find(), req.query).search()
    let product = await apiFeatures.query;

    res.status(200).json({
        success: true,
        product,
        massage: "product Search succesfully"
    })
}) 