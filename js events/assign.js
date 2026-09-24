document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("box").classList.add("show");
});

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("box").classList.remove("show");
});