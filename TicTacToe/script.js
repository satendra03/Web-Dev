console.log("%ccreated by Satendra Kumar Parteti", "color: white; background-color: royalblue; padding: 0.5em; border: none; border-radius: 50px; font-size: 1em;");

let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let turnPlayer1 = true;
let buttons = document.querySelectorAll('.button');
let resetBtnBtn = document.getElementById('resetBtn');
let newGameBtn = document.getElementById('newGameBtn');
let winOverlay = document.getElementById('new');
let winOverlayText = document.getElementById('winOverlay-text');

let player1 = document.getElementById('player-1');
let player2 = document.getElementById('player-2');

let btnCount = 0;

player2.style.display = 'none';

document.addEventListener('DOMContentLoaded', function () {
    BtnClick();
    resetBtn();
    newGameBtn.addEventListener('click', function () {
        winOverlay.style.display = 'none';
        window.location.reload();
    });
});

function BtnClick() {
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (turnPlayer1) {
                button.textContent = "x";
                button.style.color = "#FF9800";
                button.disabled = true;
                turnPlayer1 = false;
                buttonAnimation(button);
                player2.style.display = 'block';
                player1.style.display = 'none';
                checkWin();
            } else {
                button.textContent = "o";
                button.style.color = "#4CCD99";
                button.disabled = true;
                turnPlayer1 = true;
                buttonAnimation(button);
                player2.style.display = 'none';
                player1.style.display = 'block';
                checkWin();
            }

        });
    });
};

function checkWin() {
    winPattern.forEach(function (pattern) {
        let btn1 = document.getElementById(`${pattern[0]}`);
        let btn2 = document.getElementById(`${pattern[1]}`);
        let btn3 = document.getElementById(`${pattern[2]}`);
        let val1 = btn1.textContent;
        let val2 = btn2.textContent;
        let val3 = btn3.textContent;
        console.log(`${pattern[0]} ${val1}, ${pattern[1]} ${val2}, ${pattern[2]} ${val3}`);
        if(val1 === val2 && val1 === val3 && val1 !== "" && val2 !== "" && val3 !== ""){
            if(turnPlayer1){
                winOverlayText.textContent = `Player 2 Won`;
            } else{
                winOverlayText.textContent = `Player 1 Won`;
            }
            winOverlay.style.display = "block";
            winOverlay.style.display = "flex";
        }
        btnCount = 0;
        buttons.forEach(button => {
            if(button.disabled) ++btnCount;
        });
        if(btnCount === 9){
            winOverlayText.textContent = `It's a draw`;
            winOverlay.style.display = "block";
            winOverlay.style.display = "flex";

        }
    });
};

function buttonAnimation(btn) {
    btn.style.scale = '0.9';
    setTimeout(function () {
        btn.style.scale = '1';
    }, 100);
};

function resetBtn() {
    resetBtnBtn.addEventListener('click', function () {
        buttons.forEach(function (button) {
            button.textContent = '';
            button.disabled = false;
            turnPlayer1 = true;
            btnCount = 0;
            player2.style.display = 'none';
            window.location.reload();
            console.clear();
        });
    });
};
