var link = document.querySelector(".writeus-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name=username]");
var useremail = popup.querySelector("[name=useremail]");
var usermessage = popup.querySelector("[name=usermessage]");
var form = popup.querySelector("form");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback--show");

    if (storage) {
        useremail.value = storage;
        username.focus();
    } else {
        username.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback--show");
    popup.classList.remove("modal-feedback--error");
});

form.addEventListener("submit", function(evt) {
    if (!username.value || !useremail.value || !usermessage.value) {
        evt.preventDefault();
        popup.classList.remove("modal-feedback--error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-feedback--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("useremail", useremail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-feedback--show")) {
            popup.classList.remove("modal-feedback--show");
            popup.classList.remove("modal-feedback--error");
        }
    }
});
