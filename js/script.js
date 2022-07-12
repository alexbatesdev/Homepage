let dropdown = document.getElementById("dropdownToggle");

dropdown.addEventListener("click", evt => {
    document.getElementById("dropContent").classList.toggle("show");
    document.getElementById("dropArrow").classList.toggle("up");
    console.log("Gluck")
})

window.onclick = function(event) {
    if (!event.target.matches(".drop-btn")) {
        var dropdown = document.getElementById("dropContent");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
            }
        }
    }
}