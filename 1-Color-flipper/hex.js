const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = "#";
    // Get random number (0-15) and add it to hexColor
    for (let i = 0; i <= 5; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}