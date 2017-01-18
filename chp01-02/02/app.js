//グローバルスコープ変数a,b
var a = 10;
var b = 15;

function add() {
	'use strict';
	//グローバルスコープ変数aを参照(10->5)
	a = 5;

	//ローカルスコープ変数bの定義
	//グローバルスコープ変数bとは別物
	var b = 5;

	//このbはローカルスコープ変数b
	console.log(a + b);
}

//5(グローバルa)+5(ローカルb)=10
add();

//5(グローバルスコープ変数a)
console.log(a);

//15(グローバルスコープ変数b)
console.log(b);