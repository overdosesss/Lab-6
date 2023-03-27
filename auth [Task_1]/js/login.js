const errors = document.querySelectorAll(".text-field-error");
const data = document.querySelectorAll(".text-field-input");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = data[0].value;

    if (!localStorage.getItem(username)) {
        errors[0].style.display = "block";
    } else {
        errors[0].style.display = "none";
    }

    const dbPassword = localStorage.getItem(username);
    const inpPassword = data[1].value;

    if (dbPassword !== inpPassword) {
        errors[1].style.display = "block";
    } else {
        errors[0].style.display = "none";
        alert("You have successfully logged in")
    }
})