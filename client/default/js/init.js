/*
 JSON is automatically included with each app.

 Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger
 loading the local config and binding a click event to invoke the cloud action
 call which will return the remote config.
 */

function showLoggedIn(emailAddress){
  $.mobile.changePage( "#loggedin", { transition: "slide"} );
  $('#content').text("Welcome " + emailAddress + " you are logged in");

}

function homeShow(){
  $.mobile.changePage( "#home", { transition: "slide"} );

}

function showError(message){
  $('#error').text(message);
}

$fh.ready(function() {

  // The local config variable from config.js can be accessed directly


  document.getElementById('run_button').onclick = function() {
    // Invoke a cloud action call to get the remote configuration
    // See: http://docs.feedhenry.com/wiki/Actions

    var url = "http://www.google.com";
    $fh.auth({
      "policyId":"<YOUR_POLICY>",
      "clientToken":"<YOUR_APP_ID>"
    }, function(res){
      showLoggedIn(res.authResponse.email);


    }, function (err){
      showError(err.message);
      alert(JSON.stringify(err));
    });


  };
});