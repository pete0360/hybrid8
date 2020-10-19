//name: Ben Peterkins
//email: pete0360@algonquinlive.com
//date: 18/10/20
const { characters } = require('./data');
const data = require('./data');
let log = console.log; 



let chars =  characters.filter((item) => {

let charsLowerCase = item.race.toLocaleLowerCase('en-CA'); 
if(charsLowerCase.indexOf('s') == 0 ){ 
    return true; 
} return false; 

});
log(chars); 

let charsSorted = chars.sort((a, b) => { 
if (a.name > b.name) return 1; 
else if (b.name > a.name) return -1; 
return 0; 
}); 
log (charsSorted);