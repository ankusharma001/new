let btn = document.querySelector("#mode");
// let bte = document.createElement("button");
// bte.innerText = "bjhbvb";
// div.append("bte");

let val = "light";
btn.addEventListener("click", () => {
    if (val === "light") {
        document.querySelector("body").style.backgroundColor = "black";
        val = "dark";
    }
    else {
        document.querySelector("body").style.backgroundColor = "aqua";
        val = "light";


    }
})