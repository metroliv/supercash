function login() {
  var username = document.getElementById("username").value;
  
  // Here you would typically send a request to your backend server to authenticate the user
  // and set up the session. For now, we'll just simulate a successful login.
  var isLoggedIn = true; // Simulated login status
  
  if (isLoggedIn) {
    alert("Login successful. Welcome, " + username + "!");
    // Redirect to the main page or perform the next action
    window.location.href = "index.html"; // Change "main_page.html" to your desired page
  } else {
    alert("Login failed. Please check your credentials.");
  }
}
