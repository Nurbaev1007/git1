 function  speak(text) {
    const message = new  SpeechSynthesisUtterance();
    message.lang = "ru-Ru";
    message.text = text;
    window.speechSynthesis.speak(message);
 }
 const btnSpeak = document.querySelector('#speak');
 const textMessage = document.querySelector('#message');

 btnSpeak.addEventListener("click", ()=>{
    speak(textMessage.value);
 });