var player1_name=localStorage.getItem("player1_name")
var player2_name=localStorage.getItem("player2_name")
p1score=0
p2score=0
document.getElementById("player1name").innerHTML=player1_name
document.getElementById("player2name").innerHTML=player2_name
document.getElementById("player1score").innerHTML=p1score
document.getElementById("player2score").innerHTML=p2score
document.getElementById("questionturn").innerHTML="Question Turn- "+player1_name
document.getElementById("answerturn").innerHTML="Answer Turn- "+player2_name

function send() {
  var getword=document.getElementById("word").value
  qword=getword.toLowerCase()
  //code for replacing the first letter
  letter1=qword.charAt(1)
  console.log(letter1)
  replace1=qword.replace(letter1," _ ")
  console.log(replace1)
  //code for replacing 2nd letter
  x=qword.length-1
  letter2=qword.charAt(x)
  console.log(letter2)
 replace2=replace1.replace(letter2," _ ")
 console.log(replace2)
 //code for replacing 3rd letter
 y=Math.floor(qword.length/2)
 letter3=qword.charAt(y)
 replace3=replace2.replace(letter3," _ ")
 console.log(replace3)


qtag=`<h4>Q.${replace3}</h4><br>`
atag=`Answer <input id="answer"><br><br>`
btag=`<button onclick="check()" class="btn btn-primary">Check</button>`
document.getElementById("output").innerHTML=qtag+atag+btag
document.getElementById("word").value=""
}

qturn="player1"
aturn="player2"
function check() {
 getanswer=document.getElementById("answer").value
 answer=getanswer.toLowerCase()
 console.log(answer)
 //code for changing the score
 if (qword==answer) {
   if (aturn=="player2") {
     p2score=p2score+1
     document.getElementById("player2score").innerHTML=p2score
   } else {
     p1score=p1score+1
     document.getElementById("player1score").innerHTML=p1score
   }
 }

if (qturn=="player1") {
qturn="player2"
document.getElementById("questionturn").innerHTML="Question Turn- "+player2_name
}
else{
  qturn="player1"
  document.getElementById("questionturn").innerHTML="Question Turn- "+player1_name
}

if (aturn=="player2") {
  aturn="player1"
  document.getElementById("answerturn").innerHTML="Answer Turn- "+player1_name
} 

else {
  aturn="player2"
  document.getElementById("answerturn").innerHTML="Answer Turn- "+player2_name
}

}