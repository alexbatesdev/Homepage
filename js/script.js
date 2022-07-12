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
// ^^^ Dropdown ^^^

let ddBlueberry = document.getElementById("ddBlueberry");
let ddMint = document.getElementById("ddMint");
let ddRaisin = document.getElementById("ddRaisin");
let ddIsland = document.getElementById("ddIsland");
let ddLesbian = document.getElementById("ddLesbian");
//Calls theme switch at startup
dommyMommy();

ddBlueberry.addEventListener("click", (evt) => {
    localStorage.setItem("theme","blueberry");
    dommyMommy();
})

ddMint.addEventListener("click", (evt) => {
    localStorage.setItem("theme","mint");
    dommyMommy();
})

ddRaisin.addEventListener("click", (evt) => {
    localStorage.setItem("theme","raisin");
    dommyMommy();
})

ddIsland.addEventListener("click", (evt) => {
    localStorage.setItem("theme","island");
    dommyMommy();
})

ddLesbian.addEventListener("click", (evt) => {
    localStorage.setItem("theme","pastel");
    dommyMommy();
})

function dommyMommy() {
    let theme = localStorage.getItem("theme")

    switch (theme) {
        case "blueberry":
            document.getElementById("title").innerText = "Blueberry";
            document.documentElement.style.setProperty("--primary-color", "#061A40");
            document.documentElement.style.setProperty("--secondary-color", "#003559");
            document.documentElement.style.setProperty("--tertiary-color", "#006DAA");
            document.documentElement.style.setProperty("--accent-color", "#0353A4");
            document.documentElement.style.setProperty("--text-color", "#B9D6F2");
            break;
        case "mint":
            document.getElementById("title").innerText = "Mint";
            document.documentElement.style.setProperty("--primary-color", "#002A32");
            document.documentElement.style.setProperty("--secondary-color", "#08605f");
            document.documentElement.style.setProperty("--tertiary-color", "#2EC4B6");
            document.documentElement.style.setProperty("--accent-color", "#CBF3F0");
            document.documentElement.style.setProperty("--text-color", "#FFFFFF");
            break;
        case "raisin":
            document.getElementById("title").innerText = "Raisin";
            document.documentElement.style.setProperty("--primary-color", "#201A23");
            document.documentElement.style.setProperty("--secondary-color", "#2E2532");
            document.documentElement.style.setProperty("--tertiary-color", "#43344A");
            document.documentElement.style.setProperty("--accent-color", "#6A477B");
            document.documentElement.style.setProperty("--text-color", "#f8e5ee");
            break;
        case "island":
            document.getElementById("title").innerText = "Island";
            document.documentElement.style.setProperty("--primary-color", "#05668D");
            document.documentElement.style.setProperty("--secondary-color", "#028090");
            document.documentElement.style.setProperty("--tertiary-color", "#00A896");
            document.documentElement.style.setProperty("--accent-color", "#02C39A");
            document.documentElement.style.setProperty("--text-color", "#F0F3BD");
            break;
        case "pastel":
            document.getElementById("title").innerText = "Pastel";
            document.documentElement.style.setProperty("--primary-color", "#64A6BD");
            document.documentElement.style.setProperty("--secondary-color", "#90A8C3");
            document.documentElement.style.setProperty("--tertiary-color", "#ADA7C9");
            document.documentElement.style.setProperty("--accent-color", "#D7B9D5");
            document.documentElement.style.setProperty("--text-color", "#F4CAE0");
            break;
        default:
            document.getElementById("title").innerText = "Broken";
            document.documentElement.style.setProperty("--primary-color", "#123456");
            document.documentElement.style.setProperty("--secondary-color", "#123456");
            document.documentElement.style.setProperty("--tertiary-color", "#123456");
            document.documentElement.style.setProperty("--accent-color", "#123456");
            document.documentElement.style.setProperty("--text-color", "#123456");
            break;
    }
}

// ^^^ Themes ^^^