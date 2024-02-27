// 変数numにランダムに整数を代入する
let num = Math.floor(Math.random() * 20);

// 変数(num)が3と5の倍数の場合→numを3または5で割ったらあまりが０になる→3と5の倍数
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// 変数(num)が3の倍数の場合→numを3で割ったらあまりが０になる
if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 変数(num)が5の倍数の場合→numを5で割ったらあまりが０になる
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外の場合
else {
  console.log(num);
}
