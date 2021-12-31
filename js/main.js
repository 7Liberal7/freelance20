var $ = jQuery.noConflict();

$(document).ready(function () {
	var swiper = new Swiper(".slider_news_js", {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".pagination_1",
			clickable: true,
		},
		navigation: {
			nextEl: ".s_next",
			prevEl: ".s_prev",
		},
	});

	var swiper_2 = new Swiper(".slider_projects_js", {
		slidesPerView: 20,
		spaceBetween: 4,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".pagination_2",
			clickable: true,
		},
		navigation: {
			nextEl: ".s_next_2",
			prevEl: ".s_prev_2",
		},
	});

	var swiper_3 = new Swiper(".slider_mob_js", {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		direction: 'vertical',
		pagination: {
			el: ".pagination_2",
			clickable: true,
		},
		navigation: {
			nextEl: ".s_next_2",
			prevEl: ".s_prev_2",
		},
	});

	var swiper_4 = new Swiper(".swiper-bottom--adaptive", {
		// slidesPerView: 1,
		// spaceBetween: 20,
		// slidesPerGroup: 1,
		// loop: true,
		// loopFillGroupWithBlank: true,
		// direction: 'vertical',
		pagination: {
			el: ".pagination_2",
			clickable: true,
		},
		navigation: {
			nextEl: ".s_next_2",
			prevEl: ".s_prev_2",
		},
	});


	$(".open-modal").click(function (e) {
		e.preventDefault();
		var modalId = $(this).data("modal");
		var modal = $("#" + modalId);
		modal.css({
			'opacity': '1',
			'pointer-events': 'visible',
			'transition': '.3s',
		});
		$("body").addClass("body_overflow");

		var swiper = new Swiper(".mySwiper", {
			spaceBetween: 10,
			slidesPerView: 5,
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".mySwiper2", {
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});

		var swiper_3 = new Swiper(".mySwiper_3", {
			spaceBetween: 10,
			slidesPerView: 5,
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper_4 = new Swiper(".mySwiper_4", {
			spaceBetween: 10,
			navigation: {
				nextEl: ".next_2",
				prevEl: ".prev_2",
			},
			thumbs: {
				swiper: swiper_3,
			},
		});

		return false;
	});


	$(document).on("mouseup", ".overlay", function (e) {
		e.preventDefault();
		if (e.target.classList.contains("overlay")) {
			$(this).css({
				'opacity': '0',
				'pointer-events': 'none',
				'transition': '.3s',
			});
			$("body").removeClass("body_overflow");
		}
	});

	$(document).on("click", ".close_popup", function () {
		$("body").removeClass("body_overflow");
		$(this).closest(".overlay").css({
			'opacity': '0',
			'pointer-events': 'none',
			'transition': '.3s',
		});
		return false;
	});


	var margin = 0;
	$(".main_menu li a").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + margin + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
});

document.querySelector('.burger').addEventListener('click', menuAdd);

function menuAdd() {
	document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
}
