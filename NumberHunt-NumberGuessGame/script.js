var style = 'background-color: lightblue; color: black; font-style: italic; border: 1px solid hotpink; font-size: 2em;';
console.log("%cCode by Satendra", style);

var randomNo;
var chances = 5;
let chancesTxt = document.getElementById("chances");

let mainContainer = document.getElementsByClassName("main-container")[0];
let againContainer = document.getElementsByClassName("again-container")[0];
let winContainer = document.getElementsByClassName("win-container")[0];

function generateRandomNo(){
    randomNo = Math.floor(Math.random() * 100);
    console.log(randomNo);
    let msg = document.getElementById("msgAfterBtnPress");
    msg.style.display = "block";
    chancesTxt.innerText = `${chances}`;
}

function check() {
    let inputByUser = document.getElementById("inputNumber");
    let inputValue = inputByUser.value;
    console.log(inputValue);

    if( inputValue == randomNo){
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.again-container').style.display = 'none';
        document.querySelector('.win-container').style.display = 'block';
    }
    else{
        chances--;
        chancesTxt.innerText = `${chances}`;
    }
    
    if( inputValue > randomNo ){
        document.getElementById('text').innerText = "Random no is smaller";
    }
    else{
        document.getElementById('text').innerText = "Random no is bigger";
    }

    if(chances === 0){
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.again-container').style.display = 'block';
        document.querySelector('.win-container').style.display = 'none';
    }
}

function notAgain(){
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.again-container').style.display = 'none';
    document.querySelector('.win-container').style.display = 'none';
}
function again(){
    location.reload();
}
