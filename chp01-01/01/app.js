//コンストラクタ関数の定義
function Human(name) {
	'use strict';
	this.name = name;
}

//prototypeの拡張。
//Humanにgreat[メソッド]を追加する
Human.prototype.great = function () {
	'use strict';
	console.log("Hello " + this.name);
};

//mikeオブジェクトのことを「インスタンス」という。
var mike = new Human("Mike");

//mikeオブジェクト自身はgreatがないので、
//prototype「__proto__」を参照してgreat実行。
//これをプロトタイプチェーンという。
//実行結果：Hello Mike
mike.great();