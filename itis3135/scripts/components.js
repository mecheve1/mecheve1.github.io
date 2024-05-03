$(document).ready(function () {
    $("#header").load("./components/header.html");
    $("#footer").load("./components/footer.html");
});

document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=referer" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/check/referer" + location.href);