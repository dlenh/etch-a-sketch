const currentDiv = document.querySelector(".container");
const resize = document.getElementById("resize");
const black = document.getElementById("black");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const line = document.getElementById("line");
const stat = document.getElementById("penStatus");
let startingGrid = 16;
let click = true;
let noLines = true;

black.addEventListener("click", blackColor)
color.addEventListener("click", randomColor)
eraser.addEventListener("click", whiteColor)
resize.addEventListener("click", makeGrid)
clear.addEventListener("click", clearGrid)
line.addEventListener("click", toggleLine)

function blackColor() {
    black.classList.toggle("hidden");
    color.classList.add("hidden");
    eraser.classList.add("hidden");
    black.classList.add("on");
    color.classList.remove("on");
    eraser.classList.remove("on");
}

function randomColor() {
    color.classList.toggle("hidden");
    black.classList.add("hidden");
    eraser.classList.add("hidden");
    black.classList.remove("on");
    color.classList.add("on");
    eraser.classList.remove("on");
}

function whiteColor() {
    eraser.classList.toggle("hidden");
    black.classList.add("hidden");
    color.classList.add("hidden");
    black.classList.remove("on");
    color.classList.remove("on");
    eraser.classList.add("on");
}

makeGrid(startingGrid);

function clearGrid() {
    const clearGrid = document.querySelectorAll(".row");
    clearGrid.forEach(box => {
        box.style.backgroundColor = "white";
    })
}

function makeGrid(gridSize) {
    currentDiv.innerText = "";
    if (gridSize === startingGrid) {
        gridSize === 16;
    } else {
        gridSize = document.getElementById("gridSize").value
    }
    for (i = 1; i <= gridSize; i++) {
        const column = document.createElement("div");
        column.className = `column ${i}`;
        currentDiv.appendChild(column);
        for (j = 1; j <= gridSize; j++) {
            const row = document.createElement("div");
            row.className = `row ${j}`;
            column.appendChild(row);
        }
    }
    const boxFill = document.querySelectorAll(".row")
    
    boxFill.forEach(box => {
        box.addEventListener("mouseover", changeColor)
    })
}

function changeColor() {
    if (click) {
    randomR = Math.floor(Math.random() * 255);
    randomG = Math.floor(Math.random() * 255);
    randomB = Math.floor(Math.random() * 255);
    if (color.className === "hidden" && eraser.className === "hidden") {
        this.style.backgroundColor = "black";
    } else if (black.className === "hidden" && eraser.className === "hidden") {
        this.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, 1)`;
    } else if (black.className === "hidden" && color.className === "hidden") {
        this.style.backgroundColor = "white";
    }
}
}

function toggleLine() {
    const row = document.querySelectorAll(".row")
    if (noLines) {
    row.forEach(box => {
    box.style.border = "none"})
    } else { 
        row.forEach(box => {
        box.style.border = "1px solid black";})
    }
    noLines = !noLines;
}


document.querySelector(".container").addEventListener("click", () => {
    click = !click;
    if (click) {
        stat.innerText = "Pen: ON";
    } else {
        stat.innerText = "Pen: OFF";
    }
});