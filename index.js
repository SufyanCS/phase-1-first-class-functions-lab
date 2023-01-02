// Code your solution in this file!
const ScuberDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnFirstTwoDrivers = function(ScuberDrivers){
    const NewSucberDrivers = [...ScuberDrivers]
    NewSucberDrivers.pop()
    NewSucberDrivers.pop()
    return NewSucberDrivers
}
const returnLastTwoDrivers = function(ScuberDrivers){
    return ScuberDrivers.slice(-2)
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(multiplyValue){
    return function (value){
        return multiplyValue * value;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function (FirstTowDrivers, LastTwoDrivers){
    return LastTwoDrivers(FirstTowDrivers);
}