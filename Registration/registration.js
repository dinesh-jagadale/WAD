var users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var user = {
        name: name,
        email: email,
        mobile: mobile
    };

    // Simple AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

            // Store data regardless of API result
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration Successful!");
            document.getElementById("registrationForm").reset();
        }
    };

    xhr.send(JSON.stringify(user));
});