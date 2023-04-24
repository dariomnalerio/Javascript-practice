// Set colors, select button id and color class
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // Get random number (0-3)
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    // Change background color and text
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// Get random number (0-3) and make sure it's not the same as the previous one
let previousRandomNumber;
const getRandomNumber = () => {
    let newRandomNumber = Math.floor(Math.random() * colors.length);
    while (newRandomNumber === previousRandomNumber) {
        newRandomNumber = Math.floor(Math.random() * colors.length);
    }
    previousRandomNumber = newRandomNumber;
    return newRandomNumber;
}