let turn = "x"
function turns(){
    if(turn == "x"){
        turn = "o"
    }else if(turn =="o"){
        turn = "x"
    }
}

 

function funky1(){
    imgswap("b1");

    turns();
}
function funky2(){
    imgswap("b2");
    turns();
}
function funky3(){
    imgswap("b3");
    turns();
}
function funky4(){
    imgswap("b4");
    turns();
}
function funky5(){
    imgswap("b5");
    turns();
}
function funky6(){
    imgswap("b6");
    turns();
}
function funky7(){
    imgswap("b7");
    turns();
}
function funky8(){
    imgswap("b8");
    turns();
}
function funky9(){
    imgswap("b9");
    turns();
}
function imgswap(a){
    if(turn == "x"){
        console.log("Player O turn")
        document.getElementById("ins").innerHTML = "Player O turn";
        document.getElementById(a).src = "xbox1.png";
    }else if(turn =="o"){
        console.log("Player X turn")
        document.getElementById("ins").innerHTML = "Player X turn";
        document.getElementById(a).src = "obox1.png";
    }
    console.log(document.getElementById("b1").src)
    if (document.getElementById("b1").src == "xbox1.png") {
        console.log("win")
    }


}
function reset(){
    document.getElementById("b1").src = "ticy box.png";
    document.getElementById("b2").src = "ticy box.png";
    document.getElementById("b3").src = "ticy box.png";
    document.getElementById("b4").src = "ticy box.png";
    document.getElementById("b5").src = "ticy box.png";
    document.getElementById("b6").src = "ticy box.png";
    document.getElementById("b7").src = "ticy box.png";
    document.getElementById("b8").src = "ticy box.png";
    document.getElementById("b9").src = "ticy box.png";

}
