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

  /*新增外呼任务*/
  $(".newaddpro").on("click",function () {
    $("#loading").show();
    $("#newaddout").show(250);
  })
  $(".close_outphone ,.ipt_cancel_outphone").on("click",function () {
    $("#loading").hide(250);
    $("#newaddout").hide(200);
  })
  /*新增呼叫时间设置*/
  $(".btn_new_out").on("click",function () {
    $(".add_time_out").show(250);
  })
  $(".close_in_out ,.ipt_cancel_out").on("click",function () {
    $(".add_time_out").hide(250);
  })

  /*新增智能外呼任务*/
  $(".newaddproai ,.edit_list_w").on("click",function () {
    $("#loading").show(250);
    $("#newaddproai").show();
  })
  $(".close_out ,.ipt_cancel").on("click",function () {
    $("#loading").hide(250);
    $("#newaddproai").hide(200);
  })
  /*新增呼叫时间设置*/
  $(".btn_new").on("click",function () {
    $(".add_time").show(250);
  })
  $(".close_in ,.ipt_cancel_in").on("click",function () {
    $(".add_time").hide(250);
  })
  /*导入导出客户清单*/
  $(".ipt_outlist").on("click",function () {
    $(".inonerlist").show(200);
  })
  $(".ipt_cancel_long ,.close_outlong").on("click",function () {
    $(".inonerlist").hide(200);
  })
  /*增加客户窗口*/
  $(".add_man").on("click",function () {
    $(".add_manlist").show(200);
  })
  $(".close_addman ,.ipt_cancel_addman").on("click",function () {
    $(".add_manlist").hide(200);
  })
  /*新增营销模板*/
  $(".newmuban").on("click",function () {
    $("#loading").show(250);
    $(".add_sellmuban").show();
  })
  $(".close_addsell ,.ipt_cancel_addsell").on("click",function () {
    $(".add_sellmuban").hide(200);
    $("#loading").hide(250);
  })
  /*新增外呼记录*/
  $(".close_outlist ,.ipt_cancel_addoutlist").on("click",function () {
    $(".add_outlist").hide(200);
    $("#loading").hide(250);
  })
  $(".newoutphonelist ,.look_list ,.edit_list").on("click",function () {
    $("#loading").show(250);
    $(".add_outlist").show();
  })
  /*tab切换*/
  $(".waitfinish").on("click",function () {
    $(".waitfinish_later").click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".onlinefinish").on("click",function () {
    $(".onlinefinish_later").click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".finished").on("click",function () {
    $(".finished_later").click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.outonlinelist  ,.outlinemuban").removeClass("cor");
  })
  $(".outonlinelist").on("click",function () {
    $(".outonlinelist_later").click();
    $(this).addClass('cor').siblings().removeClass('cor');
    $(".outline ,.outline_pz ,.waitfinish ,.onlinefinish ,.finished").removeClass("cor");
  })
  $(".outlinemuban").on("click",function () {
    $(".outlinemuban_later").click();
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
    $("#loading").show(250);
    $(".add_list").show();
  })
  $(".close_list_finish ,.ipt_cancel_list_fin").on("click",function () {
    $(".add_list").hide(200);
    $("#loading").hide(250);
  })
  /*任务清单 待完成 执行中*/
  $(".look_list_wait ,.look_list_online").on("click",function () {
    $("#loading").show(250);
    $(".add_listonline").show();
  })
  $(".close_list_online ,.ipt_cancel_list").on("click",function () {
    $(".add_listonline").hide(200);
    $("#loading").hide(250);
  })
  /*任务清单 已完成——交互记录*/
  $(".play").on("click",function () {
    $(".add_list_play").show(200);
  })
  $(".close_play").on("click",function () {
    $(".add_list_play").hide(200);
  })
  /*外呼任务管理操作*/
  $(".img_add").on("click",function () {
    $(".inonerlist").show();
    $("#loading").show(200);
  })
  $(".close_two ,.ipt_cancel_long").on("click",function () {
    if($('#newaddproai').is(':hidden')){
      $(".inonerlist").hide(200);
      $("#loading").hide(250);
    }else{
      $('#newaddproai').show()
      $("#loading").show(200);
    }

  })

})


