function dark() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}
