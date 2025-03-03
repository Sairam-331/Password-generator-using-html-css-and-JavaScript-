
document.addEventListener("DOMContentLoaded", function () {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const generatePassword = () => {
        const length = parseInt(document.getElementById("length").value);
        const includeLowercase = document.getElementById("lowercase").checked;
        const includeUppercase = document.getElementById("uppercase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeSymbols = document.getElementById("symbols").checked;

        if (length < 8){
            alert("please select password length above 7 for strong password ...")
        }
        if(length >= 32){
            alert("please select below or equal to 32 characters ")
        }

        let validChars = "";

        if (includeLowercase) {
            validChars += lowercaseChars;
        }
        if (includeUppercase) {
            validChars += uppercaseChars;
        }
        if (includeNumbers) {
            validChars += numberChars;
        }
        if (includeSymbols) {
            validChars += symbolChars;
        }

        if (validChars === "") {
            alert("Please select at least one character type.");
            return;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            password += validChars[randomIndex];
        }

        document.getElementById("password").value = password;
    };

    document.getElementById("generate").addEventListener("click", generatePassword);

    document.getElementById("copy").addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard: " + passwordField.value);
    });
});

