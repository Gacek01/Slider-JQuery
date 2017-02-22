'use strict';
var slideCount = $(".single-slide").length;
var slideIndex = 0;
var slider = $("#slider").width((slideCount * 100) + "vw");
$(".single-slide").each(function (i, el) {
	var singleSlideLeft = ((i * 100) + "vw");
	$(el).css({
		left: singleSlideLeft
	});
});
$("a").click(function (event) {
	event.preventDefault();
});

function fadeCaption() {
	$("p.slider-caption").eq(slideIndex).animate({
		opacity: 1
	}, 1000);
}

function slideright() {
	if (slideIndex > 0) {
		$("p.slider-caption").css({
			opacity: 0
		});
		slideIndex -= 1;
		var singleSlideLeft = ((-100 * slideIndex) + "vw");
		$("#slide-show").animate({
			left: singleSlideLeft
		}, 1000, "linear", fadeCaption)
	}
}

function slideleft() {
	if (slideIndex < slideCount - 1) {
		$("p.slider-caption").css({
			opacity: 0
		});
		slideIndex += 1;
		var singleSlideLeft = ((-100 * slideIndex) + "vw");
		$("#slide-show").animate({
			left: singleSlideLeft
		}, 1000, "linear", fadeCaption);
	}
}
$("a.prev-slide").on("click", slideright);
$("a.next-slide").on("click", slideleft);