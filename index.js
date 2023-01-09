// [] Your Trainings To Add Features
// ---- [01] Save Score To Local Storage With Date
// ---- [02] Choose Levels From Select Box
// ---- [03] Break The Logic To More Functions
// ---- [04] Choose Array Of Words For Every Level
// ---- [05] Write Game Instruction With Dynamic Values
// ---- [06] Add 3 Seconds For The First Word



// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];

//   Seting Levels
  const lvls = {
    "Easy": 5,
    "Normal": 4,
    "Hard": 3
  }

//   Default Level
   let defaultLevelName = "Normal";  // Change Level From Here
   let defaultLevelSeconds = lvls[defaultLevelName]

//    Catch Selectore

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML= words.length

// Disable Past Event
input.onpaste =function(){
  return false ;
}

// startButton
startButton.onclick = function(){
  this.remove()
  input.focus()
  // Generate Word Function
  genWords() 

}

function genWords() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove WordFrom Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;
  // Empty Upcoming Words
  upcomingWords.innerHTML = '';
  // Generate Words
  for (let i = 0; i < words.length; i++) {
    // Create Div Element
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  //  Start Play 
   startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // stop time in Zero "0"
      clearInterval(start);
      // compare words
      if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
        // Empty input
        input.value = '';
        // plusing score
        scoreGot.innerHTML++
        if (words.length > 0) {
          // Generate Word Function
          genWords() 
        }else{
          let span = document.createElement('span');
          span.className='good';
          let spanText = document.createTextNode('Congratulation 🎉');
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // Remove Upcoming Words Box 
          upcomingWords.remove()
        }

      }else{
        let span = document.createElement('span');
        span.className='bad';
        let spanText = document.createTextNode('Game Over ☹');
        span.appendChild(spanText);
        finishMessage.appendChild(span);
        // Empty input
        input.value = '';
      }

    }
  }, 1000);
}
 

