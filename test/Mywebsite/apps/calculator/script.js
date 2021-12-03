function calculateaddition(){
    let first_val = prompt("Enter the first number: ");
    let second_val = prompt("Enter the Second number: ");
    let ans = parseFloat(first_val)+parseFloat(second_val);
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function calculatesubtract(){
    let first_val = prompt("Enter the first number: ");
    let second_val = prompt("Enter the Second number: ");
    let ans = parseFloat(first_val)-parseFloat(second_val);
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function calculatemul(){
    let first_val = prompt("Enter the first number: ");
    let second_val = prompt("Enter the Second number: ");
    let ans = parseFloat(first_val)*parseFloat(second_val);
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function calculatediv(){
    let first_val = prompt("Enter the first number: ");
    let second_val = prompt("Enter the Second number: ");
    let ans = parseFloat(first_val)/parseFloat(second_val);
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function calculatesquare(){
    let first_val = prompt("Enter the first number: ");
    let second_val = prompt("Enter the Second number: ");
    let ans = parseFloat(first_val)**parseFloat(second_val);
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function calculatessq(){
    let first_val = prompt("Enter the number: ");
    let ans = Math.sqrt(parseFloat(first_val));
    let answer = ans.toString();
    document.getElementById("answer").innerHTML = "Your answer is : " + answer;
}
function reset(){
    document.getElementById("answer").innerHTML = "<br>";
}

