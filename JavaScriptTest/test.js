// JavaScript Document
a="hello javascript!";
alert(a);
var a=1;
do {
	alert("还没到9次！");
	a++;
}
while(a<2);



function myFunction()
	{
		x=document.getElementById("luhu");
		x.innerHTML="修改过后的div!";
		document.getElementById("p").innerHTML="哈哈，段落被我修改了";
		document.getElementById("div").innerHTML="哈哈，div也被我修改了";
		document.getElementById("h").innerHTML="哈哈，一号标题也被我修改了";
}
function p()
{
function Person(name,job)
	{
		this.name=name;
		this.job=job;
	}	
	a=new Person('luhu','boss');
	document.getElementById('wh').innerHTML='welcome '+a.name+',the '+a.job+'!';
	
}

function myFunction6()
	{
		var x=document.getElementById('hello').innerHTML;
		document.getElementById('hello1').innerHTML=x;
		var y=document.getElementById('hello');
		z=y.firstChild.nodeValue;
		document.getElementById('hello2').innerHTML=z;
		}

function myFunction7()
{
	var parent=document.getElementById('div1');
	var child=document.getElementById('p1');
	parent.removeChild(child);
	}
function myFunction8()
{
	document.getElementById('hello2').innerHTML=Date();
	}

function myFunction9()
{
	var x=document.getElementById('up');
	x.value=x.value.toUpperCase();
	}

function myFunction10()
{
	z=document.write(document.domain)
	document.getElementById('do').innerHTML=z;
	}


















