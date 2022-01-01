var $ = jQuery.noConflict();

$(document).ready(function () {
	var swiper = new Swiper(".swiper-container--desktop", {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".dots--top",
			clickable: true,
		},
		navigation: {
			nextEl: ".next--top",
			prevEl: ".prev--top",
		}
	});

	var swiper1 = new Swiper(".swiper-container--mobile", {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		direction: 'vertical',
		loop: true,
    allowTouchMove: false,
    // touchRatio: 0,
    simulateTouch: false,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".dots--top2",
			clickable: true,
		},
		navigation: {
			nextEl: ".next--top2",
			prevEl: ".prev--top2",
		}
	});

	var swiper2 = new Swiper(".swiper--desktop", {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".dots--bottom",
			clickable: true,
		},
		navigation: {
			nextEl: ".next--3",
			prevEl: ".prev--3",
		}
	});

	var swiper3 = new Swiper(".swiper-bottom--adaptive", {
		slidesPerView: 1,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".dots--bottom2",
			clickable: true,
		},
		navigation: {
			nextEl: ".next--33",
			prevEl: ".prev--33",
		}
	});

	var swiper4 = new Swiper(".swiper-popup", {
		slidesPerView: 1,
		spaceBetween: 50,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".next--7",
			prevEl: ".prev--7",
		}
	});

	// var swiper5 = new Swiper(".swiper-bottom--popup2", {
	// 	slidesPerView: 1,
	// 	spaceBetween: 20,
	// 	slidesPerGroup: 1,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	pagination: {
	// 		el: ".dots--bottom2",
	// 		clickable: true,
	// 	},
	// 	navigation: {
	// 		nextEl: ".next--33",
	// 		prevEl: ".prev--33",
	// 	}
	// });

	// var swiper6 = new Swiper(".swiper-bottom--popup3", {
	// 	slidesPerView: 1,
	// 	spaceBetween: 20,
	// 	slidesPerGroup: 1,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	pagination: {
	// 		el: ".dots--bottom2",
	// 		clickable: true,
	// 	},
	// 	navigation: {
	// 		nextEl: ".next--33",
	// 		prevEl: ".prev--33",
	// 	}
	// });


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

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

$(document).ready(function () {
  $("#link2").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

document.querySelector('.burger').addEventListener('click', menuAdd);

function menuAdd() {
	document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
	document.querySelector('.mobile-menu').classList.remove('mobile-menu--active-remove');
}

document.querySelector('.mobile-menu__close').addEventListener('click', menuRemove);

function menuRemove() {
	document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active-remove');
	document.querySelector('.mobile-menu').classList.remove('mobile-menu--active');
}

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.more--adaptive1').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.more--adaptive2').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.more--adaptive3').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.open-modal--desktop1').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.open-modal--desktop2').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.open-modal--desktop3').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

// document.querySelector('.popup__remove').addEventListener('click', popupRemove);

// function popupRemove() {
// 	document.querySelector('.overlay--popup').classList.add('overlay-del');
// }

// document.querySelector('.open-modal--desktop4').addEventListener('click', popupAdd);

// function popupAdd() {
// 	document.querySelector('.overlay--popup').classList.remove('overlay-del');
// }

document.querySelector('.popup__remove21').addEventListener('click', popupDel);

function popupDel() {
  document.querySelector('.overlay--popup1').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.btn34').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupDel() {
  document.querySelector('.overlay--popup1').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.btn35').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupDel() {
  document.querySelector('.overlay--popup1').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.btn36').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupDel() {
  document.querySelector('.overlay--popup1').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.btn37').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupDel() {
  document.querySelector('.overlay--popup1').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.btn30').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn31').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn32').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn33').addEventListener('click', popupDeladd);

function popupDeladd() {
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

// ocument.querySelector('.btn34').addEventListener('click', popupDeladd);

// function popupDeladd() {
//   document.querySelector('.overlay--popup1').classList.remove('overlay-del');
//   document.querySelector('.popup22').classList.remove('overlay-del');
// }

document.querySelector('.popup__remove22').addEventListener('click', popupremoVe);

function popupremoVe() {
  document.querySelector('.overlay--popup2').classList.add('overlay-del');
  document.querySelector('.popup22').classList.add('overlay-del');
}

document.querySelector('.popup-remove').addEventListener('click', formRemove);

function formRemove() {
	document.querySelector('.organizations-class').classList.add('overlay-del');
}

document.querySelector('.btn1 ').addEventListener('click', formAdd);

function formAdd() {
	document.querySelector('.organizations-class').classList.remove('overlay-del');
}
// авыпаывпаывп
document.querySelector('.popup-remove6').addEventListener('click', formREmove);

function formREmove() {
  document.querySelector('.proekt-class').classList.add('overlay-del');
}

document.querySelector('.btn90 ').addEventListener('click', formAdd33);

function formAdd33() {
  document.querySelector('.proekt-class').classList.remove('overlay-del');
}

document.querySelector('.btn91 ').addEventListener('click', formAdd22);

function formAdd22() {
  document.querySelector('.proekt-class').classList.remove('overlay-del');
}






document.querySelector('.popup-remove').addEventListener('click', formRemove);

function formRemove() {
  document.querySelector('.organizations-class').classList.add('overlay-del');
}

document.querySelector('.btn10 ').addEventListener('click', formAdd);

function formAdd() {
  document.querySelector('.organizations-class').classList.remove('overlay-del');
}



document.querySelector('.popup-remove2').addEventListener('click', formRemove2);

function formRemove2() {
	document.querySelector('.student-class').classList.add('overlay-del');
}

document.querySelector('.btn11 ').addEventListener('click', formAdd2);

function formAdd2() {
	document.querySelector('.student-class').classList.remove('overlay-del');
}

function formRemove2() {
  document.querySelector('.student-class').classList.add('overlay-del');
}

document.querySelector('.btn2 ').addEventListener('click', formAdd2);

function formAdd2() {
  document.querySelector('.student-class').classList.remove('overlay-del');
}

document.querySelector('.popup-remove3').addEventListener('click', formRemove3);

function formRemove3() {
	document.querySelector('.consultation-class').classList.add('overlay-del');
}

document.querySelector('.btn3 ').addEventListener('click', formAdd3);

function formAdd3() {
	document.querySelector('.consultation-class').classList.remove('overlay-del');
}

document.querySelector('.popup-remove4').addEventListener('click', formRemove4);

function formRemove4() {
	document.querySelector('.consultation-class2').classList.add('overlay-del');
}

document.querySelector('.btn4 ').addEventListener('click', formAdd4);

function formAdd4() {
	document.querySelector('.consultation-class').classList.remove('overlay-del');
}

document.querySelector('.consultation_link15 ').addEventListener('click', formAdd4);

function formAdd4() {
  document.querySelector('.consultation-class').classList.remove('overlay-del');
}

document.querySelector('.consultation_link16 ').addEventListener('click', formAdd4);

function formAdd4() {
  document.querySelector('.consultation-class').classList.remove('overlay-del');
}

document.querySelector('.consultation_link17 ').addEventListener('click', formAdd4);

function formAdd4() {
  document.querySelector('.consultation-class').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn21').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn22').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn23').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn24').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn25').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn26').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn27').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupremOve);

function popupremOve() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn28').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}


document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn29').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn30').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn31').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn32').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

function popupRemove() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.btn33').addEventListener('click', popupAdd);
document.querySelector('.overlay--popup1').classList.remove('overlay-del');
document.querySelector('.popup22').classList.remove('overlay-del');

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.btn34').addEventListener('click', popupAdd2);

function popupAdd2() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn35').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn36').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.btn37').addEventListener('click', popupAdd);

function popupAdd() {
  document.querySelector('.overlay--popup').classList.remove('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}

document.querySelector('.popup__remove11').addEventListener('click', popupremOve);

function popupremOve() {
  document.querySelector('.overlay--popup').classList.add('overlay-del');
  document.querySelector('.overlay--popup1').classList.remove('overlay-del');
  document.querySelector('.popup22').classList.remove('overlay-del');
}







// fsdgfdsgdfsgsdgsdfg
document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.more--adaptive1').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.more--adaptive2').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.more--adaptive3').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.open-modal--desktop1').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.open-modal--desktop2').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.open-modal--desktop3').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}

document.querySelector('.popup__remove').addEventListener('click', popupRemove);

function popupRemove() {
	document.querySelector('.overlay--popup').classList.add('overlay-del');
}

document.querySelector('.open-modal--desktop4').addEventListener('click', popupAdd);

function popupAdd() {
	document.querySelector('.overlay--popup').classList.remove('overlay-del');
}


// document.querySelector('.dots--2').addEventListener('click', dots2);

// function dots2() {
// 	document.querySelector('.dots--2').classList.add('dots--1-active');
// 	document.querySelector('.dots--3').classList.remove('dots--1-active');
// 	document.querySelector('.dots--4').classList.remove('dots--1-active');
// 	document.querySelector('.dots--5').classList.remove('dots--1-active');
// }

// document.querySelector('.dots--3').addEventListener('click', dots3);

// function dots3() {
// 	document.querySelector('.dots--2').classList.remove('dots--1-active');
// 	document  .querySelector('.dots--3').classList.add('dots--1-active');
// 	document.querySelector('.dots--4').classList.remove('dots--1-active');
// 	document.querySelector('.dots--5').classList.remove('dots--1-active');
// }

// document.querySelector('.dots--4').addEventListener('click', dots4);

// function dots4() {
// 	document.querySelector('.dots--2').classList.remove('dots--1-active');
// 	document.querySelector('.dots--3').classList.remove('dots--1-active');
// 	document.querySelector('.dots--4').classList.add('dots--1-active');
// 	document.querySelector('.dots--5').classList.remove('dots--1-active');
// }

// document.querySelector('.dots--5').addEventListener('click', dots5);

// function dots5() {
// 	document.querySelector('.dots--2').classList.remove('dots--1-active');
// 	document.querySelector('.dots--3').classList.remove('dots--1-active');
// 	document.querySelector('.dots--4').classList.remove('dots--1-active');
// 	document.querySelector('.dots--5').classList.add('dots--1-active');
// }
