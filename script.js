const currentDiv = document.querySelector(".container");

const resize = document.querySelector(".resize");


// resize.addEventListener("click", makeGrid)

// function makeGrid() {
// let gridSize = document.getElementById("gridSize").value
// for (i = 1; i <= gridSize; i++) {
//     const column = document.createElement("div");
//     column.className = `column ${i}`;
//     currentDiv.appendChild(column);
//     for (j = 1; j <= gridSize; j++) {
//         const row = document.createElement("div");
//         row.className = `row ${j}`;
//         column.appendChild(row);
//     }
// }
// }





// document.querySelectorAll(".column").forEach(column => {
//     column.addEventListener("mouseover", (e) => {
//         e.style.backgroundColor = "black";
//     })
// });

// document.querySelectorAll(".row").forEach(item => {
//     item.addEventListener("click", () => {
//         console.log("hello");
//     })
// });


function colorSquare() {
    this.style.backgroundColor = "black";
}
// const hover = document.querySelector(".column")

// hover.addEventListener("mouserover", () => {
//     hover.style.backgroundColor = "black"
// });



for (i = 1; i <= 8; i++) {
    const column = document.createElement("div");
    column.className = `column ${i}`;
    currentDiv.appendChild(column);
    for (j = 1; j <= 8; j++) {
        const row = document.createElement("div");
        row.className = `row ${j}`;
        column.appendChild(row);
    }
}


const row = document.querySelectorAll(".row")

row.forEach(box => {
    box.addEventListener("mouseover", changeColor)
})

function changeColor() {
    this.style.backgroundColor = "black";
}