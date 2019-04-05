const express=require("express")
const router=express.Router()
const RestC=require('./RestaurantController')

router.post("/restaurants",RestC.createRestaurant)
router.get("/restaurants",RestC.getRestaurants)
router.get("/restaurants/:restaurantId",RestC.getRestaurant)
router.delete("/restaurants/:restaurantId",RestC.deleteRestaurant)
router.get("/restaurants/:city",RestC.getRestaurantByCity)

module.exports=router;