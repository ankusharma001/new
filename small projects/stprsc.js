let userscore = 0;
let comscore = 0;
const choices = document.querySelectorAll(".choice");

const msg =document.querySelector(".msg");

const gencoputerchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
}

const drawgame = () => {
  console.log("game is draw");
  msg.innerText="game was draw";
}

const showwinnere = (userwin) => {
  if (userwin) {
    msg.innerText="you win";
  }
  else {
    msg.innerText="you lose";
  }

}
const palygames = (userchoice) => {
  console.log("user choice =", userchoice);

  //genereate computer choice 
  const compchoice = gencoputerchoice();
  console.log("computer choice =", compchoice);
  if (userchoice === compchoice) {
    drawgame();

  }
  else {
    let userwin = true;
    if (userchoice == "rock") {
      userwin = compchoice === "paper" ? false : true;

    }
    else if (userchoice == "paper") {
      userwin = compchoice === "scissor" ? false : true;
    }
    else {
      userwin = compchoice === "rock" ? false : true;
    }
  }
  showwinnere();

};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    palygames(userchoice);
  });
});