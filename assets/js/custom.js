/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function () {
	var imgSrc = $('#MainLogo').attr('src')
	$('#SubLogo').attr('src', imgSrc);
	$('#AltLogo').attr('src', imgSrc);

	

	
	$('#clickshow > span.readmore').click(function (event) {
		$('.topSummerDetails').slideDown("slow");
		$('span.readmore').hide();
		$('span.hidemore').show();
	});
	$('#clickshow > span.hidemore').click(function (event) {
		$('.topSummerDetails').slideUp();
		$('span.readmore').show();
		$('span.hidemore').hide();
	});
	// esko console par chala kar check karna hai k hover par picture k handles nazar ayen
	// abhi aa rahay hain laikin glich ho raha hain kabhi atay hain kabhi nahi 
	//jo sample website di hai us ka delay aur effects check karnay hain shayad wahan se clue mil jae
	//function AbShow(div) {

	//	alert('#'+$(div).attr('id') + '  Hello');

	//	$('.pack_img_box').hover(
	//		function () {
	//			$('.slick-prev').css('opacity', '1');
	//		},
	//		function () {
	//			$('.slick-prev').css('opacity', '0');
	//		});

	//}

	//$('.pack_img_box').hover(
	//	function () {
	//	$('.slick-prev').css('opacity', '1');
	//	},
	//	function () {
	//	$('.slick-prev').css('opacity', '0');
	//});

	"use strict";
	if (window.location.href.indexOf("cyprusparadise") != -1 || window.location.href.indexOf("localhost:2575") != -1 ) {
		$('#cpPlus').show();
		$('#BlankSpace').hide();
	}
	else
	{
		$('#BlankSpace').show();
		$('#cpPlus').hide();
	}
	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var searchActive = false;

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});


	initSearch();

	/* 

	2. Set Header

	*/

	function setHeader() {
		if (window.innerWidth < 992) {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		else {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		if (window.innerWidth > 991 && menuActive) {
			closeMenu();
		}
	}

	/* 

	5. Init Search

	*/

	function initSearch() {
		if ($('.search_tab').length) {
			$('.search_tab').on('click', function () {
				$('.search_tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab').index(this);

				var panels = $('.search_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}
	

	$(window).scroll(function () {


		if ($("header").hasClass("scrolled")) {
			$('.mob-side-menu').css("position", 'fixed');
			
		} else {

			$('.mob-side-menu').css("position", 'inherit');

		}

	});
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
});

function blinkme(elem) {
	$(elem).animate({ opacity: 0 }, 200, "linear", function () {
		$(this).animate({ opacity: 1 }, 200, "linear", function () {
			$(this).animate({ opacity: 0 }, 200, "linear", function () {
				$(this).animate({ opacity: 1 }, 200);
			});
		});
	});
}

function ScrollToDiv(elemref) {
	$('html, body').animate({
		scrollTop: $(elemref).offset().top
	}, 500);
}
function InitTransferDate() {
	initDatePickerRange();

	if ($('#returnCheckbox').is(':checked')) {

		$('#ReturnFields').fadeIn();
		$('#transferType').val("Return");
		var input = $("#departure-date-transfers");
		var altField = "#" + input.attr("id") + "-alt";
		$("#departure-date-transfers").datepicker("destroy");
		$("#return-date-transfers").datepicker("destroy");
		initDatePickerRange();
		var selectedDate = $("#departure-date-transfers").datepicker("getDate");
		var returnDate = $("#return-date-transfers").datepicker("getDate");
		var arrDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
		$("#return-date-transfers").datepicker("setDate", arrDate);
	}
	else {

		$('#transferType').val("OneWay");
		var input = $("#departure-date-transfers");
		var altField = "#" + input.attr("id") + "-alt";
		$("#departure-date-transfers").datepicker("destroy");
		$("#return-date-transfers").datepicker("destroy");
		$("#departure-date-transfers").datepicker({
			changeMonth: true,
			changeYear: true,
			showButtonPanel: false,
			dateFormat: 'D dd M yy',
			firstDay: 1,
			maxDate: '+2Y',
			minDate: '+1',
			altField: altField,
			altFormat: "yy-mm-dd",
			defaultDate: new Date()

		});
	}
	

}

$(document).ready(function () {

	$('#sidebarCollapse, #sidebarClose').on('click', function () {
		$('#sidebar').toggleClass('active');
		

		$('body').toggleClass('navbar-active');
		if ($('#sidebar').hasClass('active')) {
			$('body').addClass('modal-open');
		} else {
			$('body').removeClass('modal-open');
		}
	});
	$('.panel.panel-default .panel-collapse').removeClass('show');
	$('.mypanel').click(function () {
		
		$("i", this).toggleClass("glyphicon-plus glyphicon-minus");
	});
	$("ul.tabs-navigation li:first a").addClass("active");

	
});
$(".tabs-navigation .tab").on("click", function () {
	$(".tabs-navigation .tab").removeClass("active");
	$(this).addClass("active");
});


function Logout() {


	$.ajax({
		url: "/Umbraco/Surface/UserArea/ClientSingout",
		type: "POST",
		contentType: "application/json",
		success: function () {

		},
		error: function () {
			console.log("Error logging out User");
		}
	});

}

$('li.dropdown').hover(function () {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function () {
	var cookieSign = getCook('CpSignInPop');
	if ((cookieSign == null || cookieSign == "")) {
		$(function () {
			$('#loginBtn').popover('show');
		});
		var date = new Date();
		date.setDate(date.getDate() + 90);
		document.cookie =
			'CpSignInPop=yes; expires= ' + date + '; path=/;';
		setTimeout(function () {
			$('#loginBtn').popover('hide');
		}, 6000);

	} else {
		$('#SignInPop').removeClass().addClass('hide');
	}
});

function getCook(cookiename) {
	var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
	return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}
$(document).ready(function () {
	//responsive menu toggle
	$("#menutoggle").click(function () {
		$('.xs-menu').toggleClass('displaynone');

	});
	//drop down menu
	$(".drop-down").hover(function () {
		$('.mega-menu').addClass('display-on');
	});
	$(".drop-down").mouseleave(function () {
		$('.mega-menu').removeClass('display-on');
	});

});

$(document).ready(function () {
	//$( ".datepicker" ).datepicker();

	$('.onchangedisplay').on("change", function (e) {
		e.preventDefault();
		let val = $(this).val();
		let id = $(this).attr('data-id');
		$('[data-group="' + id + '"]').addClass('d-none');
		$('[data-child*="' + id + '[' + val + ']"]').removeClass('d-none');
	});

	$('.selectRoom').click(function (event) {
		$('.room-dropdown').addClass('active');
	});
	$('.formbtn').click(function (event) {
		$('.room-dropdown').removeClass('active');
	});

	$(function () {
		$('#loggedInUserMenu').popover('show');
	});
});

$(function () {
	$('.lazy').lazy();
});
