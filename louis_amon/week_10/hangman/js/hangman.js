var hangman = {
 GUESSLIMIT: 10,
 guessCount: 0,
 words: ["fiddle", "children", "saxophone","Happy", "Session","Relegation","interview","function"],
 word: function(){
   return _.sample(this.words);
 },

  alphabets: function(){
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  },

  sampleWord: function(){
   return this.word().toUpperCase();
  },

  wordLength: function(){
    return this.sampleWord().length;
  },

  guessedLetters: function(){
    return new Array(this.wordLength());
  },

  guesses: [],

  letterMatch: function(word, letter){
    if(word.includes(letter)){
    return true;
  }
    else {
      return false;
    }
  },

  indicesMatch: function(word, l){
    var indices = [];
    for(var i = 0; i < word.length; i++){
      if (word[i] === l){
        indices.push(i);
      }
    }
    return indices;
  },

  win: function(word, guessedWord){
    word = word.split('').sort().join('');
    guessedWord = guessedWord.split('').sort().join('');
    // debugger;
    if(word === guessedWord && this.guessCount < this.GUESSLIMIT) {
      this.guessCount = 0;
      return true;
    }
  },
  lose: function(word, guessedWord){
    word = word.split('').sort().join('');
    guessedWord = guessedWord.split('').sort().join('');
    if(word !== guessedWord && this.guessCount >= this.GUESSLIMIT) {
      return true;
    }
  }
}
