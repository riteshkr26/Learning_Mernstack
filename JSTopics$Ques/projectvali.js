const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Invalid Email");
    } else if (!passRegex.test(password)) {
        alert("Password must be at least 8 characters");
    } else {
        alert("Validation Successful");
    }
});