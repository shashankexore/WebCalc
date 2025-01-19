function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function calculateFactorial() {
    const display = document.getElementById('display');
    const num = parseInt(display.value);
    if (num < 0 || isNaN(num)) {
      display.value = 'Error';
      return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    display.value = fact;
  }
  