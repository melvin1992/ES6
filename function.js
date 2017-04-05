//Assigning default values
function loadProfile(userNames = []){
  let namesLength = userNames.length;
  console.log(namesLength);
}

loadProfile(); //return 0
loadProfile(["Melvin"]) //return 1a

//Using Named Parameters to assigned in the object
function setPageThread(name,{popular, expires, activeClass} = {}){
  console.log("name: ", name);
  console.log("popular: ", popular);
  console.log("expires: ", expires);
  console.log("activeClass: ", activeClass);
};

setPageThread("New version coming soon",{
  popular: true,
  expires: 10000,
  activeClass: "is-page-thread"
});

//Using Rest Parameters ...
//Rest parameters should always be the last parameters
function displayTags(...tags){
  for(let i in tags){
    let tag = tags[i];
    _addToTopic(tag);
  }
}

//Spread operator ... that converts array to individual arguments
getRequest('/music/17/tags',function(data){
  let tag = data.tags;
  displayTags(...tags);
});

//Arrow function and Render
function tagComponent(target, urlPath){
  this.targetElement = target;
  this.urlPath = urlPath;
}

//(data)=> is used to get the this.targetElement 
tagComponent.prototype.render = function(){
  getRequest('/music/17/tags',(data)=>{
    let tags = data.tags;
    displayTags(this.targetElement, ...tags);
  });
}
