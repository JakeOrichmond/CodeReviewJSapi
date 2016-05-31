var getRepos = require("./../js/get-repos.js").getRepos;

$(document).ready(function() {

  $("#searchSubmit").click(function() {
    $("#username").empty();
    $("#searchResults").empty();
    var user = $("#userSearch").val();
    getRepos(user);

  });
});
