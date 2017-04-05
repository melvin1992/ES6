//default means you can change the function name
//export default function(message){
function alertMessage(message){
  console.log(message);
}

function showLogMessage(msg){
  console.log(msg);
}

export { alertMessage, showLogMessage };

//Exporting class
export default class flashMessage{
  constructor(msg){
    this.message = msg;
  }
  renderAlert(){
    console.log(  this.message);
  }
}
