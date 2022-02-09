player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-" + player2_name;

function send() {
    get_word=document.getElementById("word").value ;
    word=get_word.toLowerCase();

    number1 = document.getElementById ("number1").value
    number2 = document.getElementById ("number2").value
    actual_answer = preseInt (number1)*(number2)

    question_word="<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box="<br> Answer: <input id='input_check_box' type='text'>" ;
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase -" +answer);

    if(answer==word){
        if(answer_turn=='player1'){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player1_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player_2"
        document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;
    }
    else{
        question_turn="player_1"
        document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
  
    }
    if(answer_turn=="player1"){
        answer_turn="player_2"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
    }
    else{
        answer_turn="player_1"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
  
    }
    document.getElementById("output").innerHTML="";   

}    