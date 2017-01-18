//グローバルスコープ変数a
var a = 10;

function add() {
	'use strict';
	//ローカルスコープ変数b
	//この変数は関数の外からはアクセスできない。
	var b = 5;
	console.log(a + b);
}

add(); //15
//ローカルスコープ変数bにアクセスできないため、
//変数bが未定義でエラー
console.log(a + b);