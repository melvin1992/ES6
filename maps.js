//use maps when kes are unknown else use object
let totalReplies = new Map();
totalReplies.set("user1", 5);
totalReplies.set("user2", 32);
//
// console.log(totalReplies.get(user1));
// console.log(totalReplies.get(user2));

for(let [key, value] of totalReplies){
  console.log(`${key} = ${value}`);
}

//weakMaps only objects are allowed to be a key
