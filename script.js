/*Navbar Scrolling*/
document.getElementById("nav1").addEventListener("click", function () {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("nav2").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("nav3").addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("nav4").addEventListener("click", function () {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("nav5").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
})

/*Menu*/
document.querySelectorAll(".menu-item-card .sign").forEach(function (button) {
    button.addEventListener("click", function () {
        window.location.href = "./signatures.html";
    });
});