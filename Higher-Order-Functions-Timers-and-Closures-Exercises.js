// 1
function countDown(time){
    var timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
//   2
function randomGame(){
    let random;
    let count = 0;
    let timer = setInterval(function(){
        random = Math.random();
        if (random > 0.75) {
            console.log("Times it took to get > 0.75", count);
            clearInterval(timer)
        } else {
            count++;
        }    
    }, 1000);
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd (num) {
    return num % 2 === 1;
}

function isPrime(num) {
    let isPrime = true;
    
    if (num <= 1) {
        return false;
    };
    for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              return false
          };
    };
    return isPrime;
};
function numberFact(num, callback) {
    return callback(num)
};

function find(array, callback) {
    let result;
    for (let i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            result = array[i];
            break;
        }
    };
    return result;
};

function findIndex(array, callback) {
    let result;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    };
    return result;
};

function specialMultiply(param1, param2) {
    if (param1 > 0 && param2 > 0) {
        return param1 * param2
    } else {
        return {
            privatefn: function inner(param2) {
                return param1 * param2;
            }   
        }
    }
};