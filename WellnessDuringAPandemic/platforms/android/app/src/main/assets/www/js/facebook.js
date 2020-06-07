
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
  
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
  
function authResponce() {
    FB.login(function(response) {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      }, { scope: 'public_profile,email' });
}
