
var n=0,p=2500;
var m=document.getElementById("fc").getElementsByTagName("div").length;
function plays(value){
	try{
		with (fc){
			filters[0].Apply();
			for(i=0;i<m;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 
			filters[0].play(); 
		}
	}
	catch(e){
		var divlist = document.getElementById("fc").getElementsByTagName("div");
		for(i=0;i<m;i++){
			i==value?divlist[i].style.display="block":divlist[i].style.display="none";
		}
	}
}
function clearAuto(){clearInterval(autoStart)}
function setAuto(){autoStart=setInterval("auto(n)", p)}
function auto(){
	n++;
	if(n>m-1) n=0;
	plays(n);
} 
setAuto(); 