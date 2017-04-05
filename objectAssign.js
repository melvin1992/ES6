function countdownTimer(target, timeLeft, options = {}){
  let defaults = {
    container:          ".timer-display",
    timeUnit:           "seconds",
    clonedDataAttribute:"cloned",
    timeoutClass:       ".is-timeout",
    timeoutSoonClass:   ".is-timeout-soon",
    timeoutSoonTime:    10
  };

  let setting = Object.assign({}, defaults, options); //Merging the options to default and assign to setting using object.assign

  console.log(setting.container);
  console.log(setting.timeUnit);
}

countdownTimer('div',10,{container:'.timer'});
