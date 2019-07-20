var popData = {
    "title": "王者荣耀职业联赛",
    "txt": "总决赛暨年终盛典",
    "vid": "0",
    "num": "1",
    //"img": "//ossweb-img.qq.com/upload/webplat/info/yxzj/20170708/554853708316.jpg",
    //"link": "/webplat/info/news_version3/15592/24091/27100/m11740/201612/535700.shtml",
    "time": "06/09"
};
var videoLinkUrl = "//pvp.qq.com/act/a20170625kpl/index.htm?ADTAG=pvp.hi";
if (videoLinkUrl && document.getElementById('popVideoLink')) {
    document.getElementById('popVideoLink').href = videoLinkUrl;
}

/* 页面交互 ----------------------------------------------------------------------*/
(function () {

    //tab切换
    need("biz.tabs", function (tabs) {
        tabs.init("newsTab", "news-list", {event: "mouseover"});
    })

    //轮播广告
    var gets = {
        tag: function (p, o) {
            return document.getElementById(p).getElementsByTagName(o);
        }
    };
    var oDaTaNew15191 = {
        "pos16040": ["\u51a0\u519b\u676f\u552e\u7968\u5f00\u542f", "http:\/\/pvp.qq.com\/webplat\/info\/news_version3\/15592\/22661\/22664\/25332\/m14538\/201708\/620787.shtml?e_code=345631&atm_cl=ad&atm_pos=16040&idata_id=145085", "image\/1502074949\/1502074949.jpg?_r=1502075187", "604", "298", "0", "0", "0", "256938", "", "2017-08-07 00:00:00", "2017-09-06 23:59:00", "145085"],
        "pos16041": ["\u63a2\u79d8\u767e\u91cc\u5b88\u7ea6", "http:\/\/pvp.qq.com\/web201605\/newsDetail.shtml?G_Biz=18&tid=123565&e_code=345634&atm_cl=ad&atm_pos=16041&idata_id=144984", "image\/1502075186\/1502075186.jpg?_r=1502075187", "604", "298", "0", "0", "0", "256865", "", "2017-08-07 10:00:00", "2017-09-04 23:59:00", "144984"],
        "pos16042": ["\u6708\u7231\u51fa\u54c1", "http:\/\/pvp.qq.com\/v\/detail.shtml?G_Biz=18&tid=156456&e_code=345276&atm_cl=ad&atm_pos=16042&idata_id=144923", "image\/1501910258\/1501910258.jpg?_r=1502075187", "604", "298", "0", "0", "0", "256822", "", "2017-08-05 00:00:00", "2017-09-04 23:59:00", "144923"],
        "pos16043": ["\u4e00\u9e7f\u4e0a\u738b\u8005", "http:\/\/pvp.qq.com\/v\/detail.shtml?G_Biz=18&tid=157216&e_code=345629&atm_cl=ad&atm_pos=16043&idata_id=145083", "image\/1502074167\/1502074167.jpg?_r=1502075187", "604", "298", "0", "0", "0", "256936", "", "2017-08-07 00:00:00", "2017-09-06 23:59:00", "145083"],
        "pos16044": ["\u738b\u8005\u767e\u79d1", "http:\/\/pvp.qq.com\/v\/detail.shtml?G_Biz=18&tid=156424&e_code=345623&atm_cl=ad&atm_pos=16044&idata_id=145079", "image\/1502073267\/1502073267.jpg?_r=1502075187", "604", "298", "0", "0", "0", "256932", "", "2017-08-07 00:00:00", "2017-09-06 23:59:00", "145079"],
        "pos16680": ["\u957f\u57ce\u5c0f\u961f\u6761\u6f2b", "http:\/\/pvp.qq.com\/web201605\/newsDetail.shtml?G_Biz=18&tid=94092&e_code=341551&atm_cl=ad&atm_pos=16680&idata_id=143085", "image\/1500781903\/1500781903.jpg?_r=1502075187", "570", "350", "0", "0", "0", "254554", "", "2017-07-23 00:00:00", "2017-08-22 23:59:00", "143085"],
        "pos16683": ["\u3010\u540d\u5e08\u51fa\u5751\u5f92\u3011\u5634\u5f3a\u738b\u8005\u4e5f\u662f\u738b\u8005\u554a", "http:\/\/pvp.qq.com\/web201605\/newsDetail.shtml?G_Biz=18&tid=93575&e_code=341550&atm_cl=ad&atm_pos=16683&idata_id=143084", "image\/1500781723\/1500781723.jpg?_r=1502075187", "172", "175", "0", "0", "0", "254553", "", "2017-07-23 00:00:00", "2017-08-22 23:59:00", "143084"],
        "pos16684": ["\u4e00\u56fe\u8bc6\u82f1\u96c4", "http:\/\/pvp.qq.com\/web201605\/newsDetail.shtml?G_Biz=18&tid=120300&e_code=341552&atm_cl=ad&atm_pos=16684&idata_id=143086", "image\/1500782143\/1500782143.jpg?_r=1502075187", "172", "175", "0", "0", "0", "254555", "", "2017-07-23 00:00:00", "2017-08-22 23:59:00", "143086"]
    }
    //轮播 promo
    var t = 0,
        JGetPromo = function () {
            loadScript("https://www.baidu.com/", function () {
                var promoArray = '',
                    promoTriggerArray = '',
                    count = 0,
                    ShowAdList = new Array();
                for (var item in oDaTaNew15191) {
                    var d = oDaTaNew15191[item];
                    ShowAdList.push(d[1]);
                    if (d && count < 5) {
                        count++;
                        promoArray += '<li class="promo-item"><a onclick="PTTSendClick(\'ad\',\'btn_' + count + '\',\'广告' + count + '\');EAS.ADClick(\'' + d[1] + '\');" href="' + d[1] + '" target="_blank"><img src="//game.gtimg.cn/upload/adw/' + d[2] + '" width="604" height="298" alt="' + decodeURI(d[0]) + '"/></a></li>';
                        promoTriggerArray += '<span class="rt">' + decodeURI(d[0]) + '</span>';
                    }
                    if (ShowAdList.length == 5) {
                        var ShowAdStr = ShowAdList.join("|");
                        if (typeof(EAS.ADShow) == 'function') {
                            EAS.ADShow(ShowAdStr);
                        }
                        ;
                    }
                    ;
                }
                g('promoInner').innerHTML = promoArray;
                g('promoTrigger').innerHTML = promoTriggerArray;
                var amount = 5,
                    ts = amount - 1,
                    p = 0;
                $('#promoTrigger span').eq(0).addClass('rn');
                var timeout;
                timeout = setInterval(function () {
                    promoMove();
                }, 5000);
                $('#promoTrigger span').each(function (index) {
                    $(this).mouseover(function () {
                        clearInterval(timeout);
                        t = index;
                        $("#promoInner").animate({
                            'marginLeft': -t * 604 + 'px'
                        }, {
                            queue: false,
                            duration: 200
                        });
                        $('#promoTrigger span').eq(t).addClass('rn').siblings().removeClass('rn');
                        timeout = setInterval(function () {
                            promoMove();
                        }, 5000);
                        //},100);
                    });
                });
                //动画效果
                function promoMove() {
                    t = parseInt(t + 1);
                    if (t > ts) {
                        t = 0;
                    }
                    if (t < 0) {
                        t = ts;
                    }
                    p = t;
                    $("#promoInner").animate({
                        'marginLeft': -p * 604 + 'px'
                    }, {
                        queue: false,
                        duration: 200
                    });
                    $('#promoTrigger span').eq(p).addClass('rn').siblings().removeClass('rn');
                }
            });
        }();

    /* 英雄限费时间填充，一般为周1-周日 add by sonic 2017-06-01 */
    // 获取当前服务器时间
    function getServerTime(callback) {
        $.getScript('//apps.game.qq.com/CommArticle/app/reg/gdate.php?t=' + new Date().getTime(), function () {
            var serverDate = json_curdate,
                date = new Date(serverDate.replace(/-/g, "/"));
            callback && callback(date);
        });
    }

    function getDateStr(date, offset) {
        var dateSet = date || new Date(),
            offset = offset || 0;
        var h = new Date();
        h.setDate(dateSet.getDate() + offset);
        var set = [];
        set.push(h.getFullYear());
        set.push(h.getMonth() + 1);
        set.push(h.getDate());
        return set[0] + '-' + set[1] + '-' + set[2];
    }

    var freeHeroDayFill = function (d) {
        var d = d || new Date();
        var day = d.getDay();
        var d1, d2;
        switch (day) {
            case 0: //日
                d1 = getDateStr(d, +1);
                d2 = getDateStr(d, +7);
                break;
            case 1: //一
                d1 = getDateStr(d, 0);
                d2 = getDateStr(d, +6);
                break;
            case 2: //二
                d1 = getDateStr(d, -1);
                d2 = getDateStr(d, +5);
                break;
            case 3: //三
                d1 = getDateStr(d, -2);
                d2 = getDateStr(d, +4);
                break;
            case 4: //四
                d1 = getDateStr(d, -3);
                d2 = getDateStr(d, +3);
                break;
            case 5: //五
                d1 = getDateStr(d, -4);
                d2 = getDateStr(d, +2);
                break;
            case 6: //六
                d1 = getDateStr(d, -5);
                d2 = getDateStr(d, +1);
                break;
        }
        if (d1) {
            $("#freeDayBegin").html(d1)
        }
        if (d2) {
            $("#freeDayEnd").html(d2)
        }
    }
    // 拿当前服务器时间计算得出本周1 - 下周日
    getServerTime(freeHeroDayFill);
})();


// 赛事弹窗
(function () {
    function createChannel(wrapId, cid, width, height) {
        $.getScript("//game.gtimg.cn/images/js/swfobject.js", function () {
            $.getScript("//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_jq.js", function () {
                var video = new tvp.VideoInfo();
                video.setChannelId(cid);
                var player = new tvp.Player();
                player.create({
                    width: width,
                    height: height,
                    type: 1,
                    video: video,
                    modId: wrapId,
                    autoplay: true
                });
            })
        })
    }

    function dragVideo() {
        var box = document.getElementById('videoSpop');
        box.onmousedown = function (event) {
            var e = event || window.event,
                t = e.target || e.srcElement,
                x1 = e.clientX,
                y1 = e.clientY,
                dragLeft = this.offsetLeft,
                dragTop = this.offsetTop;
            document.onmousemove = function (event) {
                var e = event || window.event,
                    t = e.target || e.srcElement,
                    x2 = e.clientX,
                    y2 = e.clientY,
                    x = x2 - x1,
                    y = y2 - y1;
                box.style.left = (dragLeft + x) + 'px';
                box.style.top = (dragTop + y) + 'px';
            }
            document.onmouseup = function () {
                this.onmousemove = null;
            }
        }
    }

    function popVideo() {
        $("#video_pop").css("background", "url(" + popData.img + ") no-repeat 0 0");
        createChannel("mod_player", cid, '100%', 490);
        setTimeout(function () {
            TGDialogS('video_pop');
        }, 500);
    }

    var cid = popData.vid,
        num = popData.num,
        showpop,
        showflag = false;
    if (cid !== '0') {
        if (num == '1') {
            var mvShowed = JSON.parse(localStorage.getItem('mvshowflag'));
            if (!mvShowed || (mvShowed && +new Date().getTime() - mvShowed.expire > 1000 * 60 * 60 * 24)) {
                popVideo();
                localStorage.setItem('mvshowflag', JSON.stringify({'show': true, 'expire': new Date().getTime()}));
            }
        } else {
            popVideo();
        }
    }
    $(".pop-video-small").on("click", function () {
        $("#videoSpop").show();
        $(".pop-video").hide();
        $("#_overlay_").hide();
        $("#mod_player").html("");
        createChannel("vpop", cid, 420, 260);
    })
    $(".clspop").on("click", function () {
        $("#vpop").html("");
        $("#videoSpop").hide();
        $("#video_pop,#_overlay_").hide();
    });

    // 直播dialog关不掉，单独JS处理
    $(".pop-video-close").on("click", function () {
        $("#video_pop,#_overlay_").hide();
    })

})();