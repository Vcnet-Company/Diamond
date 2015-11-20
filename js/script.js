function start(){	
	
};

function startF(){	
	setTimeout(function () {
		//nav1		
		$('#menu li.nav1').css({display:'block'});
		$('#menu li.nav1').find(".im1").css({marginBottom:-120}).stop(true).delay(200).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav1').find(".im2").css({marginBottom:65}).stop(true).delay(200).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav1').find(".over3").css({opacity:0}).stop(true).delay(200).animate({opacity:1},800,'easeOutExpo');			
	
		//nav3		
		$('#menu li.nav3').css({display:'block'});
		$('#menu li.nav3').find(".im1").css({marginBottom:-120}).stop(true).delay(300).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav3').find(".im2").css({marginBottom:65}).stop(true).delay(300).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav3').find(".over3").css({opacity:0}).stop(true).delay(300).animate({opacity:1},800,'easeOutExpo');			
	
		//nav4		
		$('#menu li.nav4').css({display:'block'});
		$('#menu li.nav4').find(".im1").css({marginBottom:-120}).stop(true).delay(400).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav4').find(".im2").css({marginBottom:65}).stop(true).delay(400).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav4').find(".over3").css({opacity:0}).stop(true).delay(400).animate({opacity:1},800,'easeOutExpo');			
	
		//nav6		
		$('#menu li.nav6').css({display:'block'});
		$('#menu li.nav6').find(".im1").css({marginBottom:-120}).stop(true).delay(500).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav6').find(".im2").css({marginBottom:65}).stop(true).delay(500).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav6').find(".over3").css({opacity:0}).stop(true).delay(500).animate({opacity:1},800,'easeOutExpo');			
	
		//nav5		
		$('#menu li.nav5').css({display:'block'});
		$('#menu li.nav5').find(".im1").css({marginBottom:-120}).stop(true).delay(600).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav5').find(".im2").css({marginBottom:65}).stop(true).delay(600).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav5').find(".over3").css({opacity:0}).stop(true).delay(600).animate({opacity:1},800,'easeOutExpo');			
	
		//nav2		
		$('#menu li.nav2').css({display:'block'});
		$('#menu li.nav2').find(".im1").css({marginBottom:-120}).stop(true).delay(700).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav2').find(".im2").css({marginBottom:65}).stop(true).delay(700).animate({marginBottom:0},800,'easeOutExpo');
		$('#menu li.nav2').find(".over3").css({opacity:0}).stop(true).delay(700).animate({opacity:1},800,'easeOutExpo');			
		
		

	}, 200);
};

function showSplash(){
	setTimeout(function () {		
		$('header').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('.bg1').stop().animate({marginTop:0},800,'easeInOutExpo');

		//nav1
		setTimeout(function () {
			$('#menu li.nav1').css({display:'block'});
			$('#menu li.nav1').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav1').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav1').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 400);
		//nav3
		setTimeout(function () {
			$('#menu li.nav3').css({display:'block'});
			$('#menu li.nav3').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav3').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav3').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 500);
		//nav4
		setTimeout(function () {
			$('#menu li.nav4').css({display:'block'});
			$('#menu li.nav4').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav4').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav4').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 600);
		//nav6
		setTimeout(function () {
			$('#menu li.nav6').css({display:'block'});
			$('#menu li.nav6').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav6').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav6').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 700);
		//nav5
		setTimeout(function () {
			$('#menu li.nav5').css({display:'block'});
			$('#menu li.nav5').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav5').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav5').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 800);
		//nav2
		setTimeout(function () {
			$('#menu li.nav2').css({display:'block'});
			$('#menu li.nav2').find(".im1").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav2').find(".im2").stop(true).delay(0).animate({marginBottom:0},800,'easeOutExpo');
			$('#menu li.nav2').find(".over3").stop(true).delay(0).animate({opacity:1},800,'easeOutExpo');			
		}, 900);



	}, 100);	
};
function hideSplash(){ 	
	$('header').stop().animate({marginTop:-300},800,'easeInOutExpo');
	$('.bg1').stop().animate({marginTop:-300},800,'easeInOutExpo');

	//nav1
	setTimeout(function () {
		$('#menu li.nav1').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav1').css({display:'none'}); });
		$('#menu li.nav1').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav1').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav1').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 100);
	//nav3
	setTimeout(function () {
		$('#menu li.nav3').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav3').css({display:'none'}); });
		$('#menu li.nav3').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav3').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav3').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 200);
	//nav4
	setTimeout(function () {
		$('#menu li.nav4').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav4').css({display:'none'}); });
		$('#menu li.nav4').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav4').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav4').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 300);
	//nav6
	setTimeout(function () {
		$('#menu li.nav6').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav6').css({display:'none'}); });
		$('#menu li.nav6').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav6').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav6').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 400);
	//nav5
	setTimeout(function () {
		$('#menu li.nav5').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav5').css({display:'none'}); });
		$('#menu li.nav5').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav5').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav5').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 500);
	//nav2
	setTimeout(function () {
		$('#menu li.nav2').find(".im1").stop(true).delay(0).animate({marginBottom:-120},800,'easeOutExpo', function(){ $('#menu li.nav2').css({display:'none'}); });
		$('#menu li.nav2').find(".im2").stop(true).delay(0).animate({marginBottom:65},800,'easeOutExpo');
		$('#menu li.nav2').find(".over3").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');
		$('#menu li.nav2').find(".txt1").stop(true).delay(0).animate({opacity:0},800,'easeOutExpo');		
	}, 600);

};
function hideSplashQ(){	
	$('header').css({marginTop:-300});
	$('.bg1').css({marginTop:-300});

	$('#menu li').css({display:'none'});
	$('#menu li .im1').css({marginBottom:-120});
	$('#menu li .im2').css({marginBottom:65});
	$('#menu li .over3').css({opacity:0});
	$('#menu li .txt1').css({opacity:0});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	/////// icons
	$(".icons li a").find(".over1").css({opacity:0.4});
	$(".icons li a").find(".img").css({opacity:0.6});
	$(".icons li a").hover(function() {
		$(this).find(".over1").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
		$(this).find(".img").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find(".over1").stop().animate({opacity:0.4 }, 400, 'easeOutExpo');		    
		$(this).find(".img").stop().animate({opacity:0.6 }, 400, 'easeOutExpo');		   
	});

	
	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 13,
		verticalDragMinHeight: 154,
		verticalDragMaxHeight: 154
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:2000});		   
		   //$('#content').css({height:0});
        },
        actFu:function(_){
			var Delay=100; // default
        	if( (_.pren == undefined) ){ // on reload
        		Delay=0;
        	}
        	if( (_.pren == 0) ){ // on click
        		Delay=700;
        	}
        	//console.log(_.pren, Delay);
			if(_.curr){
				_.curr.css({display:'block', left:2000}).stop().delay(Delay).animate({left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({left:-2000},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);
			if ( (_.pren == undefined) && (_.n <= 0) ){                
                startF();
                //console.log("startF");
            }			
            if ( (_.n == 0) && (_.pren >= 0) ){
                showSplash();
                //console.log("showSplash");
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
                //console.log("hideSplash");  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
                //console.log("hideSplashQ");
            }
            //console.log("///////////////////////////");
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			$('> a .txt1',li).stop(true).animate({marginTop:0, opacity:1},400, 'easeOutBack');
			$('> a .over1',li).stop().animate({marginTop:-10},400, 'easeOutCubic');
			//$('.txt1',li).stop().animate({top:60},400, 'easeOutExpo');
			//$('.txt2',li).stop().animate({top:0},400, 'easeInOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> a .txt1',li).stop(true).animate({marginTop:50, opacity:0},400, 'easeOutExpo');
     			$('> a .over1',li).stop().animate({marginTop:0},400, 'easeOutCubic');
				//$('> a .over',li).stop().animate({opacity:0},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 200);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});