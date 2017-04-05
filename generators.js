function *nameList(){
  yield "Sam";
  yield "Tyler";
}

for(let name of nameList()){
  console.log(name);
}

//Using spread operator
let name = [...nameList()];
console.log(name);

//Destructuring
let [first,second] = nameList();
console.log(first);
console.log(second);


//Refactoring Object iterators using generators
let post = {
  title: "New Feature in JS",
  replies: 19
};

post[Symbol.iterator] = function *(){
  let properties = Object.keys(this);
  for(let p of properties){
    yield this[p];
  }
};

for(let p of post){
  console.log(p);
};
