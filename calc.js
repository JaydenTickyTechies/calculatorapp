function add(){
    var input1 = 0;
    input1 = document.getElementById("input1").value;
    var input2 = 0;
    input2 = document.getElementById("input2").value;
    var answer = +input1 + +input2;
    document.getElementById("answer").innerHTML = "Answer: " + +answer;
}

function divis(){
    var input1 = 0;
    input1 = document.getElementById("input1").value;
    var input2 = 0;
    input2 = document.getElementById("input2").value;
    var answer = +input1 / +input2;
    document.getElementById("answer").innerHTML = "Answer: " + +answer;
}

function subtract(){
    var input1 = 0;
    input1 = document.getElementById("input1").value;
    var input2 = 0;
    input2 = document.getElementById("input2").value;
    var answer = +input1 - +input2;
    document.getElementById("answer").innerHTML = "Answer: " + +answer;
}

function multi(){
    var input1 = 0;
    input1 = document.getElementById("input1").value;
    var input2 = 0;
    input2 = document.getElementById("input2").value;
    var answer = +input1 * +input2;
    document.getElementById("answer").innerHTML = "Answer: " + +answer;
}