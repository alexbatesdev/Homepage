let themeDict = {
    "blueberry" : {
        "--primary-color" : "#061A40",
        "--secondary-color" : "#003559",
        "--tertiary-color" : "#006DAA",
        "--accent-color" : "#0353A4",
        "--text-color" : "#B9D6F2"
    },
    "mint" : {
        "--primary-color" : "#002A32",
        "--secondary-color" : "#08605f",
        "--tertiary-color" : "#2EC4B6",
        "--accent-color" : "#CBF3F0",
        "--text-color" : "#FFFFFF"
    },
    "raisin" : {
        "--primary-color" : "#201A23",
        "--secondary-color" : "#2E2532",
        "--tertiary-color" : "#43344A",
        "--accent-color" : "#6A477B",
        "--text-color" : "#f8e5ee"
    },
    "island" : {
        "--primary-color" : "#05668D",
        "--secondary-color" : "#028090",
        "--tertiary-color" : "#00A896",
        "--accent-color" : "#02C39A",
        "--text-color" : "#F0F3BD"
    },
    "pastel" : {
        "--primary-color" : "#64A6BD",
        "--secondary-color" : "#90A8C3",
        "--tertiary-color" : "#ADA7C9",
        "--accent-color" : "#D7B9D5",
        "--text-color" : "#F4CAE0"
    }
}
// ^^^ Theme List ^^^

startup();

// vvv Dropdown vvv
let dropdown = document.getElementById("dropdownToggle");

dropdown.addEventListener("click", evt => {
    document.getElementById("dropContent").classList.toggle("show");
    document.getElementById("dropArrow").classList.toggle("up");
})

window.onclick = (evt) => {
    if (!evt.target.matches(".drop-btn") && !evt.target.matches("#title")&& !evt.target.matches(".drop-arrow")) {
        var dropdownC = document.getElementById("dropContent");
        var arrow = document.getElementById("dropArrow");
        if (dropdownC.classList.contains("show")) {
            dropdownC.classList.remove("show");
        }
        if (arrow.classList.contains("up")) {
            arrow.classList.remove("up");
        }
    }
}

// ^^^ Dropdown ^^^

function startup() {
    let connection = document.getElementById("dropContent");
    for (key in themeDict) {
        let themeName = key;
        let item = document.createElement("div");
        item.id = themeName;
        item.innerText = themeName.charAt(0).toUpperCase() + themeName.slice(1);
        item.classList.add("drop-item");

        item.addEventListener("click", (evt) => {
            localStorage.setItem("theme", item.id);
            dommyMommy();
        })

        // if (i == (Object.keys(themeDict).length - 1)) {
        //     item.classList.add("b-bot-rad-20");
        // }
        connection.appendChild(item);
    }
    connection.lastChild.classList.add("b-bot-rad-20");
    dommyMommy();
}


// localstorage + actual theme execution
function dommyMommy() {
    let themeName = localStorage.getItem("theme");

    document.documentElement.style.setProperty("--primary-color", themeDict[themeName]["--primary-color"]);
    document.documentElement.style.setProperty("--secondary-color", themeDict[themeName]["--secondary-color"]);
    document.documentElement.style.setProperty("--tertiary-color", themeDict[themeName]["--tertiary-color"]);
    document.documentElement.style.setProperty("--accent-color", themeDict[themeName]["--accent-color"]);
    document.documentElement.style.setProperty("--text-color", themeDict[themeName]["--text-color"]);
}

// ^^^ Themes ^^^