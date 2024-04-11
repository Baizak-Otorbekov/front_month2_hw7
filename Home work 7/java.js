//ОСНОВНОЕ ЗАДАНИЕ

const timerElement = document.getElementById('timer')

const clock = (seconds) => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        finish();
      } else {
       timerElement.innerHTML+=`<u>Осталось:</u> <b>${seconds}</b> секунд<br>`;
        seconds--;
      }
    }, 1000); 
  }
  
  const finish = () => {
    timerElement.innerHTML+=`<h2>ОТЧЕТ ЗАВЕРШЕН!</h2>`;
  }
  
  clock(60);

  //ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
  
  function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

function first(a, b) {
    return a + b;
}

function second(a, b) {
    return a - b;
}

function third(a, b) {
    return a * b;
}

console.log(calculate(50, 50, first)); 
console.log(calculate(50, 35, second)); 
console.log(calculate(5, 5, third)); 




