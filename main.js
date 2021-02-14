function start() {
    //store the input in variable
player1=document.getElementById("player1_name").value
player2=document.getElementById("player2_name").value 
 
 //set the player names in the local storage
 localStorage.setItem("player1_name",player1)
 localStorage.setItem("player2_name",player2)

 //code for navigating to next page
 window.location="game_page.html"
}