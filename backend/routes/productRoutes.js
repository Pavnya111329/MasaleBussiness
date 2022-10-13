const express = require("express")
const { getAllProduct, CreateProduct, updateProduct, deleteProduct, getsingleProduct, getSearchProduct } = require("../controller/productController")

const router = express.Router()

router.route("/product").get(getAllProduct)
router.route("/product/new").post(CreateProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getsingleProduct)
router.route("/product/search").get(getSearchProduct)



module.exports = router