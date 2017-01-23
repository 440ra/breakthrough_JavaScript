//監視者登録用のオブジェクト
function Observer() {
	'use strict';
	this.listeners = [];
}

//通知したい監視者（関数）を追加する
Observer.prototype.on = function (func) {
	'use strict';
	this.listeners.push(func);
};

//監視者一覧(オブザーバー)から削除する
Observer.prototype.off = function (func) {
	'use strict';
	var len = this.listeners.length,
		i = 0,
		listener = '';
	for (i; i < len; i = i + 1) {
		listener = this.listeners[i];
		if (listener === func) {
			this.listeners.splice(i, 1);
		}
	}
};

//通知者によるイベント通知（監視者(関数)の呼び出し）
Observer.prototype.trigger = function (event) {
	'use strict';
	var len = this.listeners.length,
		i = 0,
		listener = '';
	for (i; i < len; i = i + 1) {
		//監視者の取得
		listener = this.listeners[i];
		//監視者の関数を実行する
		listener();		
	}
};



var observer = new Observer();

//監視者(関数)の定義
var great = function () {
	'use strict';
	console.log('Good morning');
};

//通知者による監視者のオブザーバーへの登録
observer.on(great);

//通知者による通知(監視者(関数)の実行）
observer.trigger(); //Good morning