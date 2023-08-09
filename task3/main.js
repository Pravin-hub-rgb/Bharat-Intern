let form = document.querySelector('#form-submit');
form.addEventListener("submit", (event) => {
    event.preventDefault();
})

var acc = document.getElementsByClassName("ac");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


function rotatePlus(button) {
    const plusSign = button.querySelector('span');

    // Toggle between rotating the plus sign by 45 degrees and back to normal position
    if (plusSign) {
        const rotation = plusSign.style.transform;
        if (!rotation || rotation === 'rotate(0deg)') {
            plusSign.style.transform = 'rotate(45deg)';
        } else {
            plusSign.style.transform = '';
        }
    }
}