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
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random()*2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 600);
