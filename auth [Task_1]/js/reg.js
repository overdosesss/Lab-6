const errors = document.querySelectorAll(".text-field-error");
const data = document.querySelectorAll(".text-field-input");
const button = document.querySelector(".button");

const checker = (password) => {
    for (i = 0; i < password.length; i += 2) {
        let isDigit = Boolean(parseInt(password[i]));
        let isLetter = password[i + 1].toLowerCase() === password[i + 1].toUpperCase();

        if (isDigit == isLetter) { return false }
    }

    return true
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    
    const firstPassw = data[1].value;
    
    if (firstPassw.length < 8) {
        errors[1].style.display = "block";
    } else {
        errors[1].style.display = "none";
    }

    if (!checker(firstPassw)) {
        errors[2].style.display = "block";
    } else {
        errors[2].style.display = "none";
    }

    const secondPassw = data[2].value;

    if (secondPassw !== firstPassw) {
        errors[3].style.display = "block";
    } else {
        errors[3].style.display = "none";
    }

    const username = data[0].value;

    if (localStorage.getItem(username)) {
        errors[0].style.display = "block";
    } else {
        errors[0].style.display = "none";
        localStorage.setItem(username, firstPassw);
        alert("You have successfully registered");
    }
})