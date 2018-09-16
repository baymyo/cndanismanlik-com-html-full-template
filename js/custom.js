/*
MUSTAFA YASAR OZKAN - 05442844054
ATLAS ENERJI -  YAZILIM SORUMLUSU
*/
function bgCover() {
	var id = 1;
	setInterval(function () {
		if (id >= 5) {
			id = 0;
		}
		$(".bgCover").animate({
			opacity: 0.1,
			}, 1000, function () {
				$(".bgCover").css({ 'background-image': 'url("images/slider/bg-' + id + '.jpg")' }).animate({ opacity: 1 }, 1000);
		});
		id=(id + 1);
	}, 4000);
}
function titleSilde() {
	var myArray = new Array();
	myArray.push("");
	myArray.push("En ucuz enerji, tasarruf edilen enerjidir.");
	myArray.push("Gereksiz harcanan enerji, kaybedilen emektir.");
	var id = 0;
	setInterval(function () {
		if (id >= 2) {
			id = 0;
		}
		$("h1.titles").animate({
			opacity: 0,
			}, 1000, function () {
				$("h1.titles").text(myArray[id]).animate({ opacity: 1 }, 1000);
		});
		id=(id + 1);
	}, 4000);
}