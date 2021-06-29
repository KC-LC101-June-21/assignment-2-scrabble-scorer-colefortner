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

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let alpha = 'abcdefghijklmnopqrstuvwxyz ';
   alpha = alpha.split('')
   console.log(alpha)
   console.log("Let's play some scrabble!");
   let word = '';
   while(!word){
     word = input.question("Enter a word to score: ")
     for(let i = 0; i < word.length; i++){
       if(!alpha.includes(word[i]))
        word = '';
     }
   }
   return word
  //  console.log(oldScrabbleScorer(word))
};

function transform(oldPointStructure) {
  let newObject = {}
  for(let item in oldPointStructure){
    // console.log(item)
    for(let i = 0; i < oldPointStructure[item].length; i++){
      // console.log(oldPointStructure[item][i])
      newObject[oldPointStructure[item][i].toLowerCase()] = Number(item);
    }
  }
  return newObject
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;
console.log(newPointStructure)
// console.log(newPointStructure)

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
function simpleScore(word){
  let score = 0;
  for (let i = 0; i < word.length; i++){
    score++
  }
  return score
}
// console.log(`${simpleScore.name}: ${simpleScore.scoringFunction('farting')}`)

// console.log('Object', simpleScore.scoringFunction('farts'))
// console.log('hellooo', simpleScore('farts'))
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
function vowelBonusScore(word){
  word = word.toLowerCase()
  let score = 0;
  for(let i = 0; i < word.length; i++){
    if('aeiou'.includes(word[i])){
      score += 3;
    } else {
      score++
    }
  }
  return score
}
// console.log(`${vowelBonusScore.name}: ${vowelBonusScore.scoringFunction('farting')}`)
// console.log('helllloooo', vowelBonusScore('farting'))
let scrabbleScore = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: function(word){
    word = word.toLowerCase();
	  let score = 0;
  
	  for (let i = 0; i < word.length; i++) {
			score += newPointStructure[word[i]]
	  }
	  return score
	}
}
// console.log(`${scrabbleScore.name}: ${scrabbleScore.scoringFunction('farting')}`)


// const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];
const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point',
    scoringFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm',
    scoringFunction: oldScrabbleScorer
  }
]

function scorerPrompt() {
  let options = [0, 1, 2]
  console.log('Which scoring algorithm would you like to use?')
  for(let i = 0; i < scoringAlgorithms.length; i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  let choice = input.question('Enter 0, 1, or 2: ')
  while (!options.includes(Number(choice))){
    choice = input.question('Enter 0, 1 or 2: ')
  }
  return Number(choice)
}
// console.log('this is the choice', scorerPrompt())


function runProgram() {
   let word = initialPrompt();
   let scoringChoice = scorerPrompt();
   console.log(`Score for '${word}': ${scoringAlgorithms[scoringChoice].scoringFunction(word)}`)
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