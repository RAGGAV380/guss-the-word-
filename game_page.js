player1name=localStorage.getItem("player1_name");
player2name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1name + ":";

document.getElementById("player2_name").innerHTML= player2name + ":";

document.getElementById("player1_score").innerHTML= player1_score;

document.getElementById("player2_score").innerHTML=  player2_score;

document.getElementById("player_question").innerHTML= "question turn: " + player1name;

document.getElementById("player_answer").innerHTML= "answer turn: " + player2name;

function send(){
    give=document.getElementById("word").value;
    word=give.toLowerCase();
    charat1=word.charAt(1);
    second=Math.floor(word.length/2);
    charat2=word.charAt(second);
    third=word.length-1;
    charat3=word.charAt(third);

    replace1=word.replace(charat1,"_");
    replace2=replace1.replace(charat2,"_");
    replace3=replace2.replace(charat3,"_");

    q="<h4 id='word_display'>Q."+replace3+"</h4>";
    input="<br> answer:<input type='text' id='input_check_box'>";
    b="<br></br> <button class='btn btn-info' onclick='check()'>check</button>";
    row=q+input+b;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
   

}
qturn="player1";
aturn="player2";
function check(){
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
console.log(answer);
if (answer==word){
    if (aturn=="player1") {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
        
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;      
    }



}
if (qturn=="player1") {
   qturn="player2";
   document.getElementById("player_question").innerHTML="question turn="+ player2name;
}
else{
    qturn="player1";
    document.getElementById("player_question").innerHTML="question turn="+ player1name;
    
}
if (aturn=="player1") {
    aturn="player2";
    document.getElementById("player_answer").innerHTML="answer turn="+ player2name;
 }
 else{
    aturn="player1";
    document.getElementById("player_answer").innerHTML="answer turn="+ player1name; 
}
document.getElementById("output").innerHTML="";
}