var date1 = new Date(); // current date
var date2 = new Date("02/27/2024"); // mm/dd/yyyy format
var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds
var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second

//alert(timeDiffInSecond);
var str = timeDiffInSecond.toString();
for (var i = 0; i < str.length; ++i) {
	var chr = str.charAt(i);
	console.log(chr);
}
//$("#millions div").css("transform", "rotateX(-136deg)");
