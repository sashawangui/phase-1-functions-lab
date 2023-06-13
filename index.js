// Code your solution in this file!

function distanceFromHqInBlocks (location){
    let hq= 42;
    if(location > hq){
        return (location - hq);
    }
    else{
        return (hq - location);
    }
}
console.log(distanceFromHqInBlocks(50))


function distanceFromHqInFeet (location){
    return (distanceFromHqInBlocks(location) * 264);
}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(location, end){
    if(end>location){
        return((end-location)*264);
    }
    else{
        return ((location-end)*264);
    }
}
//console.log(distanceTravelledInFeet(42, 30))

function calculatesFarePrice(location, end){
    let distance = distanceTravelledInFeet(location, end)
    if(distance <= 400){
        return 0;
    }
    else if(distance > 400 && distance <= 2000){
        return  ((distance - 400)* 0.02);
    }
    else if(distance >= 2000 && distance <=2500){
        return 25
    }
    else if (distance >= 2500){
        return "cannot travel that far"
    }
}
console.log(calculatesFarePrice(42, 30))
