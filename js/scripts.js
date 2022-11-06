const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const resulr=document.getElementById("result");
const sound=document.getElementById("sound");

const btn=document.getElementById("search-btn");

btn.addEventListener("click",() =>{
  let inWord=document.getElementById("inp-word").value;
  // console.log(inWord);
  fetch(`${url}${inWord}`).then((response) =>response.json()).then((data) =>{
     // console.log(data);
     result.innerHTML=`<div class="word"><h3>${inWord}</h3><button onclick="playSound()"><i class="fas fa-volume-up"></i></button></div><div class="details"><p>${data[0].meanings[0].partOfSpeech}</p><p>/${data[0].phonetic}/</p></div><div class="word-meaning"><p>${data[0].meanings[0].definitions[0].definition}</p></div><div class="word-example"><p>${data[0].meanings[0].definitions[0].example || ""}</p></div>`;sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    });

});
function playSound(){
  sound.play()
} 