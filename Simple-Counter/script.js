var style = 'background-color: lightblue; color: black; font-style: italic; border: 1px solid hotpink; font-size: 2em;';
console.log("%cCode by Satendra", style);


let count = 0;
let noClicked = 0;
let counterInterval;

function start() {
    if(noClicked==0) {
        noClicked = 1;
        counterInterval = setInterval(() => {
            count++;
            let screen = document.getElementById("value");
            screen.innerHTML = `${count}`;
            console.log(`Current Count is: ${count}`);
    }, 1000);
    }
    else if(noClicked>=1) {
        console.log("%cCode by Satendra", style);
    }
}
function pause() {
    clearInterval(counterInterval);
}
function end() {
    clearInterval(counterInterval);
    count = 0;
    let screen = document.getElementById("value");
    screen.innerHTML = `${count}`;
    noClicked = 0;
    console.clear();
}
