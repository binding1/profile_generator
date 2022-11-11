const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const answers = [];
let index = 0

const survey = () => {
  rl.question(questions[index], (answer) => {
    console.log(`Your answer is: ${answer}`);
    answers.push(answer);
    index++;
    if (index === questions.length) {
      rl.close()
      console.log(`\n\nHere is your profile!\n\nMy name is ${answers[0]}, and an activity I like is ${answers[1]}. I like to listen to ${answers[2]} during my activity.\n\nMy favourite meal is ${answers[3]}, where I like to eat ${answers[4]}.\n\nMy absolute favourite sport is ${answers[5]}.\n\nMy superpower is ${answers[6]}. I'm amazing at it!`);
    } else {
      survey();
    }
    });  
};

survey();

