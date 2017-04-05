"use strict";

const polyglot = {
    name : "Michel Thomas",
    languages : ["Spanish", "French", "Italian", "German", "Polish"],
    introduce : function () {
        // this.name is "Michel Thomas"
        const self = this;
        this.languages.forEach(function(language) {
            // this.name is undefined, so we have to use our saved "self" variable
            console.log("My name is " + self.name + ", and I speak " + language + ".");
        });
    }
}

polyglot.introduce();
