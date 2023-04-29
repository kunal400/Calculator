const calculator = document.querySelector(".calculator");
const themeToggleBtn = document.querySelector(".theme-toggle");
const calDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Button Click Sound
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}

// Light and Dark Mood
let isDark = true;
themeToggleBtn.addEventListener("click", function () {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
    play();
})

// Calculator calculations
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        if (event.target.id == "clear") {
            display.innerText = "";
        } else if (event.target.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && event.target.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && event.target.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += event.target.id;
        }
        play();
    })
}