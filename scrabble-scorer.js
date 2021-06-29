// // inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

// const input = require("readline-sync");

// const oldPointStructure = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
// };

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//  }

// // your job is to finish writing these functions and variables that we've named //
// // don't change the names or your program won't work as expected. //

// function initialPrompt() {
//    let alpha = 'abcdefghijklmnopqrstuvwxyz ';
//    alpha = alpha.split('')
//    console.log(alpha)
//    console.log("Let's play some scrabble!");
//    let word = '';
//    while(!word){
//      word = input.question("Enter a word to score: ")
//      for(let i = 0; i < word.length; i++){
//        if(!alpha.includes(word[i]))
//         word = '';
//      }
//    }
//    return word
//   //  console.log(oldScrabbleScorer(word))
// };

// function transform(oldPointStructure) {
//   let newObject = {}
//   for(let item in oldPointStructure){
//     // console.log(item)
//     for(let i = 0; i < oldPointStructure[item].length; i++){
//       // console.log(oldPointStructure[item][i])
//       newObject[oldPointStructure[item][i].toLowerCase()] = Number(item);
//     }
//   }
//   return newObject
// };

// let newPointStructure = transform(oldPointStructure);
// newPointStructure[' '] = 0;
// console.log(newPointStructure)
// // console.log(newPointStructure)

// let simpleScore = {
//   name: 'Simple Score',
//   description: 'Each letter is worth 1 point.',
//   scoringFunction: function(word) {
//       let score = 0;
//       for(let i = 0; i < word.length; i++){
//         score++
//       }
//     return score
//   }
// }
// // console.log(`${simpleScore.name}: ${simpleScore.scoringFunction('farting')}`)

// // console.log('Object', simpleScore.scoringFunction('farts'))
// // console.log('hellooo', simpleScore('farts'))
// let vowelBonusScore = {
//   name: 'Bonus Vowels',
//   description: 'Vowels are 3pts. consonants are 1pt',
//   scoringFunction: function(word){
//       word = word.toLowerCase()
//       let score = 0;
//       for(let i = 0; i < word.length; i++){
//         if('aeiou'.includes(word[i])){
//           score += 3;
//         } else {
//           score++
//         }
//       }
//     return score
//   }
// }
// // console.log(`${vowelBonusScore.name}: ${vowelBonusScore.scoringFunction('farting')}`)
// // console.log('helllloooo', vowelBonusScore('farting'))
// let scrabbleScore = {
//   name: 'Scrabble',
//   description: 'The traditional scoring algorithm.',
//   scoringFunction: function(word){
//     word = word.toLowerCase();
// 	  let score = 0;
  
// 	  for (let i = 0; i < word.length; i++) {
// 			score += newPointStructure[word[i]]
// 	  }
// 	  return score
// 	}
// }
// // console.log(`${scrabbleScore.name}: ${scrabbleScore.scoringFunction('farting')}`)


// const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

// function scorerPrompt() {
//   let options = [0, 1, 2]
//   console.log('Which scoring algorithm would you like to use?')
//   for(let i = 0; i < scoringAlgorithms.length; i++){
//     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
//   }
//   let choice = input.question('Enter 0, 1, or 2: ')
//   while (!options.includes(Number(choice))){
//     choice = input.question('Enter 0, 1 or 2: ')
//   }
//   return scoringAlgorithms[choice]
// }
// // console.log('this is the choice', scorerPrompt())


// function runProgram() {
//    let word = initialPrompt();
//    let scoringChoice = scorerPrompt();
//    console.log(`Score for '${word}': ${scoringChoice.scoringFunction(word)}`)
// }

// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
// module.exports = {
//    initialPrompt: initialPrompt,
//    transform: transform,
//    oldPointStructure: oldPointStructure,
//    simpleScore: simpleScore,
//    vowelBonusScore: vowelBonusScore,
//    scrabbleScore: scrabbleScore,
//    scoringAlgorithms: scoringAlgorithms,
//    newPointStructure: newPointStructure,
// 	runProgram: runProgram,
// 	scorerPrompt: scorerPrompt
// };

// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

// const input = require("readline-sync");

// const oldPointStructure = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
// };

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//  }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
// PASSING VERSION
// PASSING VERSION
// PASSING VERSION
// PASSING VERSION
// PASSING VERSION
// PASSING VERSION
// PASSING VERSION


// function initialPrompt() {
//    let alpha = 'abcdefghijklmnopqrstuvwxyz ';
//    alpha = alpha.split('')
//    console.log(alpha)
//    console.log("Let's play some scrabble!");
//    let word = '';
//    while(!word){
//      word = input.question("Enter a word to score: ")
//      for(let i = 0; i < word.length; i++){
//        if(!alpha.includes(word[i]))
//         word = '';
//      }
//    }
//    return word
//   //  console.log(oldScrabbleScorer(word))
// };

// function transform(oldPointStructure) {
//   let newObject = {}
//   for(let item in oldPointStructure){
//     // console.log(item)
//     for(let i = 0; i < oldPointStructure[item].length; i++){
//       // console.log(oldPointStructure[item][i])
//       newObject[oldPointStructure[item][i].toLowerCase()] = Number(item);
//     }
//   }
//   return newObject
// };

// let newPointStructure = transform(oldPointStructure);
// newPointStructure[' '] = 0;
// console.log(newPointStructure)
// // console.log(newPointStructure)

// // let simpleScore = {
// //   name: 'Simple Score',
// //   description: 'Each letter is worth 1 point.',
// //   scoringFunction: function(word) {
// //       let score = 0;
// //       for(let i = 0; i < word.length; i++){
// //         score++
// //       }
// //     return score
// //   }
// // }
// function simpleScore(word){
//   let score = 0;
//   for (let i = 0; i < word.length; i++){
//     score++
//   }
//   return score
// }
// // console.log(`${simpleScore.name}: ${simpleScore.scoringFunction('farting')}`)

// // console.log('Object', simpleScore.scoringFunction('farts'))
// // console.log('hellooo', simpleScore('farts'))
// // let vowelBonusScore = {
// //   name: 'Bonus Vowels',
// //   description: 'Vowels are 3pts. consonants are 1pt',
// //   scoringFunction: function(word){
// //       word = word.toLowerCase()
// //       let score = 0;
// //       for(let i = 0; i < word.length; i++){
// //         if('aeiou'.includes(word[i])){
// //           score += 3;
// //         } else {
// //           score++
// //         }
// //       }
// //     return score
// //   }
// // }
// function vowelBonusScore(word){
//   word = word.toLowerCase()
//   let score = 0;
//   for(let i = 0; i < word.length; i++){
//     if('aeiou'.includes(word[i])){
//       score += 3;
//     } else {
//       score++
//     }
//   }
//   return score
// }
// // console.log(`${vowelBonusScore.name}: ${vowelBonusScore.scoringFunction('farting')}`)
// // console.log('helllloooo', vowelBonusScore('farting'))
// // let scrabbleScore = {
// //   name: 'Scrabble',
// //   description: 'The traditional scoring algorithm.',
// //   scoringFunction: function(word){
// //     word = word.toLowerCase();
// // 	  let score = 0;
  
// // 	  for (let i = 0; i < word.length; i++) {
// // 			score += newPointStructure[word[i]]
// // 	  }
// // 	  return score
// // 	}
// // }
// function scrabbleScore(word){
//       word = word.toLowerCase();
// 	  let score = 0;
  
// 	  for (let i = 0; i < word.length; i++) {
// 			score += newPointStructure[word[i]]
// 	  }
// 	  return score
// }

// // console.log(`${scrabbleScore.name}: ${scrabbleScore.scoringFunction('farting')}`)


// // const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];
// const scoringAlgorithms = [
//   {
//     name: 'Simple Score',
//     description: 'Each letter is worth 1 point',
//     scoringFunction: simpleScore
//   },
//   {
//     name: 'Bonus Vowels',
//     description: 'Vowels are 3 pts, consonants are 1 pt.',
//     scoringFunction: vowelBonusScore
//   },
//   {
//     name: 'Scrabble',
//     description: 'The traditional scoring algorithm',
//     scoringFunction: scrabbleScore
//   }
// ]

// function scorerPrompt() {
//   let options = [0, 1, 2]
//   console.log('Which scoring algorithm would you like to use?')
//   for(let i = 0; i < scoringAlgorithms.length; i++){
//     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
//   }
//   let choice = input.question('Enter 0, 1, or 2: ')
//   while (!options.includes(Number(choice))){
//     choice = input.question('Enter 0, 1 or 2: ')
//   }
//   return Number(choice)
// }
// // console.log('this is the choice', scorerPrompt())


// function runProgram() {
//    let word = initialPrompt();
//    let scoringChoice = scorerPrompt();
//    console.log(`Score for '${word}': ${scoringAlgorithms[scoringChoice].scoringFunction(word)}`)
// }

// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
// module.exports = {
//    initialPrompt: initialPrompt,
//    transform: transform,
//    oldPointStructure: oldPointStructure,
//    simpleScore: simpleScore,
//    vowelBonusScore: vowelBonusScore,
//    scrabbleScore: scrabbleScore,
//    scoringAlgorithms: scoringAlgorithms,
//    newPointStructure: newPointStructure,
// 	runProgram: runProgram,
// 	scorerPrompt: scorerPrompt
// };

//STUDENT TEST
//STUDENT TEST
//STUDENT TEST
//STUDENT TEST
//STUDENT TEST
// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
  
let newPointStructure={};

function transform(obj) {

  for (let x in obj) {
for (let i = 0; i < obj[x].length; i++) {
newPointStructure[(obj[x][i]).toLowerCase()] = x;

}
//newPointStructure[' '] = 0;
}
}
transform(oldPointStructure);


function initialPrompt() {
   console.log("Let's play some scrabble!")
    oldScore=input.question(" \n\nEnter a word to score: ");
    return oldScore.toLowerCase();
};

/*function oldScrabbleScorer(word) {
//word = word.toUpperCase();
	let letterPoints = "";
 let total1=0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      total1 += Number(pointValue)
		 }
 
	  }
	}
	return total1;
 }*/

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
//let input1

function simpleScore(word)
{
  
  
   let letterPoints="";
   simpleScore=0;
       
   for(let i=0;i<word.length;i++){
   
   letterPoints += `Points for '${word[i]}': 1\n`
   simpleScore += 1

   }
return simpleScore; 
}



/*function initialPrompt() {
const input = require ("readline-sync");
let scoringAlgorithm = input.question(`Welcome to the Scrabble score calculator. Enter 'Stop' to quit.
Which scoring algorithm would you like to use?
0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are 3 pts, consonants are 1pt
Enter 0,1,2:`);
return scoringAlgorithm;
}*/
//let simpleScore;
// let vowelBonusScore;
function simpleScore(word) {
  
   let letterPoints="";
   simpleScore=0;
       
   for(let i=0;i<word.length;i++){
   
   letterPoints += `Points for '${word[i]}': 1\n`
   simpleScore += 1

   }
   return simpleScore
}

function scrabbleScore(word){
  let total=0;
for (let i = 0; i < word.length; i++){

total += Number(newPointStructure[word[i]]);
}
return total;

}

function vowelBonusScore(word){
  word = word.toUpperCase();
   let letterPoints="";
   let vowel=0;
   let conso=0;
   vowelBonusScore=0;
   for(let i=0;i<word.length;i++){
   if(word[i]=='A'||word[i]=='E'||word[i]=='I'||word[i]=='O'||word[i]=='U')
   {
   letterPoints += `Points for '${word[i]}': 3\n`
   vowel += 3
   
   }
   else
   {
     letterPoints += `Points for '${word[i]}': 1\n`
   conso +=1
   
   }
   }
   vowelBonusScore=vowel+conso;
 return vowelBonusScore
}
const scoringAlgorithms = [
{
name:"Simple",
description: "Each letter is worth 1 point",
scoringFunction: simpleScore
},
{name:"Bonus Vowels",
  description:"Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
  

},
 {
   name:"Scrabble",
   description:"The traditional scoring algorithm",
   /*scorerFunction:function(word){
word = word.toUpperCase();
	let letterPoints = "";
 let total=0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      total += Number(pointValue)
		 }
 
	  }
	}
   
	return total;
   }*/
 scoringFunction: scrabbleScore
// scorerFunction:function (word) {
//   //word = word.toUpperCase();
// let total=0;
// for (let i = 0; i < word.length; i++){

// total += Number(newPointStructure[word[i]]);
// }
// return total;
// }

//     }];

/*function getWord() {
const input = require('readline-sync');
let word = input.question("WHAT WORD WOULD YOU LIKE TO SCORE?");
return word.toLowerCase();
// word = input.toLowerCase();
}*/
}]
function runProgram() {
  
   //console.log(oldScrabbleScorer(oldScore))
   //console.log(simpleAlgo(oldScore))
   //console.log(vowelBonusScore(oldScore))
   let newWord =  initialPrompt();
  let userInput= scorerPrompt()
  if (userInput==0)
  {
  console.log("algorithm name: ", scoringAlgorithms[0].name);
console.log("scorerFunction result: ", scoringAlgorithms[0].scoringFunction(newWord))
  }
else if(userInput==1)
{
console.log("algorithm name: ", scoringAlgorithms[1].name);
console.log("scorerFunction result: ", scoringAlgorithms[1].scoringFunction(newWord))
}
else if(userInput==2)
{
console.log("algorithm name: ", scoringAlgorithms[2].name);
console.log("scorerFunction result: ", scoringAlgorithms[2].scoringFunction(newWord))

}


  }





vowelBonusScore=function(word)
{
word = word.toUpperCase();
   let letterPoints="";
   let vowel=0;
   let conso=0;
   vowelBonusScore1=0;
   for(let i=0;i<word.length;i++){
   if(word[i]=='A'||word[i]=='E'||word[i]=='I'||word[i]=='O'||word[i]=='U')
   {
   letterPoints += `Points for '${word[i]}': 3\n`
   vowel += 3
   //console.log(letterPoints+vowel)
   }
   else
   {
     letterPoints += `Points for '${word[i]}': 1\n`
   conso +=1
   //console.log(letterPoints+conso)
   }
   }
   vowelBonusScore1=vowel+conso;
 return vowelBonusScore1;
  
}

/*let total=0;
for (let i = 0; i < word.length; i++){
total += Number(newScoreKey[word[i]]);
}
return total;
}*/


// let scrabbleScore;

let oldScore;


function scorerPrompt() {
console.log("Which scoring algorithm would you like to use?");
console.log("0 - Simple: One point per character")
console.log("1 - Vowel Bonus: Vowels are worth 3 points")
console.log("2 - Scrabble: Uses scrabble point system")
let choice = input.question("Enter 0, 1, or 2: ");


 return choice;
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};