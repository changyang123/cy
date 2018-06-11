/**
 *bootstrap时间插件中文
 * */
$.fn.datetimepicker.dates['zh'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    meridiem: ["上午", "下午"],
    //suffix:      ["st", "nd", "rd", "th"],
    today: "今天"
};
/**
 *bootstrap时间配置
 * */
function timesetting(element) {
    $(element).datetimepicker({
        minView: "month", //选择日期后，不会再跳转去选择时分秒
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
        language: 'zh', //汉化
        autoclose: true, //选择日期后自动关闭
        todayBtn: false,
        // startDate: new Date(),
        // endDate: new Date(),
        todayHighlight: true,
        initialDate: new Date()
    });
}
function timesettingday(element) {
    $(element).datetimepicker({
        minView: "day", //选择日期后，不会再跳转去选择时分秒
        format: "hh：ii", //选择日期后，文本框显示的日期格式
        language: 'zh', //汉化
        autoclose: true, //选择日期后自动关闭
        todayBtn: false,
        // startDate: new Date(),
        // endDate: new Date(),
        todayHighlight: true,
        initialDate: new Date()
    });
}
