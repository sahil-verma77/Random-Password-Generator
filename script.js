const newPass = document.querySelector("#new-pass");
const copyBtn = document.querySelector("#copy-btn");
const copyMsg = document.querySelector("#copy-message");
const slider = document.querySelector("#range");
const rangeVal = document.querySelector("#range-value");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const btn = document.querySelector("#gen-pass");
const errorMsg = document.querySelector("#error-message");

slider.addEventListener("input", (e) => {
    rangeVal.textContent = slider.value;
})

btn.addEventListener("click", (e) => {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const numberStr = "0123456789";
    const symbolStr = "!@#$%^&*()_+-=[]{}|;':\",./<>?`~\\";

    let finalStr = '';
    if (uppercase.checked) {
        finalStr += capitalLetters;
    }
    if (lowercase.checked) {
        finalStr += smallLetters;
    }
    if (number.checked) {
        finalStr += numberStr;
    }
    if (symbol.checked) {
        finalStr += symbolStr;
    }
    if (finalStr === '') {
        // alert("Please select atleast one option.");
        errorMsg.classList.remove("hidden");
        newPass.textContent = '';
        return;
    } else {
        errorMsg.classList.add("hidden");
    }
    let latestPass = '';

    for (let i = 0; i < slider.value; i++) {
        let randomNum = Math.floor(Math.random() * finalStr.length);
        // latestPass += finalStr[randomNum];
        latestPass += finalStr.charAt(randomNum);
    }

    newPass.textContent = latestPass;
})

copyBtn.addEventListener("click", async (e) => {
    if (newPass.textContent === '') {
        copyMsg.textContent = "Generate a Password First!";
        copyMsg.className = "mt-2 text-xs font-medium text-red-500";
        return;
    }
    try {
        await window.navigator.clipboard.writeText(newPass.textContent);
        copyMsg.textContent = "Password copied to clipboard!";
        copyMsg.className = "mt-2 text-xs font-medium text-emerald-600";
    } catch (error) {
        copyMsg.textContent = "Failed to copy password. Try again.";
        copyMsg.className = "mt-2 text-xs font-medium text-red-500";
    }
    setTimeout(() => {
        copyMsg.classList.add("hidden");
    }, 2000);
})