const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {

        message.textContent = "Login successful! 🎉";
        message.style.color = "green";

        // Open dashboard after login
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {

        message.textContent = "Please enter email and password.";
        message.style.color = "red";

    }
});