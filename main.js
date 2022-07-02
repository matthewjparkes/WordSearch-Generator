


function getWord(wordex){
const wordlength = Math.floor(Math.random() * (10 - 4 + 1) + 4);
var apiUrl = `https://random-word-api.herokuapp.com/word?length=${wordlength}`;
fetch(apiUrl).then(response => {
  return response.json();
}).then(word => {
   wordex += word;
})


};


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

let column1 = [1,11,21,31,41,51,61,71,81,91];
let column2 = [2,12,22,32,42,52,62,72,82,92];
let column3 = [3,13,23,33,43,53,63,73,83,93];
let column4 = [4,14,24,34,44,54,64,74,84,94];
let column5 = [5,15,25,35,45,55,65,75,85,95];
let column6 = [6,16,26,36,46,56,66,76,86,96];
let column7 = [7,17,27,37,47,57,67,77,87,97];
let column8 = [8,18,28,38,48,58,68,78,88,98];
let column9 = [9,19,29,39,49,59,69,79,89,99];
let column10 = [10,20,30,40,50,60,70,80,90,100];

function fillTable(){
    for(let i = 1; i <= 100; i++){
        let rcell = document.getElementById(i);
      
        let rUnicode = Math.floor(Math.random() * (90 - 65 + 1) + 65);
        rcell.innerHTML = `${String.fromCharCode(rUnicode)}`;
       
    }
};

function WordPlace(wordarr, rowplace){
let wordStart = Math.floor(Math.random() * (10 - wordarr.length))
console.log(wordStart);
let idStart = rowarr[rowplace][wordStart];
console.log(idStart);
for (i = idStart; i < (wordarr.length + idStart); i++){ 
   let gamecell = document.getElementById(i);
   console.log(gamecell);
   gamecell.innerHTML = wordarr[i - idStart];
   
   
}

}


function WordRow(){
  let freeRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let rowplacement1 = Math.floor(Math.random() * (freeRows.length));
  freeRows.splice(rowplacement1, 1);
  let rowplacement2 = Math.floor(Math.random() * (freeRows.length));
  freeRows.splice(rowplacement2, 1);
  let rowplacement3 = Math.floor(Math.random() * (freeRows.length));
  freeRows.splice(rowplacement3, 1);
  let word1 = 'ANXIETY';
  let word2 = 'GRAY';
  let word3 ='PORKY';
  // getWord(word1);
  // getWord(word2);
  // getWord(word3);
  // console.log(word1);
  let word1arr = word1.split('');
  let word2arr = word2.split('');
  let word3arr = word3.split('');
  console.log(word1arr);
  WordPlace(word1arr, rowplacement1);
  WordPlace(word2arr, rowplacement2);
  WordPlace(word3arr, rowplacement3);



}


console.log(` Hello ${rowarr[1][2]}`);


let cell = document.getElementById(1);

function randomNumber(){
    cell.innerHTML = `${Math.floor(Math.random()*10)}`;
    console.log(cell.innerHTML);
};



fillTable();
WordRow();


