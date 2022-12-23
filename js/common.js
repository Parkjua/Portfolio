$(document).ready(function () {
  // header js
  $(".circle_menu").on("click", function () {
    $(".hambuger").toggleClass("is-active");
    $("body").toggleClass("open-menu");
    $(".nav").toggleClass("is-active");
  });
  // scroll smooth js
  document
    .getElementById("mouse_scroll")
    .addEventListener("click", function () {
      scrollTo(document.getElementById("about")[0], "down");
    }); //img 태그의 클래스 명으로 변경 할 때
  $(".modal_btn").click(function () {
    $(".modal").addClass("active");
  });
  $(".modal_close").click(function () {
    $(".modal").removeClass("active");
  });

  $(".tab-list li").click(function () {
    const index = $(this).index();
    $(".tab-list li").removeClass("active");
    $(this).addClass("active");
    $(".cont-list li").removeClass("active");
    $(".cont-list li").eq(index).addClass("active");
    $(".cont-list2 li").removeClass("active");
    $(".cont-list2 li").eq(index).addClass("active");
  });
});

$(document).ready(function () {
  $(".k_contain0").hover(
    function () {
      $(this).addClass("active");
      $(".toggle0").addClass("active");
      $(".k_title0").addClass("active");
    },
    function () {
      $(this).removeClass("active");
      $(".toggle0").removeClass("active");
      $(".k_title0").removeClass("active");
    }
  );
  $(".k_contain0_1").hover(
    function () {
      $(this).addClass("active");
      $(".toggle0_1").addClass("active");
      $(".k_title0_1").addClass("active");
    },
    function () {
      $(this).removeClass("active");
      $(".toggle0_1").removeClass("active");
      $(".k_title0_1").removeClass("active");
    }
  );
  $(".k_contain0_2").hover(
    function () {
      $(this).addClass("active");
      $(".toggle0_2").addClass("active");
      $(".k_title0_2").addClass("active");
    },
    function () {
      $(this).removeClass("active");
      $(".toggle0_2").removeClass("active");
      $(".k_title0_2").removeClass("active");
    }
  );
  $(".k_contain1").hover(
    function () {
      $(this).addClass("active");
      $(".toggle1").addClass("active");
      $(".k_text1").addClass("active");
      $(".k_title1").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle1").removeClass("active");
      $(".k_text1").removeClass("active");
      $(".k_title1").stop().fadeIn(100);
    }
  );
  $(".k_contain2").hover(
    function () {
      $(this).addClass("active");
      $(".toggle2").addClass("active");
      $(".k_text2").addClass("active");
      $(".k_title2").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle2").removeClass("active");
      $(".k_text2").removeClass("active");
      $(".k_title2").stop().fadeIn(100);
    }
  );
  $(".k_contain3").hover(
    function () {
      $(this).addClass("active");
      $(".toggle3").addClass("active");
      $(".k_text3").addClass("active");
      $(".k_title3").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle3").removeClass("active");
      $(".k_text3").removeClass("active");
      $(".k_title3").stop().fadeIn(100);
    }
  );
  $(".k_contain4").hover(
    function () {
      $(this).addClass("active");
      $(".toggle4").addClass("active");
      $(".k_text4").addClass("active");
      $(".k_title4").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle4").removeClass("active");
      $(".k_text4").removeClass("active");
      $(".k_title4").stop().fadeIn(100);
    }
  );
  $(".k_contain5").hover(
    function () {
      $(this).addClass("active");
      $(".toggle5").addClass("active");
      $(".k_text5").addClass("active");
      $(".k_title5").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle5").removeClass("active");
      $(".k_text5").removeClass("active");
      $(".k_title5").stop().fadeIn(100);
    }
  );
  $(".k_contain6").hover(
    function () {
      $(this).addClass("active");
      $(".toggle6").addClass("active");
      $(".k_text6").addClass("active");
      $(".k_title6").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle6").removeClass("active");
      $(".k_text6").removeClass("active");
      $(".k_title6").stop().fadeIn(100);
    }
  );
  $(".k_contain7").hover(
    function () {
      $(this).addClass("active");
      $(".toggle7").addClass("active");
      $(".k_text7").addClass("active");
      $(".k_title7").fadeOut(100);
    },
    function () {
      $(this).removeClass("active");
      $(".toggle7").removeClass("active");
      $(".k_text7").removeClass("active");
      $(".k_title7").stop().fadeIn(100);
    }
  );
});

// ---------timeline
(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline_item"),
      activeClass: "timeline_item_active",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline_1").timeline();

// ------------------ swiper
var swiper = new Swiper(".blog_slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".slider_pagination",
    clickable: true,
  },
});

// 복사붙여넣기
$(function () {
  $(".copy").click(function () {
    var copyText = document.getElementById("copy_id"); //클립보드에 복사할 텍스트 가져옴
    var textArea = document.createElement("textarea"); //textarea 생성

    textArea.value = copyText.textContent; //textarea에 텍스트 입력
    document.body.appendChild(textArea); //body에 textarea 추가

    textArea.select(); //선택
    document.execCommand("Copy"); //복사
    textArea.remove(); //생성한 textarea 삭제

    alert("복사되었습니다.");
  });
});
