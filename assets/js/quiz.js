const quiz=[

{

question:"Berapa hasil 2 + 2 ?",

answers:["2","3","4","5"],

correct:2

},

{

question:"Huruf pertama alfabet adalah?",

answers:["B","A","C","D"],

correct:1

},

{

question:"Warna daun adalah?",

answers:["Merah","Hijau","Biru","Hitam"],

correct:1

}

];

let current=0;

let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const next=document.getElementById("nextBtn");
const progress=document.getElementById("progressBar");

function loadQuestion(){

let q=quiz[current];

question.innerHTML=q.question;

answers.innerHTML="";

progress.style.width=((current)/quiz.length*100)+"%";

q.answers.forEach((ans,index)=>{

let btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=ans;

btn.onclick=function(){

if(index===q.correct){

score++;

btn.style.background="#22c55e";

btn.style.color="white";

}else{

btn.style.background="#ef4444";

btn.style.color="white";

}

document.querySelectorAll(".answer").forEach(a=>{

a.disabled=true;

});

}

answers.appendChild(btn);

});

}

next.onclick=function(){

current++;

if(current<quiz.length){

loadQuestion();

}else{

document.querySelector(".quiz-card").style.display="none";

document.getElementById("result").style.display="block";

document.getElementById("score").innerHTML=

score+" / "+quiz.length;

}

}

loadQuestion();