const AdventureStorage=(()=>{
  const learner=()=>sessionStorage.getItem("fox-student")||"guest";
  const key=()=>`english-adventure-${learner()}`;
  const defaults=()=>({stars:0,xp:0,level:1,sound:true,lastTopic:"home",unlocked:1,tutorial:false,daily:0,streak:1,
    cards:{},topicWins:{},mistakes:{},sessions:0,correct:0,wrong:0,pronunciation:0,minutes:0,days:{}});
  const load=()=>{try{return {...defaults(),...JSON.parse(localStorage.getItem(key())||"{}")}}catch{return defaults()}};
  const save=state=>localStorage.setItem(key(),JSON.stringify(state));
  const reset=()=>localStorage.removeItem(key());
  return{load,save,reset,learner};
})();
