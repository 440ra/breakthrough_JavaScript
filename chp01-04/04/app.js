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
//mikeをthisに束縛した新しい関数
var greetMorning = greet.bind(mike);
//greetMorining呼び出し時は常にthisがmikeになる
greetMorning('Good morning ', '!!');