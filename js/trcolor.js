//////////////////////
//////设置Tr颜色//////
//////////////////////
var aBgColor = ["#CCCCCC","#FFFFFF","#0099FF","#0099FF"];
function addTableListener(o,iHead,iEnd)
{
  o.style.cursor = "normal";
  iHead = iHead > o.rows.length?0:iHead;
  iEnd = iEnd > o.rows.length?0:iEnd;
  
  for (var i=iHead;i<o.rows.length ;i++ )
  {
		initTrBgColor(o.rows[i]);
	}
    
  for (var i=iHead;i<o.rows.length-iEnd ;i++ )
  {
	//	initTrBgColor(o.rows[i]);

		o.rows[i].onmouseover = function()
		{
			setTrBgColor(this,true)
		}
		o.rows[i].onmouseout = function()
		{
			setTrBgColor(this,false)
		}
	}
}

function setTrBgColor(oTr,b)
{
  oTr.rowIndex % 2 != 0 ? oTr.style.backgroundColor = b ? aBgColor[3] : aBgColor[0] : oTr.style.backgroundColor = b ? aBgColor[2] : aBgColor[1];
}

function initTrBgColor(oTr)
{
	if (oTr.rowIndex % 2 != 0)
	{
		oTr.style.backgroundColor = aBgColor[0];
	}
	else
	{
		oTr.style.backgroundColor = aBgColor[1];
	}
}

window.onload = function()
{
  addTableListener(document.getElementById("DBList"),1,2);
}