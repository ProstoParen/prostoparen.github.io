    var link = document.querySelector(".search-head");

    var popup = document.querySelector(".search-form");

    var form = popup.querySelector("form");
    var date_in = popup.querySelector("[name=date-in]");
    var date_out = popup.querySelector("[name=date-out]");
    var old = popup.querySelector("[name=old]");
    var yung = popup.querySelector("[name=yung]");

    popup.classList.add("modal-show");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("show-modal");
    popup.classList.remove("modal-error");
    date_in.focus();
});

form.addEventListener("submit", function (evt) {
    if (!date_in.value || !date_out.value || !old.value || !yung.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});   
