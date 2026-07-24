/* 僅在 ?test=1 時執行的瀏覽器自動操作檢查。 */
if(new URLSearchParams(location.search).has("test")){
  addEventListener("load",async()=>{
    const results=[],ok=(name,pass,detail="")=>results.push({name,pass:Boolean(pass),detail});
    const wait=ms=>new Promise(r=>setTimeout(r,ms));
    try{
      ok("新手操作引導",!document.querySelector("#tutorial")?.classList.contains("hidden"));
      document.querySelector("#tutorialDone")?.click();document.querySelector("#tutorialDone")?.click();document.querySelector("#tutorialDone")?.click();
      ok("新手引導完成",document.querySelector("#tutorial")?.classList.contains("hidden"));
      const api=window.__adventureTest;
      ok("首頁載入",document.querySelector("#homeView.active"));
      for(const id of ["collectionView","badgesView","recordsView","homeView"]){document.querySelector(`[data-open="${id}"]`)?.click();ok(`導覽 ${id}`,document.querySelector(`#${id}.active`))}
      api.openTopic("home");ok("主題導覽",document.querySelector("#topicView.active")&&document.querySelectorAll(".learn-card").length===10);
      const firstCard=document.querySelector(".learn-card"),flip=firstCard.querySelector("[data-flip]");flip.click();ok("卡牌翻面",firstCard.classList.contains("flipped"));flip.click();
      const speechCalls=[],originalSpeak=AdventureSpeech.speak;AdventureSpeech.speak=(text,rate)=>{speechCalls.push({text,rate});return Promise.resolve()};
      firstCard.querySelector("[data-say-normal]").click();firstCard.querySelector("[data-say-slow]").click();ok("正常英文發音",speechCalls.some(x=>x.rate===.85));ok("慢速英文發音",speechCalls.some(x=>x.rate===.55));
      AdventureSpeech.speak=originalSpeak;
      for(const gameMode of ["picture","listen"]){api.setMode(gameMode);const item=api.getCurrent(),button=document.querySelector(`[data-answer="${item.id}"]`);ok(`${gameMode} 顯示`,button);if(gameMode==="picture"){const wrong=[...document.querySelectorAll("[data-answer]")].find(x=>x.dataset.answer!==item.id);wrong?.click();ok("答錯友善提示",document.querySelector("#gameFeedback")?.textContent.includes("再聽一次")&&!wrong.disabled)}button?.click();await wait(20);ok(`${gameMode} 答題`,document.querySelector("#gameFeedback")?.textContent.includes("Excellent"));ok("答對星星動畫",document.querySelectorAll(".flying-star").length>=5)}
      api.setMode("order");const item=api.getCurrent(),target=item.phrase.replace(/[.!?]/g,"").split(" "),bank=document.querySelector("#answerBank");for(const word of target){const chip=[...document.querySelectorAll("#wordBank .word-chip")].find(x=>x.dataset.word===word);if(chip){const transfer=new DataTransfer();chip.dispatchEvent(new DragEvent("dragstart",{bubbles:true,dataTransfer:transfer}));bank.dispatchEvent(new DragEvent("drop",{bubbles:true,cancelable:true,dataTransfer:transfer}))}}document.querySelector("#checkOrder").click();ok("句子拖曳排序",document.querySelector("#gameFeedback").textContent.includes("Great job"));
      const progress=api.getState();ok("星星計算",progress.stars>=6,`stars=${progress.stars}`);ok("經驗值計算",progress.xp>=60,`xp=${progress.xp}`);ok("關卡解鎖",progress.unlocked>=2,`unlocked=${progress.unlocked}`);const stored=AdventureStorage.load();ok("localStorage進度",stored.stars===progress.stars&&stored.xp===progress.xp);
      for(let i=0;i<2;i++){api.setMode("picture");const extra=api.getCurrent();document.querySelector(`[data-answer="${extra.id}"]`)?.click();await wait(30)}
      await wait(800);const gameState=api.getState();ok("關卡完成慶祝",!document.querySelector("#celebration").classList.contains("hidden"));ok("寶箱進度與開啟",gameState.chests>=1&&document.querySelector("#chestBar").style.width==="0%");ok("每日任務",gameState.daily>=3&&document.querySelector("#dailyBar").style.width==="100%");ok("連續學習天數",gameState.streak>=1&&document.querySelector("#streakLabel").textContent.includes("連續學習"));ok("卡牌收藏與熟練度",Object.values(gameState.cards).some(x=>x.collected&&x.mastery>0));document.querySelector("#celebrationDone").click();api.show("badgesView");ok("主題徽章",document.querySelectorAll(".achievement:not(.locked)").length>=1);api.show("homeView");
      ok("可愛學習夥伴",document.querySelector("#buddy").textContent.includes("🦊")&&document.querySelector("#buddyMessage").textContent.includes("答對"));
      ok("畫面無橫向溢出",document.documentElement.scrollWidth<=innerWidth,`${document.documentElement.scrollWidth}/${innerWidth}`);
    }catch(error){ok("測試程式",false,error.message)}
    const report=document.createElement("pre");report.id="e2eReport";report.textContent=JSON.stringify({viewport:`${innerWidth}x${innerHeight}`,passed:results.filter(x=>x.pass).length,total:results.length,results},null,2);document.body.innerHTML="";document.body.append(report);
  });
}
