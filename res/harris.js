"use strict";
// 卖萌标题
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "(つェ⊂) 你不会近视了叭？";
    clearTimeout(titleTime);
  } else {
    document.title = "(*´∇｀*) 怪不得看不出我钟意你";
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
