let restaurants = []
exports.createRestaurant = function (req, res) {
    restaurants.push({ "restaurantId": req.body.restaurantId, "restaurantName": req.body.restaurantName,"city":req.body.city })
    res.send({ "result": "restaurant added successfully" })
}

exports.getRestaurants = function (req, res) {
    console.log(restaurants)
    if (restaurants.length > 0) {
        res.send({ "restaurants": restaurants })
    } else {
        res.send("Restaurants not found")
    }
}

exports.getRestaurant = function (req, res) {
    if (req.query.restaurantId && restaurants.length>0) {
        for (let i in restaurants) {
            console.log(restaurants[i])
            if (restaurants[i]["restaurantId"] == (req.query.restaurantId)){
                res.send({ "restaurantDetails": restaurants[i] })
            }
        }
    } else {
        res.send("Restaurants not found")
    }
}

exports.deleteRestaurant =  function(req,res){
    if (req.params.restaurantId && restaurants.length>0) {
        for (let i in restaurants) {
            if (restaurants[i].restaurantId == (req.params.restaurantId)){
                restaurants.splice(i,1)
                res.send({"result":"Successfully deleted the restaurant"})
            }
        }
    }else {
        res.send("No restaurants not found")
    }
}

exports.getRestaurantByCity = function(req,res){
    if(req.body.city && restaurants.length>0){
        for (let i in restaurants) {
            if (restaurants[i].city == (req.body.city)){
                res.send({ "restaurantDetails": restaurants[i] })
            }
        }
    }else {
        res.send("No restaurants not found")
    }
}