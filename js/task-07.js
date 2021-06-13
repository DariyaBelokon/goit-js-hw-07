const inputChanges = document.getElementById('font-size-control');
const span = document.getElementById("text");
const handleChangeFontSizeInput = (e) => { span.style.fontSize = e.currentTarget.value + "5px"; };
inputChanges.addEventListener("input", handleChangeFontSizeInput);