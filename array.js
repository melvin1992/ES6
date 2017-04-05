let users = ["Melvin","John","Bagsik"];
let [a,b,c] = users;

console.log(a, b, c);

//Using for.. of.. only for array and not on objects
for(let name of users){
  console.log(name);
}

//Using array.find
let names = [
  {name: "Melvin", admin:false},
  {name: "John", admin:true},
  {name: "Bagsik", admin:true}
];

let admin = names.find(function(name){
  return name.admin;
});

let adminShortcut = names.find((name)=> name.admin );

console.log(admin);
