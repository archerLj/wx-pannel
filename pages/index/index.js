import { ScrollTitlePannel } from '../commns/scrollTitle-pannel/scrollTitle-pannel'
var app = getApp();

let pageData = {
data: {
    ScrollTitlePannel,
    titles: [
      '推荐',
      '热点',
      '视频',
      '正能量',
      '三农',
      '旅游',
      '大上海',
      '中国新唱将',
      '美食',
    ],
  },

  st_pannel_callback: function(index) {
    console.log("选中了" + index);
    this.loadingPannel.show();
    setTimeout(() => {
      this.loadingPannel.hide()
    }, 10000);
  },

  onLoad: function () {
    new app.LoadingPannel()

    new ScrollTitlePannel()
    this.scrollTitlePannel.init({
      callback: this.st_pannel_callback
    });
  }
}

Page(pageData);