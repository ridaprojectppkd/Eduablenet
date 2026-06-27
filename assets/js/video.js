function changeVideo(video,title){

let player=document.getElementById("videoPlayer");

player.src=video;

player.load();

player.play();

document.getElementById("videoTitle").innerHTML=title;

}