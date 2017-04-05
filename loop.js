"use strict";

// Simple & Clean
for (let i = 1; i < 6; i += 1) {
    setTimeout(function() {
        console.log("I've waited " + i + " seconds!");
    }, 1000 * i);
}

// Totally dysfunctional
for (var j = 0; j < 6; j += 1) {
        setTimeout(function() {
        console.log("I've waited " + j + " seconds for this!");
    }, 1000 * j);
}
