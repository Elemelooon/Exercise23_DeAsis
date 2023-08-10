let choices = ["Rock","Paper","Scissors"];
let pScore = 0;
let cScore = 0;
let round = 0;

let comhand = document.getElementById("comhand");
let userhand = document.getElementById("userhand");
let userrock = document.getElementById("userrock");
let userpaper = document.getElementById("userpaper");
let userscissor = document.getElementById("userscissor");

let comrock = document.getElementById("comrock");
let compaper = document.getElementById("compaper");
let comscissor = document.getElementById("comscissor");

const gameCon = document.querySelector(".gamecon");

let result = document.getElementById("result");
function startGame(humanChoice){
// humanChoice.classList.add("active");
    let computerChoice = choices[Math.floor(Math.random() * 3 )];
let win = "You Won!";
let lose = "You Lost!";
let tie = "Draw!";



userhand.removeAttribute("src");
userhand.setAttribute("src",userrock.getAttribute("src"));
comhand.removeAttribute("src");
comhand.setAttribute("src",comrock.getAttribute("src"));

gameCon.classList.add("start");
//     alert("You chose: " + humanChoice);
//     alert("The computer chose " + computerChoice);
let time = setTimeout(() => {
        gameCon.classList.remove("start");
        if (humanChoice == "Rock"){
                userhand.removeAttribute("src");
                userhand.setAttribute("src",userrock.getAttribute("src"));
                if (computerChoice == "Rock"){
                        // alert("Its a tie");
                        result.innerHTML = tie;
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comrock.getAttribute("src"));
                }   else if (computerChoice == "Paper"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",compaper.getAttribute("src"));
                        // alert("You Lose!");
                        result.innerHTML = lose;
                        showComputerScore()
                }   else if (computerChoice == "Scissors"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comscissor.getAttribute("src"));
                        // alert("You Win!");
                        result.innerHTML = win;
                        showPlayerScore()
                }
                showRound()
            }
            // Rock Option
            if (humanChoice == "Paper"){
                userhand.removeAttribute("src");
                userhand.setAttribute("src",userpaper.getAttribute("src"));
                if (computerChoice == "Rock"){
                        // alert("You Win!");
                        result.innerHTML = win;
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comrock.getAttribute("src"));
                        showPlayerScore()
                }   else if (computerChoice == "Paper"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",compaper.getAttribute("src"));
                        // alert("Its a tie");
                        result.innerHTML = tie;
                }   else if (computerChoice == "Scissors"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comscissor.getAttribute("src"));
                        // alert("You Lose!");
                        result.innerHTML = lose;
                        showComputerScore()
                }
                showRound()
            }
            //Paper
            if (humanChoice == "Scissors"){
                userhand.removeAttribute("src");
                userhand.setAttribute("src",userscissor.getAttribute("src"));
                if (computerChoice == "Rock"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comrock.getAttribute("src"));
                        // alert("You Lose!");
                        result.innerHTML = lose;
                        showComputerScore()
                }   else if (computerChoice == "Paper"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",compaper.getAttribute("src"));
                        // alert("You Win!");
                        result.innerHTML = win;
                        showPlayerScore()
                }   else if (computerChoice == "Scissors"){
                        comhand.removeAttribute("src");
                        comhand.setAttribute("src",comscissor.getAttribute("src"));
                        // alert("Its a tie");
                        result.innerHTML = tie;
                }
                showRound()
        
            }
        
},2500)

}
let modal = document.getElementById('Congrats');
function showRound(){
        round++;
        document.getElementById('RoundDisplay').innerHTML = round;
}

function showPlayerScore(){
    pScore++;
    document.getElementById('pScoreDisplay').innerHTML = pScore;
    if (pScore >= 5){
        // alert("Congratulations");
        $('#Congrats').modal('show');
        // $("#Congratulations").on('show.bs.modal');
        // location.reload();
}
}

function showComputerScore(){
    cScore++;
    document.getElementById('cScoreDisplay').innerHTML = cScore;
    if (cScore >= 5){
        // alert("Better Luck Next Time");
        $('#nxt').modal('show');
        // $("#Congratulations").on('show.bs.modal');
        // location.reload();
}
    
}
document.getElementById('reset').addEventListener('click',refresh);
document.getElementById('again').addEventListener('click',refresh);
document.getElementById('again1').addEventListener('click',refresh);
function refresh(){
        location.reload();
}


