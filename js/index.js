
$(function(){  document.documentElement.scrollTop=document.body.scrollTop = 0;
	           //作品遮罩层添加
               var imgMask= {

					init:function(){
                        var buttons2 = $(".navbar");
			            var navfloats2 = $(".navbar2");
						this.maskPlay();
						this.skillbarAnim();
						this.bigtitleAnim();
						this.floatNav();
						this.backAnim(buttons2);
					    this.backAnim(navfloats2);
                        this.contentAnim();
					},
				    //添加遮罩层
				    maskPlay:function(){

		                $(".opus_context_ul li").hover(function(){
		                	var imgHref =  $(this).find("a").attr("href");
		                	var imgTitle =  $(this).find("h2").text();
		                	var div="<div id='mask' class='mask'></div><div class='img_bg'><a href="+imgHref+" target='_blank'><img src='images/opus_link.png' alt=''></a><h2>"+imgTitle+"</h2></div>";
		                    $(this).append(div).stop().find(".mask,.img_bg").fadeIn(500);
		                    $(".mask").css("height",$(".opus_img").height());   
				            $(".mask").css("width",$(".opus_img").width());
		                   },
		                   function(){
		                   	$(this).find(".mask,.img_bg").stop().fadeOut(500);
		                    $(".mask,.img_bg").remove();	                   			    
		                  }
		                );
				    },
				    //技能条动画
				    skillbarAnim:function(){
				    	//动画大小数组
				    	 var span_array = ["400px","280px","200px","350px","380px","180px","260px"];

				    	 $(window).scroll(function(){
				    	 	 
				    	 	 var skill_offsetop=$(".span-0").offset().top;
				    	  //判断是否在可视区域
							 if (skill_offsetop >= $(window).scrollTop() && skill_offsetop < ($(window).scrollTop()+$(window).height())) {
		                    /*alert("div在可视范围");*/
			                 for (var i=0;i<$(".span-0").length;i++){
			                        $(".span-0").eq(i).stop().animate({width:span_array[i]},500);
			                    }
			                }
	                        else{
	                    	    $(".span-0").stop().animate({width:"0px"},500);
	                        }
				    	 });	 
				    },
				    //大标题底部横杆动画
				    bigtitleAnim:function(){
				    	var hr4_array = ["100px","150px","125px","125px","125px","90px"];
				    	var hr4_offsettop = $(".hr4");				    	
				    	$(window).scroll(function(){
				    		
                            for(var i = 0;i<hr4_offsettop.length;i++){
                            	if (hr4_offsettop.eq(i).offset().top >= $(window).scrollTop() && hr4_offsettop.eq(i).offset().top < ($(window).scrollTop()+$(window).height())) {
                                    $(".hr4").eq(i).stop().animate({width:hr4_array[i]},500);
                            	}
                            	else{
                                    $(".hr4").eq(i).stop().animate({width:"0px"},500);
                            	}
                            }
				    	});
				    },
				    //内容css3动画
				    contentAnim:function(){

				    	var anim_con_offsettop_left = $(".fadeInLeft-anim");
				    	var anim_con_offsettop_right = $(".fadeInRight-anim");
				    	var anim_con_offsettop_scale = $(".fadeInScale-1-anim");				    	
				    	$(window).scroll(function(){
				    		
                            for(var i = 0;i<anim_con_offsettop_left.length;i++){
                            	if (anim_con_offsettop_left.eq(i).offset().top >= $(window).scrollTop() && anim_con_offsettop_left.eq(i).offset().top < ($(window).scrollTop()+$(window).height())) {
                                    anim_con_offsettop_left.eq(i).addClass("fadeInLeft");
                            	}
                            }
                            for(var i = 0;i<anim_con_offsettop_right.length;i++){
                            	if (anim_con_offsettop_right.eq(i).offset().top >= $(window).scrollTop() && anim_con_offsettop_right.eq(i).offset().top < ($(window).scrollTop()+$(window).height())) {
                                    anim_con_offsettop_right.eq(i).addClass("fadeInRight");
                            	}
                            }
                            for(var i = 0;i<anim_con_offsettop_scale.length;i++){
                            	if (anim_con_offsettop_scale.eq(i).offset().top >= $(window).scrollTop() && anim_con_offsettop_scale.eq(i).offset().top < ($(window).scrollTop()+$(window).height())) {
                                    anim_con_offsettop_scale.eq(i).addClass("fadeInScale-1");
                            	}
                            }
				    	});
				    },
				    //浮动导航条的区域检测
				    floatNav:function(){
				    	$(window).scroll(function(){
                            var divstop_array = [$(".item").eq(0).offset().top,$(".item").eq(1).offset().top,$(".item").eq(2).offset().top,$(".item").eq(3).offset().top,$(".item").eq(4).offset().top,$(".item").eq(5).offset().top,6000];
							var contop = document.documentElement.scrollTop || document.body.scrollTop;
							var showbar = divstop_array[0];
							if(contop >= showbar){	   
							   $("#navfloat").show(300);				    		        
							}
							else{ 						
					            $("#navfloat").hide(300);
								} 					
							for(var i=0;i<divstop_array.length;i++){
								if(contop >= divstop_array[i] && contop < divstop_array[i+1]){
									$(".navbar2").eq(i).addClass("active_li").siblings().removeClass("active_li");						
								}						
							}
				    	});
				    },
				    //锚点运动动画
				    backAnim:function(buts){
				    	
                        var divs = $(".item");
				    	for(var i = 0;i < buts.length;i++){
					    	buts.eq(i).click(function(){
					    		        var contop = document.documentElement.scrollTop || document.body.scrollTop;				    		      				    		        
					    		        var divstop = divs.eq($(this).index()-1).offset().top;
					    		        $("body,html").animate({scrollTop:divstop},500);
					    		        			                        
					    	});				    
				        }
				        //回到顶部
				        $(".tops").click(function(){
					    	$("body,html").animate({scrollTop:0},500);
					    });
                        $("#back_contact").click(function(){
					    	$("body,html").animate({scrollTop:$(".contact").offset().top},500);
					    });
                    }            
		       };
		       
				
		       // 元素nav根据屏幕高度自适应高度
               var bgHeight = {
	               	init:function(){
	               		/*var a= $(".opus_context_bg").height(),b=$("#opus").height(),c=$(".opus_title").height(),d=$(".opus_nav").height();
	               		a=b-c-d-120;
	               		$(".opus_context_bg").css("height",a);*/
	               		var winHeight = $(window).height()-30,headHeight = $(".header").height();
	               		var navHeight = winHeight-headHeight;
	               		$(".nav").css("height",navHeight);

	               	}
               }
               //作品图片轮播
               var opusImg = {
               	   liWid:$(".opus_context_ul").eq(0).width(),//获取图片的宽度
               	   init:function(){  //初始化
                       $(".opus_type li").eq(0).addClass("nav_active");
                       $(".opus_context").width(opusImg.liWid*$(".opus_context_ul").length+"px");
                       opusImg.navBtn();
               	   },
               	   navBtn:function(){
                       $(".opus_type li").click(function(){
			    			$(this).addClass("nav_active").siblings().removeClass("nav_active");
			    			var index = $(this).index();
			    			var number = index;
			    			var distance = -(opusImg.liWid)*index;
		                    $('.opus_context').stop().animate({
								left:distance
							});           
						});
               	   }

               }
		       imgMask.init();
		       bgHeight.init();
		       opusImg.init();
		       window.onload = function(){
		       	document.documentElement.scrollTop=document.body.scrollTop = 0;
		       } 
        });
		
			