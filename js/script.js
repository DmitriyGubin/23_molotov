$('.clients_slider').slick({
	dots: false,
	infinite: false,
	slidesToScroll: 1,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 750,
			settings: {
				variableWidth: false,
				slidesToShow: 1
			}
		}
		],
	prevArrow: '<div class="prev-photo"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1108 2L1.97754 16.1421L16.1108 30.2843M3.26239 16.1421L29.8159 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0264 2L29.1597 16.1421L15.0264 30.2843M27.8748 16.1421L1.32135 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>'
});

/**********Меню***********/

$shade = $('header .body_shade');

$('header .more_items').on('mouseover', function () {
	$(this).find('.sub_menu').removeClass('hide');
	$(this).addClass('active');
	$shade.removeClass('hide');
});

$('header .more_items').on('mouseout', function () {
	$(this).find('.sub_menu').addClass('hide');
	$(this).removeClass('active');
	$shade.addClass('hide');
});

/*******скролл**********/
var $w = $(window);
var $header = $('header');

window.addEventListener('scroll', function(){
	
	if($w.scrollTop() == 0)
	{
		$header.removeClass('active');
	}
	else
	{
		$header.addClass("active");
	}
});

/*******скролл**********/

/**********Меню***********/

function Switch($vars_ref)
{
	$vars_ref.on('click', function() {
		$vars_ref.removeClass('active');
		$(this).toggleClass('active');
	});
}

Switch($('.calc_proj .var_item'));
Switch($('.serv_main button'));


$object_checkbox = $('.univ_form .step_1 .checkbox-text');
$obj_inp = $('#form_object_id');

$object_checkbox.on('click', function() {

	var str = '';
	$object_checkbox.each(function() {
		$galka = $(this).find('.galka');
		if(!$galka.hasClass('hide'))
		{
			let obj = $(this).find('.my-checkbox-descr').html();
			str = str + obj + ';'
		}
	});

	$obj_inp.val(str);
});

$area_inp = $('#form_area_id');
$('.calc_proj .var_item').on('click', function() {
	$area_inp.val($(this).html());
});

$('.tech_slider').slick({
	dots: true,
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	prevArrow: '<div class="prev-photo"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1108 2L1.97754 16.1421L16.1108 30.2843M3.26239 16.1421L29.8159 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0264 2L29.1597 16.1421L15.0264 30.2843M27.8748 16.1421L1.32135 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>'
});

$('.reviews_slider').slick({
	dots: false,
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	prevArrow: '<div class="prev-photo"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1108 2L1.97754 16.1421L16.1108 30.2843M3.26239 16.1421L29.8159 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0264 2L29.1597 16.1421L15.0264 30.2843M27.8748 16.1421L1.32135 16.1421" stroke="#363B4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>'
});

var x_point = 55.048513;
var y_point = 82.911446;
var adress_point = '<div class="ballon_adress">г. Новосибирск, ул. Ленина, 46 </div> <div class="ballon_time">график работы с 9:00 до 18:00</div>';

ymaps.ready(init);

function init () 
{
			var myMap = new ymaps.Map("map_box", {
				center: [x_point,y_point],
				zoom: 15,
				controls: [],//без элементов управления
			}, {
				searchControlProvider: 'yandex#search'
			}),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
    	"{{ properties.address }}" +
    	"</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                	var el = this.getElement(),
                	result = null;
                	if (el) {
                		var firstChild = el.firstChild;
                		result = new ymaps.shape.Rectangle(
                			new ymaps.geometry.pixel.Rectangle([
                				[0, 0],
                				[firstChild.offsetWidth, firstChild.offsetHeight]
                				])
                			);
                	}
                	return result;
                }
            }
            );

//https://yandex.ru/dev/maps/jsbox/2.1/icon_customImage

    function Add_point(x, y, adress)
    {
        var myPlacemark = new ymaps.Placemark([x, y], 
        { 
            iconContent: '',
            balloonContent: '<div class="ballon-title">' + adress + '</div>'
        },
        {  
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map_point.svg',
            iconImageSize: [30, 40],
            iconImageOffset: [-15, -20],
            iconContentOffset: [0, 0]
        });
        myMap.geoObjects.add(myPlacemark);
    }

    Add_point(x_point, y_point, adress_point);
}


$('.univ_form .inp_box').each(function() {

	var input = $(this).find('.univ_inp');

	var label = $(this).find('label');

	input.on('focus', function(){
		label.addClass('active_label');
	});

	input.on('blur', function(){
		if(input.val().length == 0)
		{
			label.removeClass('active_label');
		}
	});
});

$(".univ_form .phone").mask("+7(999) 999-9999");

$('.univ_form .checkbox-text').on('click', function() {
	$(this).find('.galka').toggleClass('hide');
});


/*************Отправка***************/
$('.popup_butt').on('click', function(){
	$('#popup-order #popup_form').removeClass("hide");
	$('#popup-order .succes').addClass("hide");
});

$('#send_popup').on('click', () => Send_Form($('#popup_form'), event));
$('#order_calc').on('click', () => Send_Form($('#call_form'), event));
$('#send_quest_form').on('click', () => Send_Form($('#quest_form'), event));
$('#order_call_form').on('click', () => Send_Form($('#consult_form'), event));


/******файл**********/
$file_button = $('.form_box .file_box');
$file_input = $('#file_input');

$file_button.on('click', function() {
	$file_input.click();
});

$file_input.on('change', function() { 
	if($(this).val() != '')
	{
		$file_button.html('Файл выбран');
	}
});
/******файл**********/

function Validate($form_ref)
{
	var err=0;
	var pattern = /\S+@\S+\.\S+/;//для валидации почты регулярка

	$form_ref.find('.required').each(function() {

		$this = $(this);

		var bool;
		if($this.hasClass('phone'))
		{
			bool = ($this.val().length != 16);
		}
		else if($this.hasClass('mail'))
		{
			bool = !pattern.test($this.val());
		}
		else
		{
			bool = ($this.val() == '');
		}

        if (bool)
        {
            err++;
            $this.addClass("error");
            if($this.attr('id') == 'form_object_id')
            {
            	$('#select_object_box').addClass("error");
            }

            if($this.attr('id') == 'form_area_id')
            {
            	$('#select_area_box').addClass("error");
            }
        } 
        else 
        {
            $this.removeClass("error");
            $('.calc_proj .step_subt').removeClass("error");
        }
	});
	//console.log(err);
    return err;
}

function Send_Form($form_ref, event)
{
	event.preventDefault();
	var err = Validate($form_ref);

	if(err == 0)
	{
		$my_checkbox_descr = $form_ref.find('.my-checkbox-descr');
		if($form_ref.find('.galka').hasClass('hide'))
		{
			$my_checkbox_descr.addClass("error");
		}
		else
		{
			$my_checkbox_descr.removeClass("error");

			$popup_form = $('#popup-order #popup_form');
			$popup_succes = $('#popup-order .succes');

			//успех
			if($form_ref.hasClass('popup'))
			{
				$popup_form.toggleClass("hide");
				$popup_succes.toggleClass("hide");
			}
			if($form_ref.hasClass('no_popup'))
			{
				$popup_form.addClass("hide");
				$popup_succes.removeClass("hide");
				$.fancybox.open($('#popup-order')[0]);
			}
			$form_ref[0].reset();
			//успех
		}
	}
}

/*************Отправка***************/




