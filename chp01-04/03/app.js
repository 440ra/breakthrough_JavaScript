function Human(name) {
	//thisは呼ばれた関数が属していたオブジェクトになる。
	//下の呼び出しだと、thisはmikeオブジェクト
	'use strict';
	this.name = name;
}

function greet(arg1, arg2) {
	'use strict';
	//strict violationではある。
	console.log(arg1 + this.name + arg2);
}

var mike = new Human('Mike');
//greet()内のthisはapplyメソッドの第一引数->mikeオブジェクト
//第二引数以降がgreetメソッドの引数
greet.apply(mike, ['Hello ', '!!']);