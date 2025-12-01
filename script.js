function checkName() {
    let name = document.getElementById("username").value.trim();
    let msg = document.getElementById("msg");

    if (name === "") {
        msg.innerHTML = "Please enter a name!";
        return;
    }

    if (name.toLowerCase() === "miss mature") {
        window.location.href = "birthday.html";
    } else {
        msg.innerHTML = "❌ Access Denied";
    }
}
