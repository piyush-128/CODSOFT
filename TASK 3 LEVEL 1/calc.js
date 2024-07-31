// Function to append to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to evaluate the expression
  function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  }