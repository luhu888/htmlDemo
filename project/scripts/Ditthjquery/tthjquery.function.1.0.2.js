//*Qianxun，Jquery扩展，功能
//*作者：千寻互动 - 技术陶
//*创建时间：2014年03月22日
//*更新版本：1.0.2
//*更新时间：2015年05月06日

//=============================页面通用方法======================================
//正整数验证信息
function isInt(s) {
    var myreg = /(^[0-9]*[1-9][0-9]*$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//浮点数验证信息
function isDecimal(s) {
    var myreg = /(^(-?\d{1,18})(\.\d{1,2})?$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//固定电话号码验证信息
function isTel(s) {
    var myreg = /(^(\d{3,4}-)?\d{7,8}$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//手机号码验证信息
function isMobil(s) {
    var myreg = /(^1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//邮箱验证信息
function isEmail(s) {
    var myreg = /(^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//QQ号码验证信息
function isQQ(s) {
    var myreg = /(^[1-9]\d{4,10}$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//时间格式验证信息
function isTime(s) {
    var myreg = /(^\d{4}\/\d{1,2}\/\d{1,2}\s{1}(\d{1,2}:){2}\d{1,2}$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//银行卡号格式验证信息
function isBankCard(s) {
    var myreg = /(^[0-9]{19}$)/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}
//邮编格式验证信息
function isZip(s) {
    var myreg = /^[1-9]\d{5}(?!\d)$/;
    if (!myreg.test(s)) {
        return false;
    }
    return true;
}

function isIDCard(sId){
    //身份证正则表达式(15位) 
    isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    //身份证正则表达式(18位) 
    isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    //地区、性别和身份证进行判断的正则表达式： 
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }

    var iSum = 0;
    var info = "";
    if (!/^\d{17}(\d|x)$/i.test(sId)) {
        return false;
    }
    sId = sId.replace(/x$/i, "a");
    if (aCity[parseInt(sId.substr(0, 2))] == null) { 
        return "Error:非法地区"; 
    }
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        return "Error:非法生日";
    }
    for (var i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
        return "Error:非法证号";
    }
    return aCity[parseInt(sId.substr(0, 2))] + "," + sBirthday + "," + (sId.substr(16, 1) % 2 ? "男" : "女");
}

//根据邮箱地址跳转到相应邮箱登录页面
function gotoemaillogin(email) {
    var hash = {
        'qq.com': 'http://mail.qq.com',
        'gmail.com': 'http://mail.google.com',
        'sina.com': 'http://mail.sina.com.cn',
        'sina.cn': 'http://mail.sina.com.cn',
        '163.com': 'http://mail.163.com',
        '126.com': 'http://mail.126.com',
        'yeah.net': 'http://www.yeah.net/',
        'sohu.com': 'http://mail.sohu.com/',
        'tom.com': 'http://mail.tom.com/',
        'sogou.com': 'http://mail.sogou.com/',
        '139.com': 'http://mail.10086.cn/',
        'hotmail.com': 'http://www.hotmail.com',
        'live.com': 'http://login.live.com/',
        'live.cn': 'http://login.live.cn/',
        'live.com.cn': 'http://login.live.com.cn',
        '189.com': 'http://webmail16.189.cn/webmail/',
        'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
        'yahoo.cn': 'http://mail.cn.yahoo.com/',
        'eyou.com': 'http://www.eyou.com/',
        '21cn.com': 'http://mail.21cn.com/',
        '188.com': 'http://www.188.com/',
        'foxmail.coom': 'http://www.foxmail.com'
    };
    var url = email.split('@')[1];
    var result = hash[url];
    if (result == '') {
        result = email;
    }
    return result;
}

//只允许输入INT
function writeonlyInt(e) {
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {  //FF
        if (!((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || (e.which == 8) || (e.which == 46)))
            return false;
    } else {
        if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode == 8) || (event.keyCode == 46)))
            event.returnValue = false;
    }
}
//只允许输入DECIMAL
function writeonlyDecimal(e) {
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {  //FF
        if (!((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || (e.which == 8) || (e.which == 46) || (e.which == 190)))
            return false;
    } else {
        if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode == 8) || (event.keyCode == 46)))
            event.returnValue = false;
    }
}

//金额样式输出转换
//type=1时 转换为万为单位
function moneyformat(number, type) {
    if (type == 1) {
        if (number < 10000) {
            return number.toLocaleString();
        }
        else {
            return (number / 10000).toFixed(2) + "万";
        }
    }
    else {
        return number.toFixed(2).toLocaleString();
    }
}

//字符串 金钱格式输出
function StrToDecimalFormat(money) {//Rekey
    var s = money.split('.');
    var str = s[0];
    var str3 = s[1];
    if (str.length > 3) {
        var len = str.length, str2 = '', max = Math.floor(len / 3);
        for (var i = 0; i < max; i++) {
            var s = str.slice(len - 3, len);
            str = str.substr(0, len - 3);
            str2 = (',' + s) + str2;
            len = str.length;
        }
        str += str2;
    }
    return str + "." + str3;
}
//=============================以上页面通用方法======================================

//=============================AJAX==================================================
//发送AJAX请求
function sendAjaxUrl(postData, sendUrl, suc, err) {
    var ObjNum = arguments.length;

    $.ajax({
        type: "post",
        url: sendUrl,
        data: postData,
        dataType: "json",
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (ObjNum < 4) {
                $.dialog.alert('尝试发送失败，错误信息：' + errorThrown, function () { });
            }
            else {
                $.dialog.alert('尝试发送失败，错误信息：' + errorThrown, function () { $(err)(); });
            }
        },
        success: function (data, textStatus) {
            if (data.status == 1) {
                if (ObjNum < 3) {
                    $.dialog.tips(data.msg, 2, '32X32/succ.png', function () { location.reload(); }); //刷新页面
                }
                else {
                    suc(data);
                }
            } else {
                $.dialog.alert('错误提示：' + data.msg, function () { });
            }
        }
    });
}
//=============================以上AJAX==========================================

//=============================会员相关方法======================================
//会员名检测
function isSuitUserName(s) {
    //数字、大小写字母、下划线
    var myreg1 = /(^[0-9a-zA-Z_-]+$)/;
    //中文
    var myreg2 = /(^[\u4E00-\u9FA5]+$)/;
    //全部
    var myreg3 = /(^[0-9a-zA-Z\u4E00-\u9FA5_]+$)/;

    if (!myreg3.test(s) && !myreg2.test(s)) {
        return false;
    }
    return true;
}
//密码检测
function isSuitPwd(s) {
    //纯数字
    var myreg1 = /(^[0-9]+$)/;
    //纯小写字母
    var myreg2 = /(^[a-z]+$)/;
    //纯大写字母
    var myreg3 = /(^[A-Z]+$)/;
    //数字、大小写字母
    var myreg4 = /(^[0-9a-zA-Z]+$)/;

    if (!myreg4.test(s)) {
        return false;
    }
    return true;
}
//密码强度
function GetPswSafety(s, min, max) {
    //纯数字
    var myreg1 = /(^[0-9]+$)/;
    //纯小写字母
    var myreg2 = /(^[a-z]+$)/;
    //数字、小写字母
    var myreg3 = /(^[0-9a-z]+$)/;
    //数字、大小写字母
    var myreg4 = /(^[0-9a-zA-Z]+$)/;

    var strength = 0;
    if (s.length >= min && s.length <= max) {
        if (myreg1.test(s) || myreg2.test(s)) {
            if (s.length < parseInt(max - min)) {
                strength = 1;
            }
            else {
                strength = 2;
            }
        }
        else if (myreg3.test(s)) {
            if (s.length < parseInt(max - min * 3 / 2)) {
                strength = 1;
            }
            else {
                strength = 2;
            }
        }
        else if (myreg4.test(s)) {
            if (s.length < parseInt(max - min * 3 / 2)) {
                strength = 2;
            }
            else {
                strength = 3;
            }
        } 
    }
    return strength;
}
//=============================以上会员相关方法======================================

//=============================银行卡号输入检测，格式============================
//==========input添加属性 size="25" onkeyup="formatBankNo(this)" onkeydown="formatBankNo(this)"================
function formatBankNo(BankNo) {
    if (BankNo.value == "") return;
    var account = new String(BankNo.value);
    account = account.substring(0, 22); /*帐号的总数, 包括空格在内 */
    if (account.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null) {
        /* 对照格式 */
        if (account.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
                    ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null) {
            var accountNumeric = accountChar = "", i;
            for (i = 0; i < account.length; i++) {
                accountChar = account.substr(i, 1);
                if (!isNaN(accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
            }
            account = "";
            for (i = 0; i < accountNumeric.length; i++) {	/* 可将以下空格改为-,效果也不错 */
                if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
                if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
                if (i == 12) account = account + " "; /* 帐号第十二位后数后加空格 */
                account = account + accountNumeric.substr(i, 1)
            }
        }
    }
    else {
        account = " " + account.substring(1, 5) + " " + account.substring(6, 10) + " " + account.substring(14, 18) + "-" + account.substring(18, 25);
    }
    if (account != BankNo.value) BankNo.value = account;
}
function checkBankNo(BankNo) {
    if (BankNo.value == "") return;
    if (BankNo.value.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null) {
        if (BankNo.value.match("[0-9]{19}") != null)
            formatBankNo(BankNo)
    }
}
function checkEnterForFindListing(e) {
    var characterCode;
    if (e && e.which) {
        e = e;
        characterCode = e.which;
    }
    else {
        e = event;
        characterCode = e.keyCode;
    }
    if (characterCode == 22) {
        document.forms[getNetuiTagName("findListingForm")].submit();
        return false;
    }
    else {
        return true;
    }
}
//======================以上银行卡号输入检测，格式===============================

//=============================Cookie操作方法======================================
//写Cookie
function addCookie(objName, objValue, objPath, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objPath != "") {//为空时为默认路径
        str += "; path=" + objPath;
    }
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//读Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}
//=============================以上Cookie操作方法======================================

//=============================string类处理方法======================================
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
}
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
}
//=============================以上string类处理方法======================================

//=============================数组处理方法======================================
Array.prototype.each = function (fn) {
    return this.length ? [fn(this.slice(0, 1))].concat(this.slice(1).each(fn)) : [];
};
//=============================以上数组处理方法======================================

//========================基于lhgdialog插件========================
//可以自动关闭的提示，基于lhgdialog插件
function jsprint(msgtitle, url, msgcss, callback) {
    var iconurl = "";
    switch (msgcss) {
        case "Success":
            iconurl = "32X32/succ.png";
            break;
        case "Error":
            iconurl = "32X32/fail.png";
            break;
        default:
            iconurl = "32X32/hits.png";
            break;
    }
    $.dialog.tips(msgtitle, 3, iconurl);
    setTimeout(function () {
        if (url == "back") {
            window.history.back(-1);
        } else if (url == "refresh") {
            window.location.reload();
        } else if (url != "") {
            window.location.href = url;
        }
        //执行回调函数
        if (arguments.length == 4) {
            callback();
        }
    }, 2000);
}
//弹出一个Dialog窗口
function jsdialog(msgtitle, msgcontent, url, msgcss, callback) {
    var iconurl = "";
    var argnum = arguments.length;
    switch (msgcss) {
        case "Success":
            iconurl = "success.gif";
            break;
        case "Error":
            iconurl = "error.gif";
            break;
        default:
            iconurl = "alert.gif";
            break;
    }
    var dialog = $.dialog({
        title: msgtitle,
        content: msgcontent,
        fixed: true,
        min: false,
        max: false,
        lock: true,
        icon: iconurl,
        ok: true,
        close: function () {
            if (url == "back") {
                history.back(-1);
            } else if (url != "") {
                location.href = url;
            }
            //执行回调函数
            if (argnum == 5) {
                callback();
            }
        }
    });
}
//========================以上基于lhgdialog插件========================