let color = "black";

document.addEventListener("DOMContentLoaded", function(){
   createBoard();
})

function createBoard() {
    let board = document.getElementById("board");

    board.style.gridTemplateColumns = "repeat(16, 1fr)"; 
    board.style.gridTemplateRows = "repeat(16, 1fr)";

    let numDivs= 16 * 16;

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function colorDiv() {
     if(color == 'red') {
        this.style.backgroundColor = "red";
     }
     else if(color == 'blue') {
        this.style.backgroundColor = "blue";
     }
     else if(color == 'green') {
        this.style.backgroundColor = "green";
     }
     else if(color == 'black') {
        this.style.backgroundColor = "black";
     }
}

function setColor(colorChoice) {
 color = colorChoice;
}

function reset() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "rgb(249, 224, 248)")
}








