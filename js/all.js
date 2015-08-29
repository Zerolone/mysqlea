//编写日期		： 20040908
//编写人			： 
//修改人			： Zerolone
//功能				： 鼠标移入之后显示边框， 类似XP按钮效果
//参数				： obj 对象 state 状态 0为移入 1为移出
function hl_menu(obj,state)
{
	switch (state)
	{
		case 0:
			obj.className="menuover"
			break;
		case 1:
			obj.className="menu"
			break;
	}
} 

//编写日期		： 20050106
//编写人			： Zerolone
//功能				： 按钮点击事件, 跳转到指定Url
//参数				： 地址, 跳转方式
function GoToUrl(Url, Code)
{
	if(Code==0)
		{
			window.open(Url, "_self");
		}
	else
		{
			window.open(Url, "_blank");
		}
}


//编写日期		： 20040908
//编写人			： 
//修改人			： Zerolone
//功能				： 按钮点击事件, 扩展和收缩菜单
//参数				： 表格ID		
function extendnode(TableName)
{
	var TableName;
//	TheImg		= eval("img_" + TableName);
//	TableName	= eval(TableName);

	TableName	= document.getElementById(TableName);

	if(TableName)
	{
		if(TableName.style.display == "none")
		{
			TableName.style.display = "";
		}
		else
		{
			TableName.style.display = "none";
		}
	}
	else
	{
//		alert('此类不存在下级！');
	}
}


//编写日期		： 20040908
//编写人			： 
//修改人			： Zerolone
//功能				： 按钮点击事件, 显示到右边窗口的一个TabSheet
//参数				： 
function fnClick()
{
	var oEl = event.srcElement;
	window.top.Frame_Right.AddWin(oEl.href,oEl.innerText);
}

function ffClick(Url, Text)
{
	window.top.Frame_Right.AddWin(Url,Text);
}


//编写日期			： 20061026
//编写人			： 
//修改人			： Zerolone
//功能				： 选择所有选项
//参数				： 
function selectalldel(){
	for(var i=0;i<document.form1.elements.length;i++){
		var e = document.all.form1.elements[i];
		if(e.name == "del[]"){
			e.checked = true;
			}
		}
}

//编写日期		： 20061026
//编写人			： 
//修改人			： Zerolone
//功能				： 选择所有选项
//参数				： 
function selectallissue(){
	for(var i=0;i<document.form1.elements.length;i++){
		var e = document.all.form1.elements[i];
		if(e.name == "issue[]"){
			e.checked = true;
			}
		}
}

//编写日期		： 2008年9月25日11:00:07
//编写人			： 
//修改人			： Zerolone
//功能				： 选择所有选项
//参数				： 
function selectallhtml(){
	for(var i=0;i<document.form1.elements.length;i++){
		var e = document.all.form1.elements[i];
		if(e.name == "html[]"){
			e.checked = true;
			}
		}
}

//编写日期		： 2008年11月12日14:58:29
//编写人			： 
//修改人			： Zerolone
//功能				： 选择所有选项
//参数				： 
function selectall()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		var e = document.all.form1.elements[i];
		if(e.name == "selectid[]"){
			e.checked = true;
			}
	}
}

//编写日期		： 20061110
//编写人			： 
//修改人			： Zerolone
//功能				： 选择所有选项
//参数				： 
function subStrr(str,len)
{
	var strlength=0;
	var newstr = "";
	for (var i=0;i<str.length;i++)
	{
		if(str.charCodeAt(i)>=1000)
			strlength += 2;
		else
			strlength += 1;
		if(strlength > len)
		{
			newstr += "...";
			break;
		}
		else
		{
			newstr += str.substr(i,1);
		}
	}
	return newstr;
}