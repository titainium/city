$(document).ready(function(){
  $(".sub-menu").hide();
	$("#sub-menu-admin").show();
	
	$("#menu-item-admin").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-admin").show();
	});
	
	$("#menu-item-functions").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-functions").show();
	});
	
	$("#menu-item-projects").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-projects").show();
	});
	
	$("#menu-item-building").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-building").show();
	});
	
	$("#menu-item-internalview").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-internalview").show();
	});
	
	$("#menu-item-builddetail").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-builddetail").show();
	});
	
	$("#menu-item-total").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-total").show();
	});
	
	$("#menu-item-material").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-material").show();
	});
	
	$("#menu-item-knowledge").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-knowledge").show();
	});
	
	$(".sub-menu").mouseover(function(){
	  $("#active-sub").removeAttr("class");
	});
	
	var $container = $('#product-details').masonry({
		//columnWidth: 5,
		gutter: 51,
		//isFitWidth: true,
  		itemSelector: '.items'
	});
	
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
	  $container.masonry();
	  $("#product-details").hide();
  	$("#product-details").show(1000);
	});
	
	$(".carousel").carousel();
	
	$(".item").colorbox({rel: 'item'});
});

