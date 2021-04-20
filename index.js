// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    const copyOfDrivers = drivers.slice(0,2);
    return copyOfDrivers
}


function returnLastTwoDrivers(){
    const copyOfDrivers = drivers.slice(2,4);
    return copyOfDrivers;
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
//so whenver passing functions into an array do not use function, (), {}


function createFareMultiplier(num){
    return function(){return num ** 2}
}


const fn = function(){return createFareMultiplier()}

function fareDoubler(fn){
    return fn * 2;
}

function fareTripler(fn){
    return fn * 3;
}

function selectDifferentDrivers(drivers, someFn){
    return someFn(drivers);
}
