const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (words) => {
    let new_words = [];
    return new Promise((resolve, reject) => {
        for(let i = 0; i < words.length; i++){
            if (!(typeof words[i] === "string")){
                new_words[i] = words[i];
            } else{
                new_words[i] = words[i].toUpperCase();
            }
        }        
        if(words.length > 0) {
            resolve(new_words);
        }
        else {
            reject('empty array');
        }
    });
};

const sortWords = (words) => {
    return new Promise((resolve,reject) => {
        words.sort();
        if(words.length > 0){
            resolve(words);
        }
        else 
        {
            reject('empty array');
        }
    });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })