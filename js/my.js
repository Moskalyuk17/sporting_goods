const showPopupButton = document.getElementById("showPopupButton");
const popup = document.getElementById("popup");

let popupVisible = false;

showPopupButton.addEventListener("click", function() {
    if (popupVisible) {
        popup.style.display = "none";
        popupVisible = false;
    } else {
        popup.style.display = "block";

        const buttonRect = showPopupButton.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();

        const popupLeft = buttonRect.left + (buttonRect.width - popupRect.width) / 2;
        const popupTop = buttonRect.bottom + 10; // Добавляем сдвиг вниз на 10 пикселей

        popup.style.left = popupLeft + "px";
        popup.style.top = popupTop + "px";

        popupVisible = true;
    }
});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function() {
    window.location.href = "/html/login.html";
});

button2.addEventListener("click", function() {
    window.location.href = "/html/signin.html";
});
