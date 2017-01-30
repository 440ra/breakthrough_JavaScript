function AppModel(attrs) {
	'use strict';
	this.val = '';
	//オブザーバーコンストラクタ
	this.liteners = {
		valid: [],
		invalid: []
	};
}

AppModel.prototype.on = function (event, func) {
	'use strict';
	//eventにはvalidかinvalidが来る想定。
	this.listners[event].push(func);
};

AppModel.prototype.trigger = function (event) {
	'use strict';
	//jQuaryのeachメソッド
	//this();はpusuしたfunc。
	$.each(this.listners[event], function () {
		this();
	});
};