function Human(name) {
	'use strict';
	this.name = name;
}

//インスタンス時にgreatはprototypeに確保される。
//→メモリが節約できる。
Human.prototype.great = function () {
	'use strict';
	console.log('My name is ' + this.name);
};


var alice = new Human('Alice');
alice.great(); //My Name is Alice

var bob = new Human('Bob');
bob.great(); //My name is Bob