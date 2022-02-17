
function play() {

    let strNumInput = document.getElementById("input-number");
    let resultText = document.getElementById("result-text");
    let btnReset = document.getElementById("btn-reset");
    let btnGuess = document.getElementById("btn-guess");
    let numRandom = null;


    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)  + min);   
    }

    function guessTheNumber(){
        numInput = Number(strNumInput.value) ;
        numRandom = getRandomNumber(1,5);
        resultText.style.display = "block";
       resultText.innerHTML = ( numInput == numRandom) ? "Success!" : "Failure!";
       if(resultText.innerHTML == "Success!"){
           resultText.style.color = "var(--success-color)"
       }
       else {
           resultText.style.color = "var(--failure-color)"
       }
       
       console.log(numRandom);

        // alert(numInput)
    }

    function reset(){
        strNumInput.value = " ";
        resultText.style.display = "none";
        window.location.reload();
    }

    btnGuess.addEventListener("click",guessTheNumber);
    btnReset.addEventListener("click", reset);


}

play();