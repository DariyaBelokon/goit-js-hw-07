const inputName = document.getElementById('name-input');
const userName = document.getElementById('name-output');
const input = () => {
    event.preventDefault;
    if (inputName.value.trim() === "") {
        userName.textContent = "незнакомец";    
    }
    else {
      userName.textContent = inputName.value;   
 }
     console.log(userName);
    
}
inputName.addEventListener('blur', input);