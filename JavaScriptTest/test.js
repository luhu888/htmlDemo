// JavaScript Document
a="hello javascript!";
alert(a);
var a=1;
do {
	alert("还没到9次！");
	a++;
}
while(a<10);



function myFunction()
	{
		x=document.getElementById("luhu");
		x.innerHTML="修改过后的div!";
		document.getElementById("p").innerHTML="哈哈，段落被我修改了";
		document.getElementById("div").innerHTML="哈哈，div也被我修改了";
		document.getElementById("h").innerHTML="哈哈，一号标题也被我修改了";
}
	function Person(name,age)
	{
		this.name=name;
		this.age=age;
		}
	var a=new Person('luhu',20);
	document.writeln('年龄是：'+a.age+'<br/>','姓名是：'+a.name+'<br/>');





























