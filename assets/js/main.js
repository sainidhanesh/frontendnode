const toggle = document.getElementById("toggle")
const nav = document.querySelector("header nav")

toggle.onclick = () => nav.classList.contains("hide") ? nav.classList.replace("hide", "grid") : nav.classList.replace("grid", "hide")