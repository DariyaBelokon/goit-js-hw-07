const inputPassword = document.getElementById("validation-input");


const handleinputPasswordBlur = (event) => {
    
    if (inputPassword.value.length === Number(inputPassword.dataset.length) )
    {
        preventDefault;
        inputPassword.classList.add("valid");
        if (inputPassword.classList.contains("invalid") === true)
        { inputPassword.classList.remove("invalid") }
    }
    else { inputPassword.classList.add("invalid") }
    };

inputPassword.addEventListener('blur', handleinputPasswordBlur);

