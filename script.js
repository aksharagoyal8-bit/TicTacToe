console.log("Welcome to Akshara's Tic Tac Toe!");
let music= new Audio("music.mp3");
let gameover=new  Audio("gameover.mp3");
let oturn= new Audio("ting.mp3");
let isgameover=false;
let turn="X";
function Changeturn(){
    if(turn==='X'){
        turn="O";
    }
    else{
        turn="X";
    } return turn;
}
music.play();
const checkwin= () =>{
const resu=document.getElementsByClassName("ele");
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e =>{
if((resu[e[0]].innerText=== resu[e[1]].innerText) && (resu[e[1]].innerText=== resu[e[2]].innerText) && resu[e[0]].innerText !=="" ){
    document.getElementById("chan").innerText= resu[e[0]].innerText+" WON";
    isgameover=true;
}
});
}
const boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.ele');
    element.addEventListener("click",() =>{
        if(boxtext.innerText===""){
         boxtext.innerText=turn;
         turn=Changeturn();
         oturn.play();
         checkwin();
         if(!isgameover){
         document.getElementById("chan").innerText="Turn of "+ turn;
         };
        }
    });
});
const buta=document.getElementById("resu");
buta.addEventListener("click",() =>{
    location.reload();
})