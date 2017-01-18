function createCounter() {
	'use strict';
	//ローカルスコープ変数。
	//通常なら関数終了時に消えるはずだが、無名関数が参照しているので、値が維持される。
	var count = 0;
	
	//無名関数内でローカルスコープ変数を参照する関数をクロージャという。
	return function () {
		count = count + 1;
		console.log(count);
	}; //セミコロン要。JSLint通らないです。
}

var counter1 = createCounter();
counter1(); //0+1=1
counter1(); //1(1行上の結果が維持されています)+1=2
counter1(); //2(1行上の結果が維持されています)+1=3

//countは別のものを参照。だから1からスタートする。
var counter2 = createCounter();
counter2(); //0+1=1
counter2(); //1(1行上の結果が維持されています)+1=2

//変更できない。(ローカルスコープ変数のため）
count = 100;

//3(counter1の最後の結果が維持されています)+1=4
counter1();