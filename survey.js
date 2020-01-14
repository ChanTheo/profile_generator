const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const userInfo = {};


//Name
rl.question('What\'s your name? Nicknames are also acceptable', (answer) => {
  userInfo.Name = answer;
  console.log(`Thank you for your valuable feedback: ${userInfo.Name}`);
  // activity
  rl.question('What\'s an activity you like doing?', (answer) => {
    userInfo.Activity = answer;
    console.log(`Thank you for your valuable feedback: ${answer}`);
    // Music
    rl.question('What do you listen to while doing that?', (answer) => {
      userInfo.Music = answer;
      console.log(`Thank you for your valuable feedback: ${answer}`);
      // MEAL
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        userInfo.Meal = answer;
        console.log(`Thank you for your valuable feedback: ${answer}`);
        // FOOD
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          userInfo.Food = answer;
          console.log(`Thank you for your valuable feedback: ${answer}`);
          // SPORT
          rl.question('Which sport is your absolute favourite?', (answer) => {
            userInfo.Sport = answer;
            console.log(`Thank you for your valuable feedback: ${answer}`);
            // Super Power
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              userInfo.SuperPower = answer;
              console.log(`Thank you for your valuable feedback: ${answer}`);
              // Paragraph
              console.log(`${userInfo.Name} loves listening to ${userInfo.Music} while ${userInfo.Activity}, devouring ${userInfo.Food} for ${userInfo.Meal}, prefers ${userInfo.Sport} over any other sport, and is amazing at ${userInfo.SuperPower}. `);
                
              rl.close();
            });
          });
        });
      });
    });
  });
});







