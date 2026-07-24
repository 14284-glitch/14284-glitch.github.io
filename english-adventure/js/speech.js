const AdventureSpeech=(()=>{
  let activeElement=null;
  const supported="speechSynthesis" in window;
  function voice(){return speechSynthesis.getVoices().find(v=>/^en-(US|GB|AU)/.test(v.lang))||speechSynthesis.getVoices().find(v=>v.lang.startsWith("en"))}
  function speak(text,rate=0.85,element=null){
    if(!supported){window.adventureToast?.("這個瀏覽器無法播放語音，其他遊戲功能仍可使用。");return Promise.resolve()}
    speechSynthesis.cancel();activeElement?.classList.remove("speak-highlight");activeElement=element;element?.classList.add("speak-highlight");
    return new Promise(resolve=>{const utterance=new SpeechSynthesisUtterance(text);utterance.lang="en-US";utterance.rate=rate;utterance.voice=voice()||null;
      utterance.onend=utterance.onerror=()=>{element?.classList.remove("speak-highlight");activeElement=null;resolve()};speechSynthesis.speak(utterance)});
  }
  async function dialogue(lines,element){for(const line of lines){await speak(line.text,.82,element);await new Promise(r=>setTimeout(r,450))}}
  return{supported,speak,dialogue};
})();
