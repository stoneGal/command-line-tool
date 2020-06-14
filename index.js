const request = require('request');
// const readline = require('readline');
const fs = require('fs');
const searchTerm = process.argv[2]
const options = {
  url: `https://icanhazdadjoke.com/search?term=${searchTerm}`,
  headers: {
    'User-Agent': 'request',
    Accept: 'application/json'
  }
};

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        const jokes = JSON.parse(body).results
        parseJokes(jokes)
      }
      else{
        console.log('error', error)
      }
      });

      function parseJokes(jokes) {
        if (jokes.length !==0){
          const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
          const joke = randomJoke.joke
          fs.appendFile('jokes.txt', joke + "\n", function(err) {
            if(err) throw err;
            console.log('update file with random joke');
          });
        }
        else {
          console.log('no jokes matches  the search term')
        }
      }
  


// let text = [];
//   request(options, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//   let result =  rl.question('Input your word? ', function (joke) {
      // console.log(`${joke} \n "${body}"`);

        // body.includes(joke)
        // ? console.log(` \n "${body}"`)
        // : console.log(
        //     `No output for your match  "${joke}", but we have this,\n "${body}"`
        //   );
          // fs.writeFile('jokes.txt', result, (err) => {
          //   (err) ? console.log("====>", err) : console.log('Successfully Written to File.');
          // });
            
//       rl.close();
//       fs.writeFile('jokes.txt', result, (err) => {
//         (err) ? console.log("====>", err) : console.log('Successfully Written to File.');
//       });
      
//     });
    
    

//     rl.on('close', function () {
//       console.log('\nBYE BYE !!!');
//       process.exit(0);
//     });
//   } else {
//     console.log('unable to fetch');
//   }
// });

    