
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
