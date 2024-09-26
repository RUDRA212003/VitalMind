document.getElementById('submitBtn').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var usernamePattern = /^[A-Za-z0-9_]+$/;
  
  if (!usernamePattern.test(username)) {
      alert('Username can only contain letters, numbers, and underscores.');
      return false;
  }

  if (username && password) {
      // Hide the login form and show the paper blast effect
      document.querySelector('.login-box').classList.add('hidden');
      
      var paperBlast = document.getElementById('paperBlast');
      paperBlast.classList.remove('hidden');
      paperBlast.classList.add('show');
      
      setTimeout(function() {
          paperBlast.classList.remove('show');
          paperBlast.classList.add('hidden');
          document.querySelector('.login-box').classList.remove('hidden');
      }, 300); 
  } else {
      alert('Please fill in both fields.');
  }
});
