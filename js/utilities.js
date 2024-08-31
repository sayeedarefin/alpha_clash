function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

    }

function addBGById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


    // get a random alphabet
function getARandomAlphabet(){
    // create an alphabet array
    const alphantString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphantString.split('');
    // console.log(alphabets);

    //get a random index between 0-25
    const random = Math.random()*25;
    const index = Math.round(random);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);


    return alphabet;
    }