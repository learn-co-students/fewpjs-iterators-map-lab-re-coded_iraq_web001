const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
return tutorials.map((text)=>{
  let words = text.split(" ");
  let newtext ="";
  for(let i=0;i<words.length;i++){
    let word = words[i].charAt(0).toUpperCase() + words[i].substring(1,words[i].length)
    if(i<words.length -1){
      newtext += word + " "
    }
    else {
      newtext += word
    }
  }console.log(newtext)
return newtext
})
}
titleCased()
