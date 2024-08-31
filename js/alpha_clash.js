// function play(){
//     //step-1 hide the home screen. to hide the home screen add the class hidden to the home section

//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add('hidden'); // when the button is clicked, it will vanish the home screen by adding a hidden class in the js
//     // console.log(homeScreen.classList);

//     //step-2: show the playground
//     const playGround = document.getElementById('play-Ground');

//     console.log(playGround.classList)
//         playGround.classList.remove('hidden');
// }
function continueGame (){
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet" , alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    
    //set background color
    addBGById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-Ground');
    continueGame();
}