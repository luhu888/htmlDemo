// JavaScript Document
function changeFc()
{
	"use strict";
	var fColor="";
	for (var i=0;i<6;i++)
		{
			fColor +=""+ Math.round(Math.random()*9);
		}
        document.body.style.color="#" + fColor;
}
document.onclick=changeFc;





