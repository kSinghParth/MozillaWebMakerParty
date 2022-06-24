		function openNav() {
				    document.getElementById("mySidenav").style.width =
				     "100%";
				    document.getElementById("main").style.marginLeft =
				    "250px";

				    document.getElementById("circle-centre").style.zIndex="-1";

				}

				function closeNav() {
				    document.getElementById("mySidenav").style.width = "0";
				    document.getElementById("main").style.marginLeft= "0";
						document.getElementById("circle-centre").style.zIndex="0";
				}
function openNav2(){
	document.getElementById("blurry").style.zIndex="4";
}
function closeNav2(){
	document.getElementById("blurry").style.zIndex="-1";
}
