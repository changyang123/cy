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
  $("#begin_time_in ,#end_time_in").val(timestr);
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
  timesetting($("#begin_time_in").val(timestr));
  timesetting($("#end_time_in").val(timestr));

  timesetting($("#time_begin_out").val(timestr));
  timesetting($("#time_end_out").val(timestr));
  timesetting($("#begin_time_out").val(timestr));
  timesetting($("#end_time_out").val(timestr));

  $('#edit').editable({inlineMode: false, alwaysBlank: true})
  /*新增外呼任务*/
  $(".newaddpro").on("click",function () {
    $("#loading").fadeIn();
    $("#newaddout").fadeIn();
  })
  $(".close_outphone ,.ipt_cancel_outphone").on("click",function () {
    $("#loading").fadeOut();
    $("#newaddout").fadeOut();
  })
  /*新增呼叫时间设置*/
  $(".btn_new_out").on("click",function () {
    $(".add_time_out").fadeIn();
  })
  $(".close_in_out ,.ipt_cancel_out").on("click",function () {
    $(".add_time_out").fadeOut();
  })

  /*新增智能外呼任务*/
  $(".newaddproai ,.edit_list_w").on("click",function () {
    $("#loading").fadeIn();
    $("#newaddproai").fadeIn();
  })
  $(".close_out ,.ipt_cancel").on("click",function () {
    $("#loading").fadeOut();
    $("#newaddproai").fadeOut();
  })
  /*新增呼叫时间设置*/
  $(".btn_new").on("click",function () {
    $(".add_time").fadeIn();
  })
  $(".close_in ,.ipt_cancel_in").on("click",function () {
    $(".add_time").fadeOut();
  })
  /*导入导出客户清单*/
  $(".ipt_outlist").on("click",function () {
    $(".inonerlist").fadeIn();
  })
  $(".ipt_cancel_long ,.close_outlong").on("click",function () {
    $(".inonerlist").fadeOut();
  })
  /*增加客户窗口*/
  $(".add_man").on("click",function () {
    $(".add_manlist").fadeIn();
  })
  $(".close_addman ,.ipt_cancel_addman").on("click",function () {
    $(".add_manlist").fadeOut();
  })
  /*新增营销模板*/
  $(".newmuban").on("click",function () {
    $("#loading").fadeIn();
    $(".add_sellmuban").fadeIn();
  })
  $(".close_addsell ,.ipt_cancel_addsell").on("click",function () {
    $(".add_sellmuban").fadeOut();
    $("#loading").fadeOut();
  })
  /*新增外呼记录*/
  $(".close_outlist ,.ipt_cancel_addoutlist").on("click",function () {
    $(".add_outlist").fadeOut();
    $("#loading").fadeOut();
  })
  $(".newoutphonelist ,.look_list ,.edit_list").on("click",function () {
    $("#loading").fadeIn();
    $(".add_outlist").fadeIn();
  })
  /*tab切换*/
  $(".waitfinish").on("click",function () {
    $(".waitfinish_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".onlinefinish").on("click",function () {
    $(".onlinefinish_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".finished").on("click",function () {
    $(".finished_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".outonlinelist").on("click",function () {
    $(".outonlinelist_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outlinemuban").on("click",function () {
    $(".outlinemuban_later").fadeIn().children("a").eq(0).click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outline_pz ").on("click",function () {
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline  ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outline").on("click",function () {
    $(this).addClass("cor").find("cor").removeClass("cor");
    $(".outline_pz ,.waitfinish ,.onlinefinish  ,.finished").removeClass("cor");
  })
  $(".outline_pz").on("click",function () {
    $(this).addClass("cor").find("cor").removeClass("cor");
    $(".outline ,.outonlinelist ,.outlinemuban").removeClass("cor");
  })
  $(".table tbody tr").on("click",function () {
    $(this).addClass('cor').siblings().removeClass('cor');
  })
  /*任务清单 已完成*/
  $(".look_list_finish").on("click",function () {
    $("#loading").fadeIn();
    $(".add_list").fadeIn();
  })
  $(".close_list_finish ,.ipt_cancel_list_fin").on("click",function () {
    $(".add_list").fadeOut();
    $("#loading").fadeOut();
  })
  /*任务清单 待完成 执行中*/
  $(".look_list_wait").on("click",function () {
    $("#loading").fadeIn();
    $(".add_listonline").fadeIn();
  })
  $(".close_list_online ,.ipt_cancel_list").on("click",function () {
    $(".add_listonline").fadeOut();
    $("#loading").fadeOut();
  })
  /*任务清单 已完成——交互记录*/
  $(".play").on("click",function () {
    $(".add_list_play").fadeIn();
  })
  $(".close_play").on("click",function () {
    var audio = $("#audio");
    var stop = audio.get(0);
    stop.pause();
    $(".add_list_play").fadeOut();
  })
  /*外呼任务管理操作*/
  $(".img_add").on("click",function () {
    $(".inonerlist").fadeIn();
    $("#loading").fadeIn();
  })
  $(".img_edit").on("click",function () {
    $("#newaddproai").fadeIn();
    $("#loading").fadeIn();
  })
  $(".close_two ,.ipt_cancel_long").on("click",function () {
    if($('#newaddproai').is(':hidden')){
      $(".inonerlist").fadeOut();
      $("#loading").fadeOut();
    }else{
      $('#newaddproai').fadeIn()
      $("#loading").fadeIn();
    }
  })
  /*tab切换交互*/
  $(".right_a").on("click",function () {
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

})


