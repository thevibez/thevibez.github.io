var audio = document.getElementById("audio_controls").getElementsByTagName("audio")[0];

document.getElementById("play_button").addEventListener("click", function() {
  audio.play();
  this.style.display = "none";
  document.getElementById("pause_button").style.display = "inline-block";
  document.getElementById("sound").style.opacity = "1";
}, false);

document.getElementById("pause_button").addEventListener("click", function() {
  audio.pause();
  this.style.display = "none";
  document.getElementById("play_button").style.display = "";
  document.getElementById("sound").style.opacity = "0";
}, false);

audio.addEventListener("ended", function(){
  document.getElementById("pause_button").style.display = "none";
  document.getElementById("play_button").style.display = "";
  document.getElementById("sound").style.opacity = "0";
}, false);


document.getElementById("sound_button").addEventListener("mouseover", function(){
  document.getElementById("sound_box_outer").style.display = "block";
}, false);

document.getElementById("sound_box_outer").addEventListener("mouseout", function(){
  this.style.display = "none";
}, false);

document.getElementById("sound_box").addEventListener("mouseover", function(){
  document.getElementById("sound_box_outer").style.display = "block";
}, false);

document.getElementById("sound_bar").addEventListener("mouseover", function(){
  document.getElementById("sound_box_outer").style.display = "block";
}, false);

document.getElementById("sound_bar").addEventListener("change", function(){
  audio.volume = this.value / 100;
  document.getElementById("sound_text").innerHTML = this.value;
}, false);