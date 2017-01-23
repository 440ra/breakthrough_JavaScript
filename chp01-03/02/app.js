//監視者登録用のオブジェクト
function Observer() {
	'use strict';
	//複数のイベント通知ができるようにオブジェクトにする
	this.listeners = {};
}

//通知したい監視者（関数）を追加する
//event:通知者(イベント)
//func:監視者(関数)
Observer.prototype.on = function (event, func) {
	'use strict';
	//引数の通知者（イベント）がすでにあるか確認
	if (!this.listeners[event]) {
		//ないなら作成
		this.listeners[event] = [];
	}
	//通知者(イベント)の配列に監視者(関数)を追加
	this.listeners[event].push(func);
};

//監視者一覧(オブザーバー)から削除する
//event:通知者(イベント)
//func:監視者(関数)
Observer.prototype.off = function (event, func) {
	'use strict';
	var ref = this.listeners[event],
		len = ref.length,
		i = 0,
		listener = '';
	for (i; i < len; i = i + 1) {
		listener = ref[i];
		if (listener === func) {
			ref.splice(i, 1);
		}
	}
};

//通知者によるイベント通知（監視者(関数)の呼び出し）
//event: 通知したいイベント名
Observer.prototype.trigger = function (event) {
	'use strict';
	var ref = this.listeners[event],
		len = ref.length,
		i = 0,
		listener = '';
	for (i; i < len; i = i + 1) {
		//監視者の取得
		listener = ref[i];
		//監視者の関数を実行する
		if (typeof listener === "function") {
			listener();
		}
	}
};



var observer = new Observer();

//監視者(関数)の定義
var great = function () {
	'use strict';
	console.log('Good morning');
};
//通知者による監視者のオブザーバーへの登録
observer.on('morning', great);
//通知者による通知(監視者(関数)の実行）
observer.trigger('morning'); //Good morning

//監視者(関数)の定義
var sayEvening = function () {
	'use strict';
	console.log('Good evening');
};
//通知者による監視者のオブザーバーへの登録
observer.on('evening', sayEvening);
//通知者による通知(監視者(関数)の実行）
observer.trigger('evening'); //Good evening