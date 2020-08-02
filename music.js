var divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(var i=0; i<divlength; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);

 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();song1.src = "";

var song2 = new Audio();song2.src = "";

var song3 = new Audio();song3.src = "";

var song4 = new Audio();song4.src = "";

var song5 = new Audio();song5.src = "";

var song6 = new Audio();song6.src = "";

var song7 = new Audio();song7.src = "";

var song8 = new Audio();song8.src = "";

var song9 = new Audio();song9.src = "";



function playsong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.play();
   break;

  case "b":
   song2.play();
   break;

  case "c":
   song3.play();
   break;

  case "d":
   song1.play();
   break;

  case "e":
   song2.play();
   break;

  case "f":
   song3.play();
   break;

  case "g":
   song1.play();
   break;

  case "h":
   song2.play();
   break;

  case "i":
   song3.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.pause();
   break;

  case "b":
   song2.pause();
   break;

  case "c":
   song3.pause();
   break;

  case "d":
   song1.pause();
   break;

  case "e":
   song2.pause();
   break;

  case "f":
   song3.pause();
   break;

  case "g":
   song1.pause();
   break;

  case "h":
   song2.pause();
   break;

  case "i":
   song3.pause();
   break;

  default:
   console.log("Music doesn't exist!! ");
   break;
 }
}