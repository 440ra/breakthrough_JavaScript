function Human(name) {
	'use strict';
	this.name = name;
	
	//NG:インスタンスを生成するたび、greatメソッド分のメモリが確保され、無駄。
	//→メソッドが同じふるまいをするなら、prototype拡張で対応する。
	this.great = function () {
		console.log('My name is ' + this.name);
	};
}

var alice = new Human('Alice');
alice.great(); //My Name is Alice

var bob = new Human('Bob');
bob.great(); //My name is Bob