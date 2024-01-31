const button = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");
const result = document.querySelector("#result");

button.addEventListener('click', () => {
    const text = inputText.value.trim();

    if(text.length === 0) {
        alert("Please input a value");
        return;
    }
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const isPalindrome = cleanText === cleanText.split("").reverse("").join("");
    const message = isPalindrome ? `<span>${inputText.value} is a palindrome.</span>` : `<span>${inputText.value} is not a palindrome.</span>`;
        result.innerHTML = message;
        result.classList.remove("error", "success");
            setTimeout(() => {
                result.classList.add(isPalindrome ? "success":"error");
            }, 10)
})