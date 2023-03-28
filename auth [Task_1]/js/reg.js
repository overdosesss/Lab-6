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
    
    const username = data[0].value;
    const firstPassw = data[1].value;
    const secondPassw = data[2].value;

    if (!username) {
        errors[1].style.display = "block";
        return;
    } else {
        errors[1].style.display = "none";
    }
    
    if (firstPassw.length < 8) {
        errors[2].style.display = "block";
        return;
    } else {
        errors[2].style.display = "none";
    }

    if (!checker(firstPassw)) {
        errors[3].style.display = "block";
        return;
    } else {
        errors[3].style.display = "none";
    }

    if (secondPassw !== firstPassw) {
        errors[4].style.display = "block";
        return;
    } else {
        errors[4].style.display = "none";
    }

    if (localStorage.getItem(username)) {
        errors[0].style.display = "block";
        return;
    } else {
        errors[0].style.display = "none";
        localStorage.setItem(username, firstPassw);
        alert("You have successfully registered");
    }
})