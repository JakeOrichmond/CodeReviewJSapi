var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repo) {
      repoInfo = "<h3>" + repo.name + "<br>" + "Description: " + repo.description + "</h3>";

      $("#searchResults").append(repoInfo);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("#searchResults").append("Error: No user with that name found.")
  });
};
