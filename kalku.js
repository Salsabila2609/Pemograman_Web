function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (error) {
        document.getElementById('display').value = 'Error';
        }
}

function backspace() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
