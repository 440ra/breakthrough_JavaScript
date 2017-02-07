function AppModel(attrs) {
	'use strict';
	this.val = '';
	//設定値
	this.attrs = {
		//引数を設定。空なら初期値右という意味。
		required: attrs.required || false,
		maxlength: attrs.maxlength || 8,
		minlength: attrs.minlength || 4
	};

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

AppModel.prototype.set = function (val) {
	//引数と同じなら何もしない
	if (this.val === val) return;
	//引数と違うなら代入して、validate実行
	this.val = val;
	this.validate();
};

AppModel.prototype.validate = function () {
	var val;
	//エラーになったらここに入る->triggerで通知される
	this.errors = [];
	
	//this.attrsのkeyの数だけ繰り返し
	for (var key in this.attrs) {
		//keyに対する値取得
		val = this.attrs[key];
		//空じゃない、かつ　this[key](val)がfalseならエラー。
		//thisはAppModel, this[key]でメソッド取り出し、valの引数で実行。
		//this['maxlength']なら、maxlength関数実行。
		if (val && !this[key](val)) this.errors.push(key);
	}
	//this.errorsが空ならvalid、あればinvalid通知
	this.trigger(!this.errors.length ? 'valid' : 'invalid');
};

AppModel.prototype.required = function () {
	//空ならfalse（エラーにする）
	return this.val !== "";
}

AppModel.prototype.maxlength = function (num) {
	//設定値より大きかったらfalse(エラーにする)
	return num >= this.val.length;
}

AppModel.prototype.minlength = function (num) {
	//設定値より小さかったらfalse(エラーにする)
	return num <= this.val.length;
}

function AppView(el) {
    this.initialize(el);
    this.handleEvents();
}

AppView.prototype.initialize = function(el) {
    //$(el)はJQuaryで自分自身の関数のこと
    //$elに代入しています。
    this.$el = $(el);

    //$elのdata属性を入れています
    //HTMLにはdata-minlength要素やdata-maxlength要素があります。
    var obj = this.$el.data();

    //required属性があればobjに設定する。
    if (this.$el.prop("required")) {
	obj["required"] = "";
    }

    //AppModelにobjを設定してインスタンス化
    this.model = new AppModel(obj);
};
