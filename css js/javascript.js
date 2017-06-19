window.onload = function() {
	var oSpan1=document.getElementById('span1');
	var oSpan2=document.getElementById('span2');
	var oSpan3=document.getElementById('span3');
	
	setInterval(time, 1000);
	
	function fn(n) {
		if (n < 10) {
			return '0' + n;
		} else {
			return '' + n;
		}
	}
	
	function time() {
		var oDate = new Date();
		var endTime = new Date('2017/8/15,23:59:59');
		var newTime = (endTime.getTime() - oDate.getTime()) / 1000;
		var h = fn(parseInt(newTime / (60 * 60) % 24));
		 
		//分钟
		var mi = fn(parseInt(newTime/60%60));
		 
		//秒
		var s = fn(parseInt(newTime%60));
		
		oSpan1.innerHTML = h;
		oSpan2.innerHTML = mi;
		oSpan3.innerHTML = s;
		
	}
}
