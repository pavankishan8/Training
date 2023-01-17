function getresults() {
	const currency=document.getElementById("amount").Value;
	let selective=document.getElementById("selective").value;
	let select1=document.getElementById("select1").value;
     document.getElementById("pCon").innerHTML=select1
	switch(selective){
		case "INR":if(select1=="USD") {
			return currency*0.012;
		}
	}

}



function clearVal() {
	window.location.reload();
	document.getElementsByID("finalValue").innerHTML = "";
};
