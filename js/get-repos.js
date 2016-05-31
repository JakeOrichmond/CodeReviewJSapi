var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repo) {
      repoInfo = "<h3>Repository Name: " + repo.name + "<br>" + "Description: " + repo.description + "</h3>";

      $("#searchResults").append(repoInfo);
    });
    $("#username").append("<h1>User: " + user + "</h1>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("#searchResults").append("<h1>Error: No user with that name found.</h1>");
  });
};
