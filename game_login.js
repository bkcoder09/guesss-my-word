function add_user(){
    player1_name = document.getElementById("player1").Value;
    player2_name = document.getElementById("player2").Value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location="game_page.html";
}