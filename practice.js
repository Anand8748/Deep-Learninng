console.log("hello");
window.console.log("hello");
const themeBtn = document.getElementById("themeBtn");
const body = document.body;


let isDark = false;

themeBtn.addEventListener("click", () => {
    if (!isDark) {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        themeBtn.innerText = "Light Theme";
    } else {
        body.style.backgroundColor = "#f4f6f8";
        body.style.color = "#333";
        themeBtn.innerText = "Dark Theme";
    }
    isDark = !isDark;
});



