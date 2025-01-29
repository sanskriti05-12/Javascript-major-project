const LoginAllData = (event) => {
    event.preventDefault(); // Prevent default form submission

    const signemail = document.querySelector("#email");
    const signpass = document.querySelector("#password");

    const signemailValue = signemail.value.trim();
    const signpassValue = signpass.value.trim();

    const mail = localStorage.getItem("Email");
    const pass = localStorage.getItem("Password");

    if (mail !== signemailValue) {
        signemail.style.border = "2px solid red";
        alert("Email does not match!");
        return false;
    } else {
        signemail.style.border = "2px solid green";
    }

    if (pass !== signpassValue) {
        signpass.style.border = "2px solid red";
        alert("Password does not match!");
        return false;
    } else {
        signpass.style.border = "2px solid green";
    }

    alert("Login Successful!");
    location.href = "/Pages/Home.html";

    return true;
};

document.querySelector("form").addEventListener("submit", LoginAllData);
        