const validInput = document.querySelector("#validation-input[data-length]");

const onBlur = (event) => {
    if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    } else {
        validInput.classList.add("invalid");
        validInput.classList.remove("valid");
    };

    if (event.currentTarget.value.length === 0) {
        validInput.classList.remove("invalid");
    };
};

validInput.addEventListener("blur", onBlur);