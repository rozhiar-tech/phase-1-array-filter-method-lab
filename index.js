// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr,str){

    const newArr= arr.filter(function(driver){
        if(str.toLowerCase()===driver.toLowerCase()){
            return driver
        }
    })
    return newArr

}

const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function fuzzyMatch(arr,str){
    const newArr= arr.filter(function(driver){
        if(driver.slice(0,2)===str){
            return driver
        }
    })
    return newArr
}
const drivers3 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
function matchName(arr,str){
    const newArr= arr.filter(function(driver){
        if(driver.name===str){
            return driver
        }
    })
            return newArr

}