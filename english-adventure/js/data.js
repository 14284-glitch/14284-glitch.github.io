/* 60 筆生活英文內容：每個主題 10 筆。 */
const TOPICS=[
  {id:"home",name:"家庭",english:"Home",icon:"🏠",color:"#ef815e",badge:"Home Helper"},
  {id:"school",name:"學校",english:"School",icon:"🏫",color:"#5d8fe8",badge:"School Star"},
  {id:"restaurant",name:"餐廳",english:"Restaurant",icon:"🍽️",color:"#e59c3f",badge:"Restaurant Master"},
  {id:"shopping",name:"商店",english:"Shopping",icon:"🛍️",color:"#b56bd4",badge:"Shopping Expert"},
  {id:"transportation",name:"交通",english:"Transportation",icon:"🚌",color:"#3aa9a1",badge:"Travel Guide"},
  {id:"park",name:"公園與遊樂場",english:"Park and Playground",icon:"🛝",color:"#53a95d",badge:"Park Explorer"}
];
const ROWS={
home:[
["Good morning!","早安！","早上見到家人時使用。","Good morning, Mom!","媽媽，早安！","🌞","Good morning!|Good morning! Did you sleep well?"],
["I am home.","我回來了。","回到家時告訴家人。","Hi, Dad. I am home.","爸爸，我回來了。","🏡","I am home.|Welcome home!"],
["Please come in.","請進。","邀請客人進門時使用。","Please come in and sit down.","請進來坐。","🚪","May I come in?|Please come in."],
["This is my room.","這是我的房間。","介紹自己的房間。","This is my room and my desk.","這是我的房間和書桌。","🛏️","Whose room is this?|This is my room."],
["Let's clean up.","我們來整理吧。","邀請家人一起收拾。","Let's clean up the toys.","我們來收拾玩具吧。","🧹","The room is messy.|Let's clean up."],
["Dinner is ready.","晚餐好了。","告訴家人可以吃飯。","Come and eat. Dinner is ready.","來吃飯，晚餐好了。","🍲","Dinner is ready.|Great! I am hungry."],
["May I help you?","需要我幫忙嗎？","主動幫助家人時使用。","May I help you carry the bag?","我可以幫你拿袋子嗎？","🤝","This box is heavy.|May I help you?"],
["Where is my book?","我的書在哪裡？","找不到物品時詢問。","Where is my storybook?","我的故事書在哪裡？","📕","Where is my book?|It is on the table."],
["I love my family.","我愛我的家人。","表達對家人的愛。","I love my family very much.","我非常愛我的家人。","❤️","I love my family.|We love you, too."],
["Good night.","晚安。","睡覺前道晚安。","Good night. Sweet dreams!","晚安，祝你好夢！","🌙","Good night, Dad.|Good night. Sweet dreams!"]
],
school:[
["Good morning, teacher.","老師早安。","早上見到老師時使用。","Good morning, teacher. How are you?","老師早安，您今天好嗎？","👩‍🏫","Good morning, teacher.|Good morning, class."],
["May I come in?","我可以進來嗎？","進教室前禮貌詢問。","Excuse me. May I come in?","不好意思，我可以進來嗎？","🚪","May I come in?|Yes, please."],
["Please open your book.","請打開課本。","老師請學生打開課本。","Please open your book to page ten.","請把課本翻到第十頁。","📖","Please open your book.|Okay, teacher."],
["I have a question.","我有一個問題。","上課想提問時使用。","Teacher, I have a question.","老師，我有一個問題。","🙋","I have a question.|Please ask."],
["Can I borrow a pencil?","我可以借一枝鉛筆嗎？","需要借文具時使用。","Can I borrow your pencil, please?","我可以借你的鉛筆嗎？","✏️","Can I borrow a pencil?|Sure. Here you are."],
["Let's work together.","我們一起合作吧。","進行小組活動時使用。","Let's work together on this project.","我們一起完成這個作業吧。","🧑‍🤝‍🧑","This is hard.|Let's work together."],
["I know the answer.","我知道答案。","知道答案並想回答時使用。","I know the answer. It is blue.","我知道答案，是藍色。","💡","Who knows the answer?|I know the answer."],
["Please be quiet.","請安靜。","提醒同學降低音量。","Please be quiet in the library.","在圖書館請保持安靜。","🤫","I am reading.|Okay, I will be quiet."],
["See you tomorrow.","明天見。","放學與同學道別。","Bye! See you tomorrow.","再見，明天見。","👋","See you tomorrow.|Bye! Have a nice day."],
["This is my homework.","這是我的作業。","交作業時使用。","Teacher, this is my homework.","老師，這是我的作業。","📝","Do you have your homework?|Yes, this is my homework."]
],
restaurant:[
["A table for two, please.","請給我們兩人桌。","進入餐廳告知人數。","A table for two, please.","請給我們一張兩人桌。","🪑","How many people?|A table for two, please."],
["May I see the menu?","我可以看菜單嗎？","想看菜單時使用。","May I see the menu, please?","我可以看一下菜單嗎？","📋","Are you ready?|May I see the menu?"],
["I would like some rice.","我想要一些飯。","點餐時禮貌表達。","I would like some rice and chicken.","我想要飯和雞肉。","🍚","What would you like?|I would like some rice."],
["Can I have some water?","可以給我一些水嗎？","向服務人員要水。","Can I have some water, please?","可以請給我一些水嗎？","💧","Can I help you?|Can I have some water?"],
["This is delicious!","這真好吃！","稱讚食物好吃。","This soup is delicious!","這碗湯真好喝！","😋","How is your food?|This is delicious!"],
["I am hungry.","我餓了。","告訴別人自己肚子餓。","I am hungry. Let's eat.","我餓了，我們吃飯吧。","🍽️","Are you hungry?|Yes, I am hungry."],
["No spicy food, please.","請不要辣。","點餐時說明不要辣。","No spicy food for me, please.","我的餐點請不要辣。","🌶️","Do you like spicy food?|No spicy food, please."],
["May I have a spoon?","可以給我一支湯匙嗎？","需要餐具時使用。","May I have a clean spoon?","可以給我一支乾淨的湯匙嗎？","🥄","What do you need?|May I have a spoon?"],
["The bill, please.","請結帳。","用餐完請服務人員結帳。","Excuse me. The bill, please.","不好意思，請幫我們結帳。","🧾","Anything else?|The bill, please."],
["Thank you for the meal.","謝謝這一餐。","用餐後表達感謝。","Thank you for the wonderful meal.","謝謝這頓美味的餐點。","🙏","Did you enjoy the meal?|Yes. Thank you for the meal."]
],
shopping:[
["How much is this?","這個多少錢？","詢問商品價格。","Excuse me. How much is this hat?","請問這頂帽子多少錢？","💰","How much is this?|It is ten dollars."],
["I am just looking.","我只是看看。","店員詢問時禮貌回應。","Thank you. I am just looking.","謝謝，我只是看看。","👀","May I help you?|I am just looking."],
["Do you have a smaller size?","有小一點的尺寸嗎？","衣服太大時詢問。","Do you have a smaller size in blue?","有藍色小一點的尺寸嗎？","👕","Is this size okay?|Do you have a smaller size?"],
["Can I try this on?","我可以試穿嗎？","想試穿衣服時使用。","Can I try this jacket on?","我可以試穿這件外套嗎？","🧥","Do you like the jacket?|Can I try this on?"],
["I like the blue one.","我喜歡藍色那個。","表達喜歡的商品。","I like the blue one better.","我比較喜歡藍色那個。","💙","Which one do you like?|I like the blue one."],
["I will take it.","我要買這個。","決定購買時使用。","It looks great. I will take it.","看起來很棒，我要買。","🛍️","Would you like this one?|Yes, I will take it."],
["Can I pay by card?","我可以刷卡嗎？","詢問付款方式。","Can I pay by card here?","我可以在這裡刷卡嗎？","💳","How would you like to pay?|Can I pay by card?"],
["May I have a bag?","可以給我一個袋子嗎？","結帳需要袋子時使用。","May I have a paper bag, please?","可以給我一個紙袋嗎？","🛍️","Do you need a bag?|Yes, may I have a bag?"],
["Where are the toys?","玩具在哪裡？","在商店尋找區域。","Excuse me. Where are the toys?","請問玩具在哪裡？","🧸","May I help you?|Where are the toys?"],
["Keep the change.","不用找錢了。","小額付款後請對方不用找零。","Thank you. Keep the change.","謝謝，不用找錢了。","🪙","Here is your change.|Thank you. Keep the change."]
],
transportation:[
["Where is the bus stop?","公車站在哪裡？","詢問公車站位置。","Excuse me. Where is the bus stop?","請問公車站在哪裡？","🚏","Can I help you?|Where is the bus stop?"],
["Which bus should I take?","我該搭哪班公車？","詢問正確公車路線。","Which bus should I take to school?","去學校該搭哪班公車？","🚌","Where are you going?|Which bus should I take?"],
["One ticket, please.","請給我一張票。","購買車票時使用。","One ticket to Taipei, please.","請給我一張到台北的票。","🎫","How many tickets?|One ticket, please."],
["Please buckle up.","請繫好安全帶。","搭車時提醒安全。","Please sit down and buckle up.","請坐好並繫好安全帶。","🚗","Are you ready?|Yes. I will buckle up."],
["This is my stop.","我要在這站下車。","快到目的地時使用。","Excuse me. This is my stop.","不好意思，我要在這站下車。","🔔","Are you getting off?|Yes, this is my stop."],
["The train is coming.","火車來了。","看到火車進站時使用。","Stand back. The train is coming.","請往後站，火車來了。","🚆","Why should we stand back?|The train is coming."],
["Is this seat taken?","這個座位有人嗎？","詢問座位是否可坐。","Excuse me. Is this seat taken?","不好意思，這個座位有人嗎？","💺","Is this seat taken?|No, you may sit here."],
["Please let people off first.","請先讓乘客下車。","搭乘大眾運輸時提醒。","Please let people off first.","請先讓車上的人下車。","🚇","Can we get on now?|Please let people off first."],
["How long does it take?","需要多久？","詢問交通所需時間。","How long does it take by bus?","搭公車需要多久？","⏱️","How long does it take?|About twenty minutes."],
["We are here!","我們到了！","抵達目的地時使用。","Look! We are here!","看，我們到了！","📍","Are we there yet?|Yes, we are here!"]
],
park:[
["Let's go to the park.","我們去公園吧。","邀請朋友去公園。","It is sunny. Let's go to the park.","天氣晴朗，我們去公園吧。","🌳","What should we do?|Let's go to the park."],
["Can I play with you?","我可以和你一起玩嗎？","想加入其他孩子時使用。","Hi! Can I play with you?","嗨，我可以和你們一起玩嗎？","🧒","Can I play with you?|Of course!"],
["It is my turn.","輪到我了。","遊戲輪流時使用。","It is my turn on the slide.","輪到我溜滑梯了。","🙋","Whose turn is it?|It is my turn."],
["Please wait in line.","請排隊等候。","提醒大家依序排隊。","Please wait in line for the swing.","玩盪鞦韆請排隊。","🚶","Can I go first?|Please wait in line."],
["Push me, please.","請推我一下。","玩盪鞦韆時請人幫忙。","Can you push me, please?","你可以推我一下嗎？","🤸","Are you ready?|Yes. Push me, please."],
["Be careful!","小心！","看到可能危險時提醒。","Be careful on the slide!","溜滑梯時要小心！","⚠️","I want to climb higher.|Be careful!"],
["Let's play catch.","我們來玩接球吧。","邀請朋友玩接球。","Let's play catch with this ball.","我們用這顆球玩接球吧。","⚾","What game should we play?|Let's play catch."],
["The flowers are beautiful.","這些花很漂亮。","欣賞公園花朵時使用。","Look! The flowers are beautiful.","看，這些花很漂亮。","🌼","What do you see?|The flowers are beautiful."],
["Do not pick the flowers.","請不要摘花。","提醒愛護公園植物。","Please do not pick the flowers.","請不要摘這些花。","🌷","Can I take this flower?|No. Do not pick the flowers."],
["Time to go home.","該回家了。","遊玩結束準備回家。","It is getting late. Time to go home.","天色晚了，該回家了。","🌇","Can we play more?|Sorry, time to go home."]
]};
const LEARNING_DATA=TOPICS.flatMap(topic=>ROWS[topic.id].map((r,index)=>({
  id:`${topic.id}_${String(index+1).padStart(3,"0")}`,category:topic.id,phrase:r[0],translation:r[1],usage:r[2],
  example:r[3],exampleTranslation:r[4],image:r[5],difficulty:index<4?1:index<8?2:3,
  dialogue:r[6].split("|").map((text,i)=>({speaker:i%2?"B":"A",text}))
})));
