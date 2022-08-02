
// Function that gets Random word with Random Word Length

function getWord(){
const wordlength = Math.floor(Math.random() * (6 - 4 + 1) + 4);
var apiUrl = `https://random-word-api.herokuapp.com/word?length=${wordlength}`;
return fetch(apiUrl).then(response => {
  return response.json();
}).catch(errormsg => {
  alert('Connection Issues')
  throw new Error(errormsg)})
};

function getDef(word){
var apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
return  fetch(apiUrl).then(response =>{
  return response.json();

}).then(definition =>{
  console.log(definition[0].meanings[0].definitions[0].definition);
  return definition[0].meanings[0].definitions[0].definition;
  
})
.catch(errormsg => {
  console.log(errormsg);
  // throw new Error(errormsg)
})
}


function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

// Create arrays of HTML elements for Word Search Rows

let wordId = [];
let wordList = [];

let row1 = [1,2,3,4,5,6,7,8,9,10];
let row2 = [11,12,13,14,15,16,17,18,19,20];
let row3 = [21,22,23,24,25,26,27,28,29,30];
let row4 = [31,32,33,34,35,36,37,38,39,40];
let row5 = [41,42,43,44,45,46,47,48,49,50];
let row6 = [51,52,53,54,55,56,57,58,59,60];
let row7 = [61,62,63,64,65,66,67,68,69,70];
let row8 = [71,72,73,74,75,76,77,78,79,80];
let row9 = [81,82,83,84,85,88,87,88,89,90];
let row10 = [91,92,93,94,95,96,97,98,99,100];
let rowarr = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];


// Create arrays of HTML elements for Word Search Columns

let col1 = [1,11,21,31,41,51,61,71,81,91];
let col2 = [2,12,22,32,42,52,62,72,82,92];
let col3 = [3,13,23,33,43,53,63,73,83,93];
let col4 = [4,14,24,34,44,54,64,74,84,94];
let col5 = [5,15,25,35,45,55,65,75,85,95];
let col6 = [6,16,26,36,46,56,66,76,86,96];
let col7 = [7,17,27,37,47,57,67,77,87,97];
let col8 = [8,18,28,38,48,58,68,78,88,98];
let col9 = [9,19,29,39,49,59,69,79,89,99];
let col10 = [10,20,30,40,50,60,70,80,90,100];
let columnarr = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10];

// Function which fills table with random letters

function fillTable(){
    for(let i = 1; i <= 100; i++){
        let rcell = document.getElementById(i);
      
        let rUnicode = Math.floor(Math.random() * (90 - 65 + 1) + 65);
        rcell.innerHTML = `${String.fromCharCode(rUnicode)}`;
        rcell.style.color ='black';
       
    }
};

// Places Random Words into WordSearch Rows

function WordPlace(wordarr, rowplace){
let wordStart = Math.floor(Math.random() * (10 - wordarr.length))

let idStart = rowarr[rowplace][wordStart];

for (i = idStart; i < (wordarr.length + idStart); i++){ 
   let gamecell = document.getElementById(i);
   gamecell.innerHTML = wordarr[i - idStart];
   gamecell.style.color = "red";
   wordId.push(i);

   
}
}

function letterchecker(){

}

// Places random words into Columns 

function WordPlaceColumn(wordarr, columnplace){
  

  // let columnrow = columnplace;
  // console.log(`row + ${columnrow}`);
  // console.log(`This is the column array ${columnarr[columnrow]}`);
  let newcolumnrow = null;
  let columnPast = 0;
  let lettermatcharr = [];
  for(k = 0; k < columnarr.length ; k++){
    if(newcolumnrow != null){
      break;
    }
    columnPast = 0;
    lettermatcharr=[];

      for(j = 0 ; j < columnarr[k].length; j++ ){
      console.log( columnarr[k].length);
        if(wordId.includes(columnarr[k][j])){
          console.log(`match ${k} + ${wordarr}`);
          lettermatcharr.push(j); 
          if(columnPast >= wordarr.length){
            newcolumnrow = k; 
            
          } else{ 
          columnPast = 0;
          }
        }else{
          columnPast ++
          if (j === ((columnarr[k].length)- 1) && columnPast >= wordarr.length){
            newcolumnrow = k;
          }
          console.log(`No Match ${k} + ${wordarr}`)
        }
      }
   
  }
 
  
  if(newcolumnrow === null){
    return false;
  }

  let wordStart = Math.floor(Math.random() * (10 - wordarr.length));
  if(lettermatcharr.length != 0){
      for(i = 0; i < lettermatcharr.length; i++){
        if(lettermatcharr.length === 1){
          if(lettermatcharr[i] >= wordarr.length){
            let wordStartRange = lettermatcharr[i] -= wordarr.length 
            wordStart = Math.floor(Math.random() * wordStartRange)
            break;
          }else{
            let wordStartRange = col1.length - (lettermatcharr[0] + wordarr.length); 
            let wordStartRangeMulti = (Math.floor(Math.random() * wordStartRange));
            wordStart = lettermatcharr[i] + (wordStartRangeMulti != 0 ? wordStartRangeMulti: 1);
            break;
          }
        } else {
          let matchDiff = (lettermatcharr[i] - (i > 0 ? (lettermatcharr[i - 1]): 0));
          // If i is 1 and there are only 2 matches - this falls through
          if(i === (lettermatcharr.length - 1)){
              let EndDiff = (lettermatcharr.length) - lettermatcharr[i];
              if( EndDiff >= wordarr.length){
                let wordStartRange = EndDiff -= wordarr.length 
                wordStart = lettermatcharr[i] + ((Math.floor(Math.random() * wordStartRange))+1)
                break;
              }
          }
          if (matchDiff >= wordarr.length){
            let wordStartRange = matchDiff -= wordarr.length 
            wordStart = (i > 0 ? lettermatcharr[i - 1]: 0) + ((Math.floor(Math.random() * wordStartRange))+1)
            break;
          }
        }

      }

    }
    console.log(wordStart);
    console.log(newcolumnrow);


  let idStart = columnarr[newcolumnrow][wordStart];
  let letterposition = 0;

  console.log(idStart);
  for (i = idStart; i < (((wordarr.length)*10) + idStart); i+=10){ 
     let gamecell = document.getElementById(i);
     gamecell.innerHTML = wordarr[letterposition];
     gamecell.style.color = 'red';
     letterposition++; 
     wordId.push(i);
    
     
  }

}

// Function which decides row placement of word and calls API

async function WordRow(){
  document.getElementById('wordsearch').style.visibility = 'hidden';
  wordId = [];
  fillTable();
  let freeRows =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let rowplacementarr = getMultipleRandom(freeRows, 3);
  let rowplacement1 = rowplacementarr[0];
  let rowplacement2 = rowplacementarr[1];
  let rowplacement3 = rowplacementarr[2];
  let word1 = await getWord();
  let word2 = await getWord();
  let word3 = await getWord();
  wordList.push(word1[0])
  wordList.push(word2[0])
  wordList.push(word3[0])
  let word1def = await getDef(word1[0]);
  let word2def = await getDef(word2[0]);
  let word3def = await getDef(word3[0]);
  console.log(word1[0]);
  console.log(word1def);
  console.log(await word1);
  
  let word1arr = word1[0].toUpperCase().split('');
  let word2arr = word2[0].toUpperCase().split('');
  let word3arr = word3[0].toUpperCase().split('');
  console.log(word1, word2, word3);
  WordPlace(word1arr, rowplacement1);
  WordPlace(word2arr, rowplacement2);
  WordPlace(word3arr, rowplacement3);
  console.log(rowplacement1, rowplacement2, rowplacement3);
  await WordColumn();
  document.getElementById('wordsearch').style.visibility = 'visible';
  document.getElementById('def1').innerHTML = (word1def != null ? word1def: 'No Definition Available');
  document.getElementById('def2').innerHTML = (word2def != null ? word2def: 'No Definition Available');
  document.getElementById('def3').innerHTML = (word3def != null ? word3def: 'No Definition Available');

}

// Function which decides column placement of word and calls API

async function WordColumn(){
  let freeColumns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let Columnplacement1 = Math.floor(Math.random() * (freeColumns.length));
  freeColumns.splice(Columnplacement1, 1);
  let Columnplacement2 = Math.floor(Math.random() * (freeColumns.length));
  freeColumns.splice(Columnplacement2, 1);
  let Columnplacement3 = Math.floor(Math.random() * (freeColumns.length));
  freeColumns.splice(Columnplacement3, 1);
  let word4 = await getWord();
  let word5 = await getWord();
  let word6 = await getWord();
  wordList.push(word4[0])
  wordList.push(word5[0])
  wordList.push(word6[0])
  let word4def = await getDef(word4[0]);
  let word5def = await getDef(word5[0]);
  let word6def = await getDef(word6[0]);
  let word4arr = word4[0].toUpperCase().split('');
  let word5arr = word5[0].toUpperCase().split('');
  let word6arr = word6[0].toUpperCase().split('');
  WordPlaceColumn(word4arr, Columnplacement1);
  WordPlaceColumn(word5arr, Columnplacement2);
  WordPlaceColumn(word6arr, Columnplacement3);
  document.getElementById('def4').innerHTML = (word4def != null ? word4def: 'No Definition Available');
  document.getElementById('def5').innerHTML = (word5def != null ? word5def: 'No Definition Available');
  document.getElementById('def6').innerHTML = (word6def != null ? word6def: 'No Definition Available');
}


// console.log(` Hello ${rowarr[1][2]}`);


// let cell = document.getElementById(1);

// function randomNumber(){
//     cell.innerHTML = `${Math.floor(Math.random()*10)}`;
//     console.log(cell.innerHTML);
// };
function wordchecker(){
  let guess = document.getElementById('guesser').value;
  if(wordList.includes(guess) ){
    document.getElementById('outcome').innerHTML = 'You have found a word!'
  }else{
    document.getElementById('outcome').innerHTML = 'Guess again!'
    console.log(wordList);
  }
}



WordRow();
let word1def = getDef('jingle');
console.log(word1def[0]);

document.getElementById("refresh").addEventListener("click", WordRow);
document.getElementById('guesser').addEventListener("change", wordchecker)

// To do => 
// Debug + Clear table when refreshing
// Make it look nice


