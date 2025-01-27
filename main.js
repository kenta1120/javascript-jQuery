//1つ目の数字、2つ目の数字、演算子の管理
let first = '';
let second = '';
let op = '';

const screen = document.getElementById('display-screen');

// button押した時にnumber-styleクラスを追加し、表示を変更
$(document).ready(function() {
  $("button").click(function() {
    $("#display-screen").addClass("number-style");
  });
});

// 数字ボタンを押したときの処理
function  numbers(number) {
  /* 少数点の制御 */
  if (number === '.') {
    if (first === '') {
      return;
    } else if (op !== '' && second === '') {
      return;
    } else if (op === '' && first.includes('.')) {
      return;
    } else if (op !== '' && second.includes('.')) {
      return;
    }
  }

  /* 0の制御　*/
  if (number === 0 && first === '') {
    return;
  } else if (number === '00' && first === '') {
    return;
  } else if (number === 0 && second === '' && op !== '') {
    return;
  } else if (number === '00' && second === '' && op !== '') {
    return;
  }

  // 演算子があるとき、ないときの数字の追加
  if (op === '') {
    first += number;
    screen.textContent = first;
  } else {
    second += number;
    screen.textContent = first + op + second;
  }
}

// 演算子ボタンを押したときの処理
function calculate(operator) {
  if (first !== '' && second === '' && op === '') {
    op = operator;
    screen.textContent = first + op;
  } else if (first !== '' && second !== '' && op !== '') {
    first = result(parseFloat(first), parseFloat(second), op).toString();
    second = '';
    op = operator;
    screen.textContent = first + op;
  }
}

// 「=」ボタンを押した時の処理
function equal() {
  if (first !== '' || second !== '' || op !== '') {
    first = result(parseFloat(first), parseFloat(second), op).toString();
    screen.textContent = first;
    second = '';
    op = '';
  }
}

//計算処理
function result(num1, num2, operator) {
  let answer;
  switch(operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "infinity";
      } else {
        answer = num1 / num2;
      }
      break;
  }
  answer = parseFloat(answer.toFixed(2));
  return answer;
}

// AC処理
function clearscreen() {
  first = '';
  second = '';
  op = '';
  screen.textContent = '';
}

