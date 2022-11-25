// document.querySelector("button").addEventListener("click" , handleClick);

// function handleClick(){
//     alert("I got clicked");
    
// }



//Detecting button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0;i<numberOfDrumButtons;i++){
 

  //in the document we try to grab all of the elements that a class drum have. SO we gets us all of those button of the class that  have    
    document.querySelectorAll(".drum")[i].addEventListener("click" , function handleClick(){
        // alert("I got clicked");
         
           //we need to call this  function to be called when a button detects a click and we need to know which  button got clicked so that we can play the right sound 

        

           //here this is basically the identity of the button that triggered the even listener.

        //    this.style.color=("white");

        //  switch (buttonInnerHTML) {
            //     case "w":
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        
        //         break;
        //     case "a":
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //     break;
        
        //     case "s":
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //     break;
        
        //     case "d":
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //     break;
        
        //     case "j":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //     break;
        
        //     case "k":
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //     break;
        
        //     case "l":
        //         var kick = new Audio("sounds/kick-bass.mp3");
        //         kick.play();
        //     break;
        
        
        
        //     default:
        //         console.log(buttonInnerHTML);
        //  }
        
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);
        
    });
    
}


//detecting keyboard press

document.addEventListener("keydown",function(event){
    
    // alert("Key was pressed");
    makeSound(event.key);
    
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        
     
        default:
            console.log(buttonInnerHTML);
     }
     
}

function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("." + currentKey);
 
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}

// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();



