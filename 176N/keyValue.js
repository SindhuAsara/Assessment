const myObj1={restaurantId:1,restaurantName:"chipotle",formattedAddress:"Morrisville, NC"}
const myObj2={type:"countryCode",value:"+91"}

function printKeyValue(input){
console.log("output:")
for(let i of Object.keys(input)){
console.log(i+":"+input[i])
}
}
printKeyValue(myObj1)
printKeyValue(myObj2)



