
import * as fs from 'fs';

// pull in the data dictionary
let rawdata = fs.readFileSync('./dictionary.json');  
let dictionary = JSON.parse(rawdata); 

class ScrabbleHand {

  /*
    the constructor takes a dictionary (array of strings)
    with all the valid words.
  */
  constructor(dict) {
    this._dict = dict.dictionary;
  }
  
  /*
  Solve hand takes a string parameter "tiles" consisting of 1 to 7 (inclusive) characters: [a-z] and *
  The * character you can consider a wild card tile.  It can be used as any 
  character. 

  Solve hand should return an array of strings of ALL possible legitimate words

  If the wild card was used, the output should replace the wild character with the actual character required for the 
  word.

  Example 
  instead of "b*t"
  the output would be "bat"

  */
  solveHand(tiles) {
    return [];
  }
}

let sh = new ScrabbleHand(dictionary);
const output = sh.solveHand('*bt');

if(output.indexOf('bat') === -1 
|| output.indexOf('bet') === -1 
|| output.indexOf('bit') === -1 
|| output.indexOf('bot') === -1
|| output.indexOf('but') === -1
|| output.indexOf('tab') === -1
|| output.indexOf('tub') === -1)
{
  console.log( "FAIL" );
} else {
  console.log( "PASS" );
}

const output2 = sh.solveHand('abcd');

if(output2.indexOf('a') === -1
|| output2.indexOf('bad') === -1 
|| output2.indexOf('cab') === -1 
|| output2.indexOf('cad') === -1
|| output2.indexOf('dab') === -1)
{
  console.log( "FAIL" );
} else {
  console.log( "PASS" );
}