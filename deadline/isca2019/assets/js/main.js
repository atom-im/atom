'use strict';

(function ($) {

	/**
   * [isMobile description]
   * @type {Object}
   */
	window.isMobile = {
		Android: function Android() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function BlackBerry() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function iOS() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function Opera() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function Windows() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function any() {
			return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
		}
	};
	window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
	window.windowHeight = window.innerHeight;
	window.windowWidth = window.innerWidth;

	if ($('.quietflow').length) {
		var optData = eval('(' + $('.quietflow').attr('data-options') + ')'),
			    optDefault = {
			theme: "bouncingBalls",
			specificColors: ["rgba(255, 214, 108, .5)", "rgba(192, 55, 23, .5)", "rgba(255, 153, 53, .5)", "rgba(141, 16, 12, .5)", "rgba(53, 71, 45, .5)"],
			backgroundCol: "#333"
		},
			    options = $.extend(optDefault, optData);
		$("body").quietflow(options);
	}
	if ($('.ribbons-bg').length) {
		new Ribbons({
			colorSaturation: "60%",
			colorBrightness: "50%",
			colorAlpha: 0.5,
			colorCycleSpeed: 5,
			verticalPosition: "random",
			horizontalSpeed: 200,
			ribbonCount: 3,
			strokeSize: 0,
			parallaxAmount: -0.2,
			animateSections: true
		});
	}

	/**
   * Countdown
   */
	$('.countdown__module').each(function () {
		var self = $(this),
			    _date = self.attr('data-date'),
			    _strf = self.html();
		self.countdown(_date, function (event) {
			self.html(event.strftime(_strf));
		}).removeClass("hide");
	});
	
})(jQuery);