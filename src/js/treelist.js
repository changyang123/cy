$(function () {
  var timestr="";
  function formatTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth()+1;
    var day = myDate.getDate();
    timestr=year + '-' + month + '-' + day;
  }
  formatTime();
  $("#time_begin ,#time_end").val(timestr);
  $("#time_begin_out ,#time_end_out").val(timestr);
  $("#begin_time_in ,#end_time_in").val(timesettingday($("#begin_time_in").val(timestr)));
  $("#begin_time_out ,#end_time_out").val(timestr);
  $("#time_begin_out").focus(function () {
    $("#time_begin_out").val(timestr);
  })
  $("#time_end_out").focus(function () {
    $("#time_end_out").val(timestr);
  })
  $("#time_begin").focus(function () {
    $("#time_begin").val(timestr);
  })
  $("#time_end").focus(function () {
    $("#time_end").val(timestr);
  })
  $("#begin_time_in").focus(function () {
    $("#begin_time_in").val(timestr);
  })
  $("#end_time_in").focus(function () {
    $("#end_time_in").val(timestr);
  })
  $("#begin_time_out").focus(function () {
    $("#begin_time_out").val(timestr);
  })
  $("#end_time_out").focus(function () {
    $("#end_time_out").val(timestr);
  })
  timesetting($("#time_begin").val(timestr));
  timesetting($("#time_end").val(timestr));
  timesettingday($("#begin_time_in").val(timestr));
  timesettingday($("#end_time_in").val(timestr));

  timesetting($("#time_begin_out").val(timestr));
  timesetting($("#time_end_out").val(timestr));
  timesetting($("#begin_time_out").val(timestr));
  timesetting($("#end_time_out").val(timestr));

  $('#edit').editable({inlineMode: false, alwaysBlank: true})
  /*新增外呼任务*/
  $(".newaddpro").click(function () {
    $("#loading").fadeIn();
    $("#newaddout").fadeIn();
  })
  $(".close_outphone ,.ipt_cancel_outphone").click(function () {
    if($('.add_time_out').is(':hidden')){
      $("#loading").fadeOut();
      $("#newaddout").fadeOut();
    }else{
      $('.add_time_out').fadeOut()
      $("#loading").fadeOut();
      $("#newaddout").fadeOut();
    }
  })
  /*新增呼叫时间设置*/
  $(".btn_new_out").click(function () {
    $(".add_time_out").fadeIn();
  })
  $(".close_in_out ,.ipt_cancel_out").click(function () {
    $(".add_time_out").fadeOut();
  })

  /*新增智能外呼任务*/
  $(".newaddproai").click(function () {
    $("#loading").fadeIn();
    $("#newaddproai").fadeIn();

  })
  $(".edit_list_w").click(function () {
    $("#loading").fadeIn();
    $("#newaddproai").fadeIn();
    $(".addproaimange_text").html("修改智能外呼任务");
  })
  $(".close_out ,.ipt_cancel").click(function () {
    if($('.add_time').is(':hidden')){
      $("#loading").fadeOut();
      $("#newaddproai").fadeOut();
      $(".addproaimange_text").html("新增智能外呼任务");
    }else{
      $('.add_time').fadeOut()
      $("#loading").fadeOut();
      $("#newaddproai").fadeOut();
      $(".addproaimange_text").html("新增智能外呼任务");
    }
    if($('.inonerlist').is(':hidden')){
      $("#loading").fadeOut();
      $("#newaddproai").fadeOut();
    }else{
      $('.inonerlist').fadeOut()
      $("#loading").fadeOut();
      $("#newaddproai").fadeOut();
    }

  })
  /*新增呼叫时间设置*/
  $(".btn_new").click(function () {
    $(".add_time").fadeIn();
  })
  $(".close_in ,.ipt_cancel_in").click(function () {
    $(".add_time").fadeOut();
  })
  /*导入导出客户清单*/
  $(".ipt_outlist").click(function () {
    $(".inonerlist").fadeIn();

  })
  /*增加客户窗口*/
  $(".add_man").click(function () {
    $(".add_manlist").fadeIn();
  })
  $(".close_addman ,.ipt_cancel_addman").click(function () {
    $(".add_manlist").fadeOut();
  })
  /*新增营销模板*/
  $(".newmuban").click(function () {
    $("#loading").fadeIn();
    $(".add_sellmuban").fadeIn();
  })
  $(".close_addsell ,.ipt_cancel_addsell").click(function () {
    $(".add_sellmuban").fadeOut();
    $("#loading").fadeOut();
  })
  /*新增外呼记录*/
  $(".close_outlist ,.ipt_cancel_addoutlist").click(function () {
    $(".add_outlist").fadeOut();
    $("#loading").fadeOut();
  })
  $(".newoutphonelist ,.look_list ,.edit_list").click(function () {
    $("#loading").fadeIn();
    $(".add_outlist").fadeIn();
  })
  /*tab切换*/
  $(".waitfinish").click(function () {
    $(".waitfinish_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".onlinefinish").click(function () {
    $(".onlinefinish_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".finished").click(function () {
    $(".finished_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".outonlinelist").click(function () {
    $(".outonlinelist_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outlinemuban").click(function () {
    $(".outlinemuban_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outline_pz ").click(function () {
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline  ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outline").click(function () {
    $(this).addClass("cor").find("cor").removeClass("cor");
    $(".outline_pz ,.waitfinish ,.onlinefinish  ,.finished").removeClass("cor");
  })
  $(".outline_pz").click(function () {
    $(this).addClass("cor").find("cor").removeClass("cor");
    $(".outline ,.outonlinelist ,.outlinemuban").removeClass("cor");
  })
  $(".table tbody tr").click(function () {
    $(this).addClass('cor').siblings().removeClass('cor');
  })
  /*任务清单 已完成*/
  $(".look_list_finish").click(function () {
    $("#loading").fadeIn();
    $(".add_list").fadeIn();
  })
  $(".close_list_finish ,.ipt_cancel_list_fin").click(function () {
    if($('.add_list_play').is(':hidden')){
      $(".add_list").fadeOut();
      $("#loading").fadeOut();
    }else{
      $('.add_list_play').fadeOut()
      $(".add_list").fadeOut();
      $("#loading").fadeOut();
    }
  })
  /*任务清单 待完成 执行中*/
  $(".look_list_wait").click(function () {
    $("#loading").fadeIn();
    $(".add_listonline").fadeIn();
  })
  $(".close_list_online ,.ipt_cancel_list").click(function () {
    $(".add_listonline").fadeOut();
    $("#loading").fadeOut();
  })
  /*任务清单 已完成——交互记录*/
/*  $(".play").click(function () {
    $(".add_list_play").fadeIn();
  })*/
  $(".close_play").click(function () {
    var audio = $("#audio");
    var stop = audio.get(0);
    stop.pause();
    $(".add_list_play").fadeOut();
  })
  /*外呼任务管理操作*/
  $(".img_add").click(function () {
    $(".inonerlist").fadeIn();
    $("#loading").fadeIn();
  })
  $(".img_edit").click(function () {
    $("#newaddproai").fadeIn();
    $("#loading").fadeIn();
    $(".addproaimange_text").html("修改智能外呼任务");
  })
  $(".close_outlong ,.ipt_cancel_long").click(function () {
    if($('.add_manlist').is(':hidden')){
      $(".inonerlist").fadeOut();
      $(".add_manlist").fadeOut();
    }else{
      $('.inonerlist').fadeOut()
      $('.add_manlist').fadeOut()
    }
  })
  $(".close_two").click(function () {
    if($('#newaddproai').is(':hidden')){
      $(".inonerlist").fadeOut();
      $("#loading").fadeOut();
    }else{
      $(".inonerlist").fadeOut();
      $("#loading").fadeIn();
      $("#newaddproai").fadeIn();
    }
  })
  /*tab切换交互*/
  $(".right_a").click(function () {
    if($(this).is(':hidden')){
    }else{
      $(this).parent().fadeOut();
    }
  })
  /*上传文件*/
  $("#fUpload").on('change', function () {
    $("#ulList").empty();
    var fp = $("#fUpload");
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fragment = "";
    if (lg > 0) {
      for (var i = 0; i < lg; i++) {
        var fileName = items[i].name; // get file name
      }
      $("#ulList").val(fileName);
    }
  });
  /*所有弹框居中*/
  $(window).resize(function(){
    /*新增外呼任务*/
    $('#newaddout ').css({
      position:'absolute',
      left: ($(window).width() - $('#newaddout').outerWidth())/2,
    });
  });
    /*新增智能外呼任务*/
    $('#newaddproai').css({
      position:'absolute',
      left: ($(window).width() - $('#newaddproai').outerWidth())/2,
    });
    /*新增呼叫时间设置*/
    $('.add_time').css({
      position:'absolute',
      left: ($(window).width() - $('.add_time').outerWidth())/2,
    });
    /*新增外呼任务时间设置*/
    $('.add_time_out').css({
      position:'absolute',
      left: ($(window).width() - $('.add_time_out').outerWidth())/2,
    });
    /*导入导出客户清单*/
    $('.inonerlist').css({
      position:'absolute',
      left: ($(window).width() - $('.inonerlist').outerWidth())/2,
    });
    /*增加客户*/
    $('.add_manlist').css({
      position:'absolute',
      left: ($(window).width() - $('.add_manlist').outerWidth())/2,
    });
    /*新增营销模板*/
    $('.add_sellmuban').css({
      position:'absolute',
      left: ($(window).width() - $('.add_sellmuban').outerWidth())/2,
    });
    /*新增外呼记录*/
    $('.add_outlist').css({
      position:'absolute',
      left: ($(window).width() - $('.add_outlist').outerWidth())/2,
    });
    /*<!--任务清单 待完成 执行中-->*/
    $('.add_listonline').css({
      position:'absolute',
      left: ($(window).width() - $('.add_listonline').outerWidth())/2,
    });
    /*任务清单已完成*/
    $('.add_list').css({
      position:'absolute',
      left: ($(window).width() - $('.add_list').outerWidth())/2,
    });
    /*交互记录*/
    $('.add_list_play').css({
      position:'absolute',
      left: ($(window).width() - $('.add_list_play').outerWidth())/2,
    });
  // 最初运行函数
  $(window).resize();
  /*right_padding 宽度*/
  $(".right_padding").width($(window).width()-$(".accordion").width());

})
/*调用接口*/
function play(){
  $(".add_list_play").fadeIn();
  var urlst1 = "https://cc.egoonet.com:9099/v1/history/all/boc/007702B76ECB000C/boc_1000000";
  $.ajax({
    type: "GET",
    url: urlst1,
    success: function (data) {
        $(".play_mic").attr('src','../src/img/123.mp3');
        var url = $(".play_mic").attr("src");
        console.log(url)

    }
  })
}


  /*$.ajax({
    async : true,
    url : "https://cc.egoonet.com:9099/v1/history/all/boc/007702B76ECB000C/boc_1000000",
    type : "GET",
    dataType : "jsonp",
    jsonp : "callback",
    jsonpCallback: "handleResponse",
    success: function(result){
      console.log(result);
    },
    error:function (result) {
      console.log(result)
    }
  });*/

