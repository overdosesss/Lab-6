const bfButton = document.getElementById("bf");
const dictButton = document.getElementById("dict");
const fileInput = document.getElementById("finput");
const errors = document.querySelectorAll(".text-field-error");

bfButton.addEventListener("click", (e) => {
	e.preventDefault();
	const password = document.getElementById("password").value;

	errors[0].style.display = "none";
	errors[1].style.display = "none";

	if (password.length === 0) { errors[0].style.display = "block"; return }
	if (password.length > 4) { errors[1].style.display = "block"; }

	bruteForce(result => { if (result == password) { alert(`Success! Password "${password}" was obtained by brute force`); return } }, password.length);
})

const bruteForce = (callback, maxLength = -1) => {
    const characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789";
  
    const getBruteforceString = (idx) => {
		let charBasedString = "";
		let mod;

		while (idx > 0) {
		mod = idx % characters.length;
		charBasedString = characters[mod] + charBasedString;
		idx = (idx - mod) / characters.length;
		}
		return charBasedString;
    }

	let i = 1;
    while (i > 0) {
		let result = callback(getBruteforceString(i));

		if (result) { break; }
		if (maxLength >= 1 && getBruteforceString(i).length > maxLength) { break; }

		i++;
    }
}

fileInput.addEventListener("change", (e) => {
	e.preventDefault();
	alert("You have successfully selected the file")
})

dictButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const password = document.getElementById("password").value;
	const pattern = new RegExp(`\\b${password}\\b`, 'gm');

	try {
		errors[2].style.display = "none";

		fileInput.files[0].text().then(result => {
			alert(`Your password "${password}" ${result.match(pattern) ? "is" : "is not"} in the dictionary`)
		})
	} catch (error) {
		console.log(error);
		errors[2].style.display = "block";
	}
})