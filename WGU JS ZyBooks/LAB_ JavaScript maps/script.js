function calcWordFrequencies() {
    let sentence = prompt("Enter Sentence:", "Text Here").split(" ");
    let words = new Map();
    for(word in sentence) {
        if(!words.has(sentence[word])){
            words.set(sentence[word], 1)
        } else {
            words.set(sentence[word], words.get(sentence[word]) + 1)
        }
    } 
    for(var [key,value] of words){
        console.log(`${key} ${value}`)
    }
}