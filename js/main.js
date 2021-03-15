/* sliders */
$(document).ready(function () {
  var swiper_acc_items = new Swiper ('.swiper-acc-items', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // var swiper = new Swiper('.swiper-tabs', {
  //   slidesPerView: 'auto',
  //   spaceBetween: 5,
  //   freeMode: true,
  // });
});


/* current year */
$(document).ready( function() {
  var now = new Date();
  var cur_year = now.getFullYear();
  $("#year").html(cur_year);
});


/* scroll top */
jQuery(document).ready(function () {
  var btn = $('#scroll_top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});


/* tooltips */
$(function () {
  $('.services_info').mouseenter(function(){
    $('.services_info').removeClass('si_full');
    $(this).addClass('si_full');
  });
})

/* добавление в избранное */
$(function () {
  $('.add_to_fav').click(function(){
    $(this).toggleClass('clicked');
  });
})


/* image upload with preview */
$(document).ready( function() {
  $(".file-upload input[type=file]").change(function(){
    var maxFileSize = 1 * 1024 * 1024;
    var imgUpload = $(this).parents(".img_Upload_box").find(".img_Upload");

    var file = this.files[0];
    if ( !file.type.match(/image\/(jpeg|jpg|png|gif|svg)/) ) {
      alert( 'Фотография должна быть в формате jpg, jpeg или png' );
    }
    else if ( file.size > maxFileSize ) {
      alert( 'Размер фотографии не должен превышать 1 Мб' );
    }
    else {
      preview(file);
      /* Создание превью */
      function preview(file) {
        var reader = new FileReader(), img;
        reader.addEventListener("load", function(event) {
          imgUpload.attr('src', event.target.result);
        });
        reader.readAsDataURL(file);
      };

      /* вывод названия файла */
      var filename = $(this).val().replace(/.*\\/, "");
      $(this).parents(".img_Upload_box").find(".img_name").text(filename);
    }
  });

  $(".del_Uploaded_img").click(function(){
    $(this).siblings(".file-upload").children("input").value = '';
    $(this).parents(".img_Upload_box").find(".img_name").text("");
    $(this).parents(".img_Upload_box").find(".img_Upload").attr('src', "");
  });
});

function toggleNav () {
  $(this).next('nav').toggle();
}

$('.headtop').on('mouseout', function(){
  $(".header-menu").removeClass("show_Menu");
});
$(window).scroll(function() {
$(".header-menu").removeClass("show_Menu");
});

$(document).ready(function () {
  $('.hint').mouseenter(function(){
    $(this).next('.hint-img').css('display', 'block');
  });
  $('.hint').mouseleave(function(){
    $(this).next('.hint-img').css('display', 'none');
  });
});

$(document).ready(function () {
  bsCustomFileInput.init()
})


function changeFieldset (val, formId) {
  console.log('val =' + val);
  console.log('formId =' + formId);
  document.querySelectorAll('#'+formId+' fieldset').forEach(function(item, i, arr) {
    if(item.id != val){
      item.classList.add('blocked');
      item.setAttribute("disabled", "disabled");
    } else {
      item.classList.remove('blocked');
      item.removeAttribute("disabled");
    }
  });
}