// alert("kannika");

//detecting button or mouse click
var numberOfButtons = document.querySelectorAll(".drum").length;//to count the number of buttons with class=drum

for (var i=0; i<numberOfButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  //TO GET THE INNERhtml IE......W,A,S,D,J,K,Copyright (c) 2018 Copyright Holder All Rights Reserved.
  var buttonInnerHTML= this.innerHTML;//w/a/s/d/k/l
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});
}


//detecting key press(keyboard strokes)
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Common function to make sound
function makeSound(key){

  switch(key){

    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default: console.log();
  }
}

//animations
function buttonAnimation(currentKey){

  var activeButton= document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");//creates the annimation.....shadow when pressed

  //to remove the animations
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  });


}
