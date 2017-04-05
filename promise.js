function getPollResultsFromServer(pollName) {
  
  return new Promise(function(resolve, reject) {
    let url = `/results/${pollName}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400){
        resolve(JSON.parse(request.response));
      }else{
        reject(new Error(request.status));
      }
    };
    request.onerror = function(){
      reject(new Error("Error fetching results"));
    }

    request.send();

  });

}


//Calling thep Promise function
getPollResultsFromServer("Sass vs Less")
  .then(function(results){
    return results.filter((results)=> result.city === "Orlando");
  })
  .then(function(resultFromOrlando){
    console.log(resultFromOrlando);
  })
  .catch(function(error){
    console.log("Error: ", error);
  });
