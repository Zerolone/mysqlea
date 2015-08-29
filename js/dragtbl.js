/**
 * 拖放功能
 * 
 * @version 2010-2-18 15:08:45
 * @author Zerolone
 */
window.addEvent('domready',function(){
	/**/
	var myDrag = $$('.tbl').makeDraggable({

		onStart:function(el){
			el.setOpacity(.5);
			el.setStyle('cursor','hand');
		},
			
		onComplete: function(el){
			el.setOpacity(1);
			el.setStyle('cursor','default');

			//只允许10这样的数据
			var int_left=parseInt(el.getStyle('left'));
			var int_top=parseInt(el.getStyle('top'));
			int_left=Math.floor(int_left / 10) * 10;
			int_top	=Math.floor(int_top  / 10) * 10;
			el.setStyle('left', int_left);
			el.setStyle('top',  int_top);
	
			//提交数据
			var strurl='index_update.php?' + el.alt + '&top=' + int_top + '&left=' + int_left;
//			alert(strurl);

			new DWRequest({
				url : strurl,
				onSuccess : function(responseText){
		//			alert(responseText);
					if(responseText=='true'){
//						pel.set('html',returnuser+'，欢迎回来。<a href="my.php">转到我的网址导航</a>');
						show_ajax_message('success');
					}else{
						show_ajax_message('failure');
					}
				},
				onFailure : function(){
//					pel.set('text', pelvalue);
					show_ajax_message('failure');
				}
//			 }).send("user=" + user + "&pass=" + pass+ "&reguser=" + reguser+ "&regpass=" + regpass+ "&mode=" + mode);
			 }).send();



			}
	});

/**/


//	$$('.tbl').setStyle('top','300px');


	/*
	 * message状态
	 */
	 var float_message= float_me.periodical(1000);

});


//对联广告
function float_me(){
	 $('message').setStyle('top', document.documentElement.scrollTop);
}


//继承Request类
var DWRequest = new Class({
	Extends: Request,
	options: {
		onRequest: function() {
			show_ajax_message('request');
		},
		onSuccess: function() {
			show_ajax_message('success');
		},
		onFailure: function() {
			show_ajax_message('failure');
		},
		onCancel: function() {
			show_ajax_message('cancel');
		}
	}
});


/**
 * 显示提示信息框
*/
function show_ajax_message(state){
	//设置显示位置
	$('message').setStyle('top',window.getScrollTop());

	//提交中
	if(state == 'request'){
		//显示
		$('message').set('text','提交中，请稍后。');
		$('message').setStyles({'background-color':'#fffea1','display':'block','opacity':'100'});
	}
	//成功
	else if(state == 'success'){
		$('message').set('text','提交成功!');

		var myMorph = new Fx.Morph('message',{'duration':1000});
		myMorph.start({'opacity': 0,'background-color': '#90ee90'});
	}
	//失败
	else if(state == 'failure'){
		$('message').set('text','提交失败!');

		var myMorph = new Fx.Morph('message',{'duration':1000});
		myMorph.start({'opacity': 0,'background-color': '#ff0000'});
	}
	//取消
	else if(state == 'cancel'){
		$('message').set('text','提交被取消!');

		var myMorph = new Fx.Morph('message',{'duration':1000});
		myMorph.start({'opacity': 0,'background-color': '#fffea1'});
	}
}
