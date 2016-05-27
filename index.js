//注意：在独立的ｊｓ代码文件中，不要再写“<script>”标签
	window.onload = init;
	var t1;
	function init(){
		window.open("guanggao.html", "ad",  "width=500, height=327, left=400, top=150");

		//让焦点图进行自动切换（变化）
		t1 = window.setInterval("huantu();", 1000);	//再创建（启动/定义）一个定时器去掉用“huantu”这个函数。

		showTab( 0 );	//显示“最新上架”的第一项
	}
	var n = 1;
	function huantu(){
		var obj = document.getElementById('dd_scroll');

		//换图：
		n++;
		if(n == 7 ){
			n = 1;
		}
		obj.src = "images/dd_scroll_" + n + ".jpg";

		//换按钮背景：
		var btn = document.getElementById("scroll_number_" + n );
		btn.style.backgroundColor = "orange";
		var m = n - 1;	//代表“前一张”图的序号
		if(m == 0){		//如果前一张的需要计算结果是0，则应该是6
			m = 6;
		}
		var btnQian = document.getElementById("scroll_number_" + m );	//当前按钮的前一个按钮
		btnQian.style.backgroundColor = "";
	}
	function ting(){
		//停止一个定时器的语法形式： window.clearInterval( 定时器的名字 )
		window.clearInterval( t1 );
	}
	function zou(){
		t1 = window.setInterval("huantu();", 1000);	//重新启动该定时器
	}
	
	function huan( k ){
		//k就是传过来的代表某个按钮对应的数字，当然其实也应该代表对应的图
		//换图
		var obj = document.getElementById('dd_scroll');
		obj.src = "images/dd_scroll_" + k + ".jpg";	//换到当前按钮对应的图

		//将“前一个”按钮的背景设置为“空”，即没有背景设置值
		var btnQian = document.getElementById("scroll_number_" + n );	//n作为“之前”的图的序号，则其对应的按钮序号也是这个
		btnQian.style.backgroundColor = "";

		n = k;		//并使用n来“记录”当前的图的顺序号——因为在“huantu()”这个函数中，就是靠n来表示切换的图的顺序号
					//等一会儿继续自动切换图的时候，就可以从当前这个n（k）开始继续换下去。

		//然后在去设定当前对应按钮的背景
		var btn = document.getElementById("scroll_number_" + n );	//当前图对应的按钮背景
		btn.style.backgroundColor = "orange";

		ting();		//调用该函数就会停止定时器——也就是停止切换图
	}

	function closeAd(){
		document.getElementById("floatAd").style.display = "none";
	}

function showTab( n ){
	var names = ["history","family","culture","novel"];
	//将4个处理成一般状态：
	var len = names.length;
	for(var i = 0; i < len; i++){
		document.getElementById("book_" + names[i]).className = "book_none";
		document.getElementById(names[i]).className = "book_type";
	}

	//将当前的处理成特例状态：
	document.getElementById("book_" + names[n]).className = "book_show";
	document.getElementById(names[n]).className = "book_type_out";
}