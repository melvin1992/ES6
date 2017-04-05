//Using object initializer shorthand
function buildUser(first, last, postCount){
  let fullName = first + " " + last;
  //using template String enclose in ``
  let fullName1 = `${first} ${last}`;
  const MAX_POST = 10;

  return { //Object initializer shorthand
    first,
    last,
    fullName,
    isActive(){ //Method initializer shorthand, no more funtion word
        return postCount >= MAX_POST;
    }
  };
}

//Object destructuring
let {first, last, fullName, isActive} = buildUser("Melvin John", "Bagsik", 9);
console.log(first);
console.log(last);
console.log(fullName);
console.log(isActive());
