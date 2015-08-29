function RemoveAll()
{
	top.Frame_Right.win.removeall();
}

/*hideMenu() start
 *入口参数：无。
 *返 回 值：无。
 *作    用：隐藏左框架。
 */
function HideLeftBar()
  {top.Frame_Main.cols="0,*";
   top.frames[1].LeftBar.style.display="";
   show=false;
  }
//hideMenu() end


/*showOrHide() start
 *入口参数：无。
 *返 回 值：无。
 *作    用：当框架被改变大小时检测左框架的大小，
 *          如果宽度等于20（即框架分割线在最左边），
 *          则隐藏左框架（调用hideMenu()函数）；
 *          如果宽度大于20（即框架分割线被向右拖动），
 *          则完全显示左框架（调用showMenu()函数）；
 */
var show=false;//保证只调用一次showMenu()
function showOrHide()
  {if(document.body.clientWidth<=20)
     HideLeftBar();
   else
     if (!show)
       {top.frames[1].showleftbar();
        show=true;
       }
  }
//showOrHide() end