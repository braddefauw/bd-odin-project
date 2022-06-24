console.log("test");

// URL (required), options (optional)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=WhTwROHDvG43k75Hb5sgJ90BHwBpIL56&s=dogs', {mode: 'cors'})
  .then(function(response) {
    // Successful response :)
    console.log("Success!")
  })
  .catch(function(err) {
    // Error :(
      console.log(err);
  });
