function showdate() {
	clientdate = new Date();
	clientyear = clientdate.getYear();
	if(clientyear < 300) clientyear = 1900 + clientyear ;
	clientmonth = clientdate.getMonth()+1;
	clientday = clientdate.getDate();
	weekday = clientdate.getDay();
	if (weekday==0) weekday="��";
	if (weekday==1) weekday="һ";
	if (weekday==2) weekday="��";
	if (weekday==3) weekday="��";
	if (weekday==4) weekday="��";
	if (weekday==5) weekday="��";
	if (weekday==6) weekday="��";
	document.write("<span class='date'>"+clientyear+"��"+clientmonth+"��"+clientday+"��"+"������"+weekday+"</span>");
}

function showsel() {
	var obj = document.getElementById('selloc');
	obj.style.display = obj.style.display == 'none' ? 'block':'none';
}