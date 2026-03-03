var users = JSON.parse(localStorage.getItem("users"));

var table = document.getElementById("userTable");

if (users != null) {

    for (var i = 0; i < users.length; i++) {

        var row = "<tr>" +
                  "<td>" + users[i].name + "</td>" +
                  "<td>" + users[i].email + "</td>" +
                  "<td>" + users[i].mobile + "</td>" +
                  "</tr>";

        table.innerHTML = table.innerHTML + row;
    }
}