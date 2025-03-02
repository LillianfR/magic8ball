function generate_random (max_number) {

   return Math.round(Math.random()*max_number);
}

    let button = document.querySelector("button");
    let answer = document.querySelector("#answer");
   
    button.addEventListener("click", function()
    //click to generate
 {
    let randomNumber = generate_random(3);
    // rolls numbers 0-3
    
 
    let answerText = "";

 if (randomNumber == 0) {
     answerText = "Yes definitely!";
 }
 else if (randomNumber == 1) {
     answerText = "No, certainly not!";
 }
 else if (randomNumber == 2) {
    answerText = "Ask again later!";
 }
 else {
    answerText = "I really don't care!";
} 
answer.innerHTML = answerText;
});

