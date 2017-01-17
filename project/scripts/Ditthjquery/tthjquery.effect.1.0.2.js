//*Qianxun，Jquery扩展，页面效果
//*作者：千寻互动 - 技术陶
//*创建时间：2014年09月11日
//*更新版本：1.0.2
//*更新时间：2015年05月06日

//=============================placeholder效果======================================
//obj：目标输入框
//txt: placeholder文本
function input_placeholder(obj, txt) {
    $(obj).focus(function () {
        if ($(this).val() == txt) {
            $(this).val("");
        }
    });
    $(obj).blur(function () {
        if ($(this).val() == "") {
            $(this).val(txt);
        }
    });
}
//=============================/placeholder效果======================================

//单选效果
function radiobox(obj, css, fn) {
    var objnum = arguments.length;
    obj.each(function (i) {
        $(this).click(function () {
            obj.each(function () {
                $(this).removeClass(css);
            });
            $(this).addClass(css);
            if (objnum == 3) {
                fn(i);
            }
        });
    });
}

//=============================检测回车键======================================
function pressenter(obj, fn) {
    $(obj).keydown(function (evt) {
        evt = (evt) ? evt : ((window.event) ? window.event : "")
        keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);
        if (keyCode == 13) {
            fn();
        }
    });
}

function pressenterUp(obj, fn) {
    $(obj).keyup(function (evt) {
        evt = (evt) ? evt : ((window.event) ? window.event : "")
        keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);
        if (keyCode == 13) {
            fn();
        }
    });
}
//=============================/检测回车键======================================

//=============================屏幕置中======================================
function setWindowCenter(obj) {
    var winHeight = $(window).height();
    var objTop = $(obj).offset().top;
    var objHeight = $(obj).height();
    var scrollTop = objTop - (winHeight - objHeight) / 2
    $(window).scrollTop(scrollTop);
}
//=============================/屏幕置中======================================

//=============================输入框警示样式======================================
//输入框RIGHT提示信息
function cwmark_right(obj, txt) {
    clearcwmark(obj);
    var objNum = arguments.length;
    if (objNum < 2) {
        txt = "";
    }
    $(obj).parent().find(".cwmark").addClass("cwmark_Right").html('<img src="/images/mark13.jpg" width="19" height="19"> ' + txt);
}
//输入框WRONG警示信息
function cwmark_wrong(obj, txt) {
    clearcwmark(obj);
    var objNum = arguments.length;
    if (objNum < 2) {
        txt = "";
    }
    $(obj).addClass("wtext");
    $(obj).parent().find(".cwmark").addClass("cwmark_Wrong").html('<img src="/images/mark12.jpg" width="19" height="19"> ' + txt);
}
//解除普通输入框的警示信息
function clearcwmark(obj) {
    $(obj).removeClass("wtext");
    $(obj).parent().find(".cwmark").removeClass("cwmark_Right").removeClass("cwmark_Wrong").html("");
}

//输入框RIGHT提示信息(简式)
function cwmark_right_s(obj, txt) {
    clearcwmark_s(obj);
    var objNum = arguments.length;
    if (objNum < 2) {
        txt = "";
    }
    $(obj).parent().find(".cwmark").addClass("cwmark_Right").html('<img src="/images/mark13.jpg" width="19" height="19"> ' + txt);
}
//输入框WRONG警示信息(简式)
function cwmark_wrong_s(obj, txt) {
    clearcwmark_s(obj);
    var objNum = arguments.length;
    if (objNum < 2) {
        txt = "";
    }
    $(obj).parent().find(".cwmark").addClass("cwmark_Wrong").html('<img src="/images/mark12.jpg" width="19" height="19"> ' + txt);
}
//输入框WRONG警示信息(简式)
function cwmark_error_s(obj, txt) {
    clearcwmark_s(obj);
    var objNum = arguments.length;
    if (objNum < 2) {
        txt = "";
    }
    $(obj).parent().find(".cwmark").addClass("cwmark_Error").html('<img src="/images/mark10.jpg" width="15" height="16"> ' + txt);
}
//解除普通输入框的警示信息(简式)
function clearcwmark_s(obj) {
    $(obj).parent().find(".cwmark").removeClass("cwmark_Right").removeClass("cwmark_Wrong").html("");
}

//密码输入框警示信息
function PwdInput_WarmInfo(pwdobj, objcss, pwdlab, labcss, txt) {
    $(pwdobj).addClass("pwdinputwarm");
    $(pwdlab).addClass("pwdlabelwarm");
    $(pwdobj).val("");
    $(pwdlab).html(txt);
}

//解除密码输入框的警示信息
function Remove_PwdInput_WarmInfo(pwdobj, objcss, pwdlab, labcss) {
    $(pwdobj).removeClass("pwdinputwarm");
    $(pwdlab).removeClass("pwdlabelwarm");
    $(pwdlab).html("");
}

//提醒信息
function WarmingInfo(obj, txt) {
    var html = '<span class="mes">' + txt + '</span>';
    $(obj).html(html);
}
//去除提醒信息
function removeWarmingInfo(obj) {
    $(obj).html("");
}
//=============================/输入框警示样式======================================

//=============================保存信息中覆盖层=====================================
//添加保存中覆盖层
function saveFloat(obj, txt) {
    var objNum = arguments.length;
    //文本
    var text = "";
    if (objNum > 1) {
        text = txt;
    }
    //覆盖层
    $(obj).append('<div class="savefloat"></div>');
    var bodyH = $(document).height();
    var pageWidth = $(window).width();
    $(".savefloat").css({ "width": pageWidth, "height": bodyH, "background": "#ececec", "display": "block", "border": "0px", "frameborder": "0", "position": "absolute", "filter": "alpha(opacity:50)", "top": "0px", "left": "0px" });
    //保存中弹窗
    $(obj).append('<div class="saving"><img src="/scripts/Di/tthjquery/default/saving.gif">&nbsp;' + text + '</div>');
    $(".saving").css({ "position": "absolute", "width": "400px", "height": "300px", "line-height": "30px", "display": "block", "color": "#fff", "font-size": "14px", "font-size": "16px", "font-weight": "bolder" });
    showSavingDialog(".saving")
    $(window).resize(function () {
        var bodyH = $(document).height();
        var pageWidth = $(window).width();
        $(".savefloat").css({ "width": pageWidth, "height": bodyH })
        srcollSavingDialog(".saving");
    }).scroll(function () {
        var bodyH = $(document).height();
        var pageWidth = $(window).width();
        $(".savefloat").css({ "width": pageWidth, "height": bodyH })
        srcollSavingDialog(".saving");
    });
}
//移除保存中覆盖层
function removeSaveFloat() {
    $(".savefloat").remove();
    $(".saving").remove();
}
function showSavingDialog(id) {
    var winW = $(window).width();
    var winH = $(window).height();
    var sroT = $(window).scrollTop();
    var sroL = $(window).scrollLeft();
    var objW = $(id).width();
    var objH = $(id).height();
    var numleft = (winW - objW) / 2 + sroL;
    var numtop = (winH - objH) / 2 + sroT;
    $(id).css("left", numleft).css("top", numtop);
}
function srcollSavingDialog(id) {
    var winW = $(window).width();
    var winH = $(window).height();
    var sroT = $(window).scrollTop();
    var sroL = $(window).scrollLeft();
    var objW = $(id).width();
    var objH = $(id).height();
    var numleft = (winW - objW) / 2 + sroL;
    var numtop = (winH - objH) / 2 + sroT;
    $(id).animate({ "left": numleft, "top": numtop }, 500).dequeue();
}
//============================/保存信息中覆盖层=====================================

//=============================等待中状态=====================================
function waitingStatus(obj, css, txt) {
    var objNum = arguments.length;

    if (objNum < 2) {
        css = "waiting";
    }
    $(obj).addClass(css);

    if (objNum < 3) {
        txt = "等待中";
    }

    $(obj).html("(" + txt + ".)");
    waitingStrFlash(obj, css, txt);
}

function waitingStrFlash(obj, css, txt) {
    var text = $(obj).html().trim();
    switch (text) {
        case txt + ".":
            $(obj).html("(" + txt + "..)");
            break;
        case txt + "..":
            $(obj).html("(" + txt + "...)");
            break;
        default:
            $(obj).html("(" + txt + ".)");
            break;
    }

    if ($(obj).hasClass(css)) {
        setTimeout(function () {
            waitingStrFlash(obj, css, txt);
        }, 1000);
    }
}
//=============================/等待中状态====================================