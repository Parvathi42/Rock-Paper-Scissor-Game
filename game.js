let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let rndIdx=Math.floor(Math.random()*3);
    return options[rndIdx];
};

const drawGame=()=>{
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#0e273c";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#8FB339";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#AB3428";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"? false : true;
        }else if (userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"? false : true;
        }else{
            userWin=compChoice==="rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    });
});