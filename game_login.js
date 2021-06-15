function adduser(){
    name1=document.getElementById("player1_name_input").value;
    name2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", name1);
    localStorage.setItem("player2_name", name2);

    window.location="game_page.html";
}