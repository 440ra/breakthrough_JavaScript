function Human(name) {
	//thisは呼ばれた関数が属していたオブジェクトになる。
	//下の呼び出しだと、thisはmikeオブジェクト
	'use strict';
	this.name = name;
}

Human.prototype.greet = function () {
	//thisはmikeオブジェクト
	'use strict';
	console.log('Hello ' + this.name);
};


var mike = new Human('Mike');
//greet()内のthisはmikeオブジェクト
mike.greet(); //Hello Mike


function greet2() {
	'use strict';
	//thisはwindowオブジェクト->nameの未定義エラー/strict violationにもなる。
	console.log('Hello ' + this.name);
}

greet2();