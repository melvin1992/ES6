//Sets only store unique value or objects
let tags = new Set();

tags.add("A");
tags.add("B");
tags.add({letter:"C"});
tags.add("B");

console.log("Total items: ", tags.size);

//weakSet only objects are allowed to be set
