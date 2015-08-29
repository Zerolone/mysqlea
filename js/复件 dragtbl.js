/**
 * 拖放功能
 * 
 * @version 2010-2-18 15:08:45
 * @author Zerolone
 */
window.addEvent('domready',function(){
	var myDrag = $('aaa h1').makeDraggable({
			onStart:function()
			{
				this.element.setOpacity(.5);
			},

			onComplete: function(){
					this.element.setOpacity(1);
//					this.element.style.left = 0;
//					this.element.style.top = 0;

//					alert('done dragging');
			}
	});


	var myDrag = $('aaa').getElement('h1').makeDraggable({
			onStart:function()
			{
				this.element.setOpacity(.5);
			},

			onComplete: function(){
					this.element.setOpacity(1);
			}
	});


	var myDrag = $$('.myElement2 h1').makeDraggable({
			onStart:function()
			{
				this.element.setOpacity(.5);
			},

			onComplete: function(){
					this.element.setOpacity(1);
					//提交数据

//					alert('done dragging');
			}
	});

});

