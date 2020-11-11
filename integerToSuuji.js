function integerToSuuji(inte) {
	var strNum = String(inte);
	var namae = ["", "万", "億", "兆", "京", "垓"];
	var keta = Math.floor((strNum.length-1) / 4);
	var num = "";
	for (var i=0; i<=(strNum.length-1) % 4; i++) {
		num += strNum.substring(i, i+1);
	}
	console.log (strNum.length);
	return num + namae[keta];
}
