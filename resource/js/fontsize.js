// 通过js适配不同的屏幕大小
  // (function (doc, win) {
  //   var docEl = doc.documentElement,
  //       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  //       recalc = function () {
  //         var clientWidth = docEl.clientWidth;
  //         if (!clientWidth) return;
  //         // 根据设备的比例调整初始font-size大小
  //         if(clientWidth>750) clientWidth = 750;
  //         docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
  //       };

  //   if (!doc.addEventListener) return;
  //   win.addEventListener(resizeEvt, recalc, false);
  //   doc.addEventListener('DOMContentLoaded', recalc, false);
  // })(document, window);

  (function () {
    document.addEventListener('DOMContentLoaded', function () {
    var deviceWidth = document.documentElement.clientWidth;
    if(parseFloat(deviceWidth)>=750){
             document.documentElement.style.fontSize=100+'px';
    }else{
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }
    
    }, false);
  window.onresize = function(){
    var deviceWidth = document.documentElement.clientWidth;
    if(parseFloat(deviceWidth)>=750){
             document.documentElement.style.fontSize=100+'px';
    }else{
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }
};
})(); 