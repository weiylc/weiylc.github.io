$(function(){
    //console.log(self.location)
    try
    {
        if(self.location.host == "axguanjia.com")
        {
            top.location.href = "http://www.axguanjia.com/";
        }
    }
    catch(e){ }
    $('.s2_content .s2_right .item').each(function(index,ele){
        $('.s2_content .s2_right .item').eq(0).find(".item-active").css("opacity","1")
        $('.s2_content .s2_right .item').eq(0).find(".item-active-bg").css({borderTopRightRadius:0,borderBottomRightRadius:0,width:'650px'})
        $(ele).hover(function(){
            $(".scroll img").eq(0).stop().removeAttr("style").hide().css({top:"0"}).addClass("img22")
            $(".scroll img").eq(1).stop().removeAttr("style").hide().css({top:"90px"}).addClass("img22")
            $(".scroll img").eq(2).stop().removeAttr("style").hide().css({top:"50px"}).addClass("img22")
            $('.s2_content .s2_right .item').find(".item-active").css("opacity","0") 
            if(index==0){
                $(".s2_left .big-bg").attr("src","images/iphone_one.png")
                $(".scroll img").eq(index).show()
            }else if(index==1){
                $(".s2_left .big-bg").attr("src","images/iphone_two.png")
                $(".scroll img").eq(index).show()
            }else if(index==2){
                $(".s2_left .big-bg").attr("src","images/iphone_three.png")
                $(".scroll img").eq(index).show()
            }
            $('.s2_content .s2_right .item').find(".item-active-bg").stop().css({borderTopRightRadius:'100px',borderBottomRightRadius:'100px',width:0})
            $(this).find(".item-active").css("opacity","1")
      
            $(this).find(".item-active-bg").animate({borderTopRightRadius:0,borderBottomRightRadius:0,width:'650px'},'linear',function(){
                if(index==0){
                    $(".scroll img").eq(0).animate({top:'-600px'},2000,'linear',function(){
                        $(".scroll img").eq(0).animate({top:'0'},2000,'linear')
                    })
                }else if(index==1){
                    $(".scroll img").eq(1).animate({top:'-230px'},1200,'linear',function(){
                        $(".scroll img").eq(1).animate({top:'90px'},1200,'linear')
                    })
                }else if(index==2){
                    $(".scroll img").eq(2).animate({top:'-290px'},1400,'linear',function(){
                        $(".scroll img").eq(2).animate({top:'50px'},1400,'linear')
                    })
                }

            })
        },function(){
            //
            // $('.s2_content .s2_right .item').find(".item-active").css("opacity","0")
            // $('.s2_content .s2_right .item').find(".item-active-bg").stop().css({borderTopRightRadius:'100px',borderBottomRightRadius:'100px',width:0})
            if(index==0){
                // $(".scroll img").eq(0).animate({top:"0"},2000,'linear').addClass("img22").show()
            }
                // $(".scroll img").eq(0).stop().removeAttr("style").css({top:"0"},2000,'linear').addClass("img22").show()
            //
            // $(".scroll img").eq(1).stop().removeAttr("style").hide().css({top:"90px"}).addClass("img22")
            // $(".scroll img").eq(2).stop().removeAttr("style").hide().css({top:"50px"}).addClass("img22")
            // $(".s2_left .big-bg").attr("src","images/iphone_one.png")
            // $('.s2_content .s2_right .item').eq(0).find(".item-active").css("opacity","1")
            // $('.s2_content .s2_right .item').eq(0).find(".item-active-bg").css({borderTopRightRadius:0,borderBottomRightRadius:0,width:'650px'})
        })
    })
    $(".section1 .download_box  div .img2").each(function(index,ele){
        $(ele).hover(function(){
            // alert(1)
            $(this).parent().find(".img1").animate({transform:'scale(1)'})
        },function(){})
    })


    $(".section1 .download_box  div ").hover(function(){
        $(this).find(".img1").addClass("hover");
    },function(){
        var num = $(this).index()
        $(this).find(".img1").addClass("hover1");
        setTimeout(function () {
            $(".section1 .download_box  div").eq(num).find(".img1").removeClass("hover hover1");
        }, 300);
    })
        new WOW().init();



});