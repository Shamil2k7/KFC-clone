const phoneInput = document.getElementById("phone");
const warning = document.getElementById("warning");
const warningIcon = document.getElementById("waring-icon");
 const inputWraper = document.getElementById("inputWraper");

function send() {
    const phone = phoneInput.value.trim();

    // reset styles
    warning.textContent = "";
    warningIcon.style.display = "none";

    // empty check
    if (phone === "") {
        warning.textContent = "Phone number is required";
        warningIcon.style.display = "block";
        inputWraper.style.border = " red";
        return;
    }

    // number only check
    if (!/^\d+$/.test(phone)) {
        warning.textContent = "Only numbers are allowed";
        warningIcon.style.display = "block";
        inputWraper.style.border = "red";
        return;
    }

    // length check
    if (phone.length !== 10) {
        warning.textContent = "Enter a valid 10-digit mobile number";
        warningIcon.style.display = "block";
        inputWraper.style.border = " red";
        return;
    }

    // success
    phoneInput.style.border = "2px solid green";
    alert("OTP Sent Successfully ✅");
    warningIcon.style.display = "none";
  inputWraper.style.border = "transparent";
}


