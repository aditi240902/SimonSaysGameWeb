let gameseq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("Game started!");
        started=true;
        levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
         btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameseq.push(randomClr);
    btnFlash(randomBtn);
}

function checkSeq(idx){
    if(userSeq[idx] == gameseq[idx]){
        if(userSeq.length == gameseq.length)
              setTimeout(levelUp , 1000);
    }else{
        h2.innerHTML = `Game over! Your score was <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 150 );
        reset();    
    }
}

function btnPress() {
   let btn=this;
   btnFlash(btn);
   userClr = btn.getAttribute("id");
   userSeq.push(userClr);
   checkSeq(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}