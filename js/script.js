$(document).ready(function(){
    $(".icon").click(function(){
        $("ul").toggleClass("main");

    });

    $('.icon').click(function(){
		$('.fa-bars').toggleClass(" fa-times");
		$(".fa-times").css("font-size","28px");

	});

	$('.fa-search').click(function(){
		$("input").toggleClass("input");
		

	});

	

   
});


