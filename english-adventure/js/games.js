const AdventureGames=(()=>{
  const shuffle=a=>[...a].sort(()=>Math.random()-.5);
  function choices(item,all,count=3){return shuffle([item,...shuffle(all.filter(x=>x.id!==item.id)).slice(0,count-1)])}
  function picture(item,all,onAnswer){
    const opts=choices(item,all);return `<div class="game-stage"><p class="eyebrow">模式一・看圖選句子</p><div class="scene" role="img" aria-label="${item.translation}">${item.image}</div><h3>哪一句最符合圖片？</h3><div class="options-grid">${opts.map(x=>`<button class="game-option" data-answer="${x.id}">${x.phrase}</button>`).join("")}</div><div class="feedback" id="gameFeedback" aria-live="polite"></div></div>`;
  }
  function listen(item,all){
    const opts=choices(item,all);return `<div class="game-stage"><p class="eyebrow">模式二・聽聲選圖片</p><button class="primary big" data-speak="${item.id}">🔊 播放生活常用語</button><h3>選出符合句子的圖片</h3><div class="options-grid">${opts.map(x=>`<button class="game-option scene" aria-label="${x.translation}" data-answer="${x.id}">${x.image}</button>`).join("")}</div><div class="feedback" id="gameFeedback" aria-live="polite"></div></div>`;
  }
  function order(item){
    const words=shuffle(item.phrase.replace(/[.!?]/g,"").split(" ").map((word,i)=>({word,id:i})));
    return `<div class="game-stage"><p class="eyebrow">模式三・句子排序</p><div class="scene">${item.image}</div><h3>${item.translation}</h3><p>拖曳或依序點選單字，排成正確句子。</p><div class="answer-bank drop-zone" id="answerBank" data-drop-zone="answer" aria-label="句子排列區"></div><div class="word-bank drop-zone" id="wordBank" data-drop-zone="words" aria-label="待選單字">${words.map(x=>`<button class="word-chip" draggable="true" data-word="${x.word}">${x.word}</button>`).join("")}</div><button class="primary" id="checkOrder">完成句子</button><div class="feedback" id="gameFeedback" aria-live="polite"></div></div>`;
  }
  return{picture,listen,order,shuffle};
})();
