
var name =prompt("Plz Enter your Name") 

function genderQuestion() {
    var gender=prompt("Your Gender is Male/Female")
if(gender=="male" || gender=="Male"){
    alert("Welcome Mr."+ " " + name)
} else if(gender == "female" || gender == "female" ) {
    alert("Welcome Ms." + " " + name)
} else {
    alert("Welcome" + " " + name)
}}


function ageQuestion() {
    var age = prompt("Enter your age")
if(age <= 0){
    alert("you'r age is not Correct plz enter your age again ")
    prompt("Enter Your Age")
}}


function confirmQuestion () {
    confirm("do you want to skip welcoming msg?")
}


function additionQs () {
    var first= prompt("Yes/No Question 1 \n Are You Jordanian ?")
if(first === "null" || first === "") {
    alert("Invalid Answer")
}


    var secnd = prompt("Yes/No Question 2 \n Are You a Programmer ?")
if(secnd === "null" || secnd === "") {
    alert("Invalid Answer")
} 


    var final = prompt("Yes/No Question 3 \n Are you intrested in JavaScript Language ? ")
if(final === "null" || final === "") {
    alert("Invalid Answer")
} 

var arr = [first,secnd,final];
for(var i=0;i<arr.length;i++) {
console.log(arr[i])
} }


genderQuestion();
ageQuestion();
confirmQuestion () ;
additionQs();

