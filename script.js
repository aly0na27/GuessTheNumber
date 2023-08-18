let secretNumber = Math.trunc((Math.random() * 20) + 1);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    let inputNumber = Number(document.querySelector(".number-input").value);
    // console.log(input_number);
    if (!inputNumber) {
        document.querySelector(".guess-message").textContent = "Введите значение!";
    }
    if (inputNumber === secretNumber) {
        document.querySelector(".guess-message").textContent = "Победа!";
        document.querySelector(".question").textContent = secretNumber.toString();
        document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)";
        document.querySelector(".question").style.width = "50%";
        document.querySelector(".number-input").disabled = true;
        if (Number(document.querySelector(".highscore").textContent) < score) {
            document.querySelector(".highscore").textContent = score.toString();
        }
    } else if (inputNumber < secretNumber) {
        if (score > 1) {
            document.querySelector(".guess-message").textContent = "Слишком мало!";
            score--;
            document.querySelector(".score").textContent = (score).toString();
        } else {
            document.querySelector(".guess-message").textContent = "Game Over!";
            score = 0;
            document.querySelector(".score").textContent = score.toString();
            document.querySelector(".number-input").value = "";
            document.querySelector(".number-input").disabled = true;
        }
    } else if (inputNumber > secretNumber) {
        if (score > 1) {
            document.querySelector(".guess-message").textContent = "Слишком много!";
            score--;
            document.querySelector(".score").textContent = (score).toString();
        } else {
            document.querySelector(".guess-message").textContent = "Game Over!";
            score = 0;
            document.querySelector(".score").textContent = score.toString();
            document.querySelector(".number-input").value = "";
            document.querySelector(".number-input").disabled = true;
        }
    }
});
document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".question").textContent = "???";
    document.querySelector("body").style.backgroundColor = "#000";
    score = 20;
    document.querySelector(".score").textContent = score.toString();
    document.querySelector(".guess-message").textContent = "Начни угадывать!";
    document.querySelector(".number-input").disabled = false;
    document.querySelector(".number-input").value = "";
    document.querySelector(".question").style.width = "25%";
});