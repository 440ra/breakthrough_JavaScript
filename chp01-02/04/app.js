var count1 = 0;
function counter1() {
	'use strict';
	count1 = count1 + 1;
	console.log(count1);
}

//もうひとつカウンターを作る。
//コピーは保守性に問題がある。(100個必要なら100個コピー？？）
var count2 = 0;
function counter2() {
	'use strict';
	count2 = count2 + 1;
	console.log(count2);
}

counter1(); //1
counter1(); //2
counter2(); //1
counter2(); //2

//グローバルスコープ変数のため書き換えられる恐れがある・・・
count1 = 100;
counter1(); //101
counter1(); //102