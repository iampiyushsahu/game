let userscore = 0;
let compscore = 0;
let a = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = (userchoice, compChoice) => {
    console.log("the game was draw", userchoice, compChoice);
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win", userchoice, compChoice);
        msg.innerText = `you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose", userchoice, compChoice);
        msg.innerText = `you lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    a++;
    console.log(a);
    if (a === 3) {
        if(userscore === compscore){
            msg.innerText = `Draw`;
            msg.style.backgroundColor = "black";
        }
       else if (userscore > compscore) {
            msg.innerText = `final winner you`;
            msg.style.backgroundColor = "green";
            userscorepara.innerText = userscore;
        }
        else{
            msg.innerText = `final winner computer`;
            msg.style.backgroundColor = "green";
            compscorepara.innerText = compscore;
        }

        userscore = 0;
        userscorepara.innerText = userscore;
        compscore = 0;
        compscorepara.innerText = compscore;
        a=0;
    }
}

const playGame = (userchoice) => {
    console.log("user choice", userchoice);

    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if (userchoice === compChoice) {
        // Draw game
        drawGame(userchoice, compChoice);
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    })
});




