import * as flash from './flash-message';

//flashMessage("Hello")
flash.alertMessage("Alert Hello");
flash.showLogMessage("Log Hello");

//Or using this
import { alertMessage, showLogMessage } from './flash-message';
alertMessage("Alert Hello");
showLogMessage("Log Hello");

//Getting the constants
import { MAX_USERS, MAX_REPLIES } from './constants';
console.log(MAX_USERS);
console.log(MAX_REPLIES);


//Importing class
import FlashMessage from './flash-message';
let flash = new FlashMessage("Hello");
