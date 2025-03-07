function generate_random(max_number) {
   // This function generates a random number between 0 and the max_number (inclusive)
   // Math.random() creates a random decimal between 0 and 1
   // Multiplying by max_number scales the range, and Math.round() rounds the result to the nearest whole number
   return Math.round(Math.random() * max_number);
   }
   
   let button = document.querySelector("button");
   let answer = document.querySelector("#answer");
   
   button.onclick = function () {
   let randomNumber = generate_random(3);
   // rolls numbers 0-3
   
   let answerText = "";
   
   if (randomNumber == 0) {
   answerText = "Yes definitely!";
   } else if (randomNumber == 1) {
   answerText = "No, certainly not!";
   } else if (randomNumber == 2) {
   answerText = "Ask again later!";
   } else {
   answerText = "I really don't care!";
   }
   answer.innerHTML = answerText;
   };
   
   