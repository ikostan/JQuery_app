/*JS functions*/

$("document").ready(function(){
		
		
	//Background on/offscreenBuffering
	var bgOn = true;
	var img1, img2, img3, img4, img5; //Img source
	var playImg = setInterval(showImg, 3500); //Used in order to hold setInterval function
		
	//Set random color for the background
	function updateBackground(){
		
		if(bgOn == true){
			
			var r1, r2, g1, g2, b1, b2;
		
			var colorArray = Array (r1, r2, g1, g2, b1, b2);
				
			for(var i = 0; i < colorArray.length; i++){
			
				colorArray[i] = Math.floor(Math.random() * 256);	
			}
					
			var color1 = "rgb(" + colorArray[0] + "," + colorArray[2] + "," + colorArray[4] + ")";
			var color2 = "rgb(" + colorArray[1] + "," + colorArray[3] + "," + colorArray[5] + ")";
		
			$('body').css({
   				background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"}).css({
    			background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"});
		}		
	}
	
	updateBackground();
	
	//Loop the function
	//setInterval(updateBackground,4500);	


	//Change BG color manualy		
	$('#onBg').click(function(){
		
		var value = document.getElementById('onBg');
		
		if(bgOn == true){
			
			bgOn = false;
			value.innerHTML = "OFF";
			$(this).addClass('offBg');	
		}
		else{
				
			bgOn = true;
			value.innerHTML = "ON";
			$(this).removeClass('offBg');
		}
		
	});

	
	//Change BG manually
	$('#changeBg').click(function(){
		
		var temp = bgOn;
		bgOn = true;
		updateBackground();
		bgOn = temp;
	});
		
		
	//Hide every single topic
	function hideEverything(){
				
		$('#aboutMe').hide();
		$('#3dPrint').hide();
		$('#rosseta').hide(); 
		$('#mobile').hide(); 
		$('#alg').hide();
		$('#spec').hide();
		$('.answer').hide();
	}
	
	
	hideEverything();
	$('#aboutMe').show(); //Show default content
	
	
	//Remove 'current' class from menu items
	function rmCurrent(){
		
		var idArray = Array('#about', '#3d', '#algorithm', '#java', '#android');
		
		for(var i = 0; i < idArray.length; i++){
			
			$(idArray[i]).removeClass('current');
		}
	}
	
	
	//Show name and set picture as a background on mousein
	$('img').hover(function(){
		
		 $('img').fadeTo(300, 0.3);
		 $('#name').fadeTo(300, 1);
	});
	
	
	//Hide name on mouse out
	$('img').mouseout(function(){
		
		 $('img').fadeTo(300, 1);
		 $('#name').fadeTo(300, 0);
	});
	
	
	//Show submenu - my interests
	$('#sub').click(function(){
		
		$('#sub_menu').slideToggle('slow');
	});
	
	
	//Show "About me" content
	$('#about').click(function(){
		
		var sectId = '#aboutMe';
		showContent(sectId);
	});
	
	
	//Show "3D printing" content
	$('#3d').click(function(){
		
		var sectId = '#3dPrint';		
		showContent(sectId);
	});
	
	
	//Show "algorithm" content
	$('#algorithm').click(function(){
		
		var sectId = '#alg';
		showContent(sectId);
	});
	
	
	//Show "java" content
	$('#java').click(function(){
		
		var sectId = '#rosseta';
		showContent(sectId);
	});
	
	
	//Show "Android" content
	$('#android').click(function(){
			
		var sectId = '#mobile';
		showContent(sectId);
	});
		
		
	//Show tech spec
	$('#tSpec').click(function(){
			
		var sectId = '#spec';
		showContent(sectId);
	});
	
		
	//Update GUI: menu item, background, content 
	function updateGui(){
		
		updateBackground();
		rmCurrent();
		$(this).addClass('current');		
		hideEverything();
	}
	
	
	//Display selected content
	function showContent(sectId){
		
		updateGui();
		if($(sectId).css('display') == 'none'){
				
			$(sectId).fadeIn(1500);
		}
	}
	
	
	//Show tech spec content
	$('.faq').click(function(){
				
		var header = $(this).children('h4');
		var icon = $(header).children();		
		//alert(icon.text());
		
		//Change icon
		if(icon.text()=='+ '){
				
			icon.text('- ');
		}
		else{
			
			icon.text('+ ');	
		}		
		
		//Show-hide sub content					
  		if($(this).children().is(":visible")) {
  						
    		$(this).children('div').slideToggle('slow');	 
    	}
    	else{
    		
    		$(this).children('div').slideToggle('slow');
    	}
	});
	
	
	//Preload images
	function loadImg(){
				
		if (document.images) {
			
			//img1 = new Image();
			//img2 = new Image();
			//img3 = new Image();
			//img4 = new Image();
			//img5 = new Image();

			img1 = "img/3d/3d_1.JPG";
			img2 = "img/3d/3d_2.JPG";
			img3 = "img/3d/3d_3.JPG";
			img4 = "img/3d/3d_4.JPG";
			img5 = "img/3d/3d_5.JPG";
		}
	}
	
	var indx = 0;
	
	//Display images
	function showImg(){
		
		loadImg();
		
		var imgArr = Array(img1, img2, img3, img4, img5);
		var imgPrefix = "<img src='";
		var imgPostfix = "' alt='3D printing' />"
		
		if(indx < imgArr.length - 1){
			
			indx++;
		}
		else{
			
			indx =0;			
		}		
		
		var img = imgPrefix + imgArr[indx] + imgPostfix;
		$('#3dImg').html(img);
	}
	
	
	//END        
});
