let speech = new SpeechSynthesisUtterance();

speech.lang = "id-ID";
speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;

function playText(){

let text=document.getElementById("materi").innerText;

speech.text=text;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function pauseText(){

window.speechSynthesis.pause();

}

function resumeText(){

window.speechSynthesis.resume();

}

function stopText(){

window.speechSynthesis.cancel();

}

function speed(val){

speech.rate=val;

}